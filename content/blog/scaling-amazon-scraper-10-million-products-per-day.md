---
title: "Scaling an Amazon Scraper to 10 Million Products a Day"
description: "How I built a scalable asynchronous crawler for 10 million Amazon products a day: Scrapy pipelines, rotating proxies, CAPTCHA detection, and monitoring."
date: "2026-06-18"
updated: "2026-11-09"
tags: ["case study", "amazon", "data pipeline", "web scraping", "scrapy", "playwright", "proxies", "price monitoring", "monitoring"]
readingTime: "12 min read"
takeaways:
  - "Ten million products a day is a throughput problem first and an anti-bot problem second."
  - "Split the work: cheap HTTP requests for static pages, headless browsers only where JavaScript forces it."
  - "Rotating residential proxies plus session reuse cut the CAPTCHA rate far more than solving CAPTCHAs after the fact."
  - "A queue-backed, distributed Scrapy cluster scales horizontally without rewriting the spiders."
  - "Amazon serves several price layouts, so every field gets a chain of fallback selectors."
  - "Alert on null rate per field, not just errors: a broken selector still returns 200s with empty fields."
faqs:
  - question: "How do you scrape Amazon product data reliably?"
    answer: "Use residential proxies matched to the marketplace country, reuse clean sessions, validate every response body because the Robot Check page comes back as a 200, and give every field a chain of fallback selectors because Amazon serves several layouts. Then monitor success rate and null rate per field so markup changes are caught within hours, not after a week of empty data."
  - question: "Can Scrapy handle 10 million pages a day?"
    answer: "Yes, as a distributed setup: Scrapy workers pulling from a shared Redis URL frontier, plain HTTP for the roughly 90 percent of pages that do not need JavaScript, and a small separate browser pool for the rest. Throughput scales by adding workers, without rewriting the spiders. For a one-off grab of a few pages, a small script is simpler."
  - question: "Is it legal to scrape Amazon?"
    answer: "Amazon's terms of service prohibit scraping and Amazon actively blocks it, even though collecting publicly visible product data is common practice. Avoid personal data, keep request rates moderate, and get legal advice for your specific use case. Where compliance is a hard requirement, Amazon's Product Advertising API and Selling Partner API provide structured data through official channels."
  - question: "How do you monitor a scraper in production?"
    answer: "Track four signals and alert on each: success rate, null rate per field, block rate, and run duration. A drop in success rate means the site or the proxies changed, a null-rate spike means a selector broke while requests still return 200, and a rising block rate means the fingerprint or proxy pool needs attention. Archive raw HTML so a broken selector can be fixed and history re-parsed."
---

# Case Study: Scaling an Amazon Scraper to 10 Million Products a Day

This is a write-up of a real pattern I build for clients as a senior web scraping expert and data pipeline engineer. Names and exact numbers are generalized, but the architecture and the problems are exactly what you hit at this scale. It doubles as a playbook: the Scrapy code, the Amazon field extraction, and the production monitoring behind the pipeline are all below.

## Project Overview (TL;DR)

- **Challenge:** Track roughly 10 million Amazon product pages every day past IP blocks, robot checks, and CAPTCHAs. That is a sustained 116+ pages per second, far beyond what a single script can do.
- **Tech stack:** Python, distributed Scrapy workers behind a Redis URL frontier, a separate Playwright browser tier for JavaScript-rendered pages, rotating residential proxies with geo matching, and storage in PostgreSQL and S3.
- **Result:** The rebuilt pipeline sustained 10 million pages per day with headroom. Roughly 90 percent of pages were served through cheap HTTP requests instead of headless browsers, the CAPTCHA solving bill dropped to a rounding error, and per-field success monitoring caught Amazon markup changes within hours.

## The Challenge

A client in the e-commerce intelligence space needed to track pricing and availability across roughly **10 million Amazon product pages every day**. They had an existing script that worked for a few thousand products, then fell over the moment they tried to scale it.

The two walls they hit are the same two everyone hits:

- **IP blocking.** Amazon flagged their datacenter IP range within minutes. Requests started returning the "Robot Check" page (served as a `200`, not an error), and eventually the IPs were throttled to uselessness.
- **CAPTCHAs.** Once flagged, every other request demanded a CAPTCHA. Their script had no way to detect this, so it happily saved thousands of CAPTCHA pages as if they were product data.

On top of that, 10 million pages a day is about **116 pages per second, sustained**. A single-threaded script doing one request at a time, even at a generous half-second per page, tops out around 170,000 pages a day. They were off by a factor of nearly 60. So this was a throughput problem first, and an anti-bot problem second.

## Reframing the problem

The instinct at this scale is to throw a fleet of headless browsers at it. That is the most expensive possible answer. A Chromium instance costs hundreds of megabytes of RAM and a meaningful slice of CPU per page. Running 116 of those per second is a small server farm.

So the first design decision was to **split the workload by what each page actually needs**:

- Most Amazon product fields (title, price, rating, availability) are present in the initial HTML. Those can be fetched with plain HTTP and parsed, which is one to two orders of magnitude cheaper than a browser.
- Only the pages where the data is rendered by JavaScript, or where a challenge has to be solved interactively, get escalated to a headless browser.

That single split is what makes the economics work. Browsers became the exception, not the rule.

## The architecture

The system is a queue-backed, distributed Scrapy cluster. Here is the shape of it:

```
URL frontier (Redis)  ->  Scrapy workers (N nodes)  ->  parse + validate
        ^                        |                            |
        |                        v                            v
   retry queue  <----  proxy pool + CAPTCHA detect      Postgres / S3 (raw + structured)
```

- **URL frontier.** A Redis-backed queue holds the day's product URLs. Workers pull batches, so adding capacity is just adding workers. No coordinator rewrite needed.
- **Scrapy workers.** Scrapy handles concurrency, retries, and backpressure natively. Each worker runs hundreds of concurrent requests through the proxy layer. This is how you scale a scraper with Scrapy without writing your own async engine; the code for that layer is in the next section.
- **Browser tier.** A separate, smaller pool of [Playwright](/blog/playwright-vs-puppeteer-vs-selenium) workers handles only the escalated pages: JavaScript-rendered content and interactive challenges.
- **Storage.** Raw HTML lands in S3 (cheap, lets you re-parse history when selectors change), structured fields go to Postgres.

## The Scrapy layer, in code

Scrapy is the right engine once a job is recurring and spans many pages; for a one-off grab of a few pages, a small script is simpler. At this scale it earns its keep in three places.

**Item pipelines** clean and validate every record before it is stored, in stages you order by priority:

```python
from scrapy.exceptions import DropItem

class CleanPricePipeline:
    def process_item(self, item, spider):
        if item.get("price"):
            item["price"] = item["price"].replace("$", "").replace(",", "").strip()
        return item

class DropEmptyPipeline:
    def process_item(self, item, spider):
        if not item.get("title"):
            raise DropItem("Missing title")
        return item

# settings.py
ITEM_PIPELINES = {
    "pipeline.pipelines.CleanPricePipeline": 100,
    "pipeline.pipelines.DropEmptyPipeline": 200,
}
```

**Concurrency with AutoThrottle.** AutoThrottle watches response latency and slows down before the target starts blocking. Start from conservative settings like these and raise concurrency only while the block rate stays at zero; the production workers here ended up running hundreds of concurrent requests each.

```python
# settings.py
CONCURRENT_REQUESTS = 16
CONCURRENT_REQUESTS_PER_DOMAIN = 8
DOWNLOAD_DELAY = 0.5
AUTOTHROTTLE_ENABLED = True
AUTOTHROTTLE_TARGET_CONCURRENCY = 4.0
RETRY_TIMES = 3
```

**Idempotent storage.** Workers retry and re-crawl, so every write must be safe to repeat. An upsert keyed on a stable identifier, the ASIN here, updates the row instead of duplicating it, which makes a partial re-run after a crash harmless. At this volume the pipeline buffers items and writes them in batches rather than committing row by row.

```sql
INSERT INTO products (asin, title, price, scraped_at)
VALUES (%s, %s, %s, now())
ON CONFLICT (asin) DO UPDATE
SET title = EXCLUDED.title, price = EXCLUDED.price, scraped_at = now();
```

On smaller crawls that need some JavaScript, `scrapy-playwright` gives the same HTTP-first, browser-when-needed split inside a single spider.

## Beating the IP blocks

Datacenter IPs are dead on arrival for Amazon at volume. The fix is **rotating residential proxies**, with two rules that matter more than the proxy choice itself:

1. **Match the proxy country to the marketplace.** Scraping `amazon.de` from a US IP gets you redirected and wrong prices. Geo-matching the proxy is non-negotiable for correct data.
2. **Reuse clean sessions.** A fresh IP and fresh cookies on every request looks more robotic, not less. Once a session is clean, ride it until it degrades.

```python
import random

class ProxyMiddleware:
    def __init__(self, pool):
        self.pool = pool  # residential endpoints, grouped by country

    def process_request(self, request, spider):
        country = request.meta.get("country", "us")
        request.meta["proxy"] = random.choice(self.pool[country])
```

I go deeper on the trade-offs in my guides on [rotating proxies](/blog/rotating-proxies-for-web-scraping) and [residential proxy services compared](/blog/residential-proxy-services-compared).

## Detecting CAPTCHAs and the robot check

The cardinal sin in the client's original script was trusting the `200` status code. Amazon returns `200` with a block page. You have to validate the body, every time.

```python
ROBOT_MARKERS = (
    "Robot Check",
    "Enter the characters you see below",
    "automated access to Amazon data",
)

def is_blocked(html: str) -> bool:
    return any(m in html for m in ROBOT_MARKERS)
```

When a block is detected, the request is not retried blindly on the same session. It is requeued with a flag that rotates the proxy and session, and after a couple of failures it escalates to the browser tier where a CAPTCHA can actually be solved. The point is that **reducing how often the CAPTCHA appears is far cheaper than solving it**. Geo-matched residential proxies plus session reuse dropped the challenge rate enough that the [CAPTCHA solving](/blog/bypass-cloudflare-web-scraping#solving-turnstile-and-other-captchas) bill became a rounding error instead of the main cost.

If you are dealing with the harder defenses, I cover those separately in [bypassing Cloudflare](/blog/bypass-cloudflare-web-scraping) and [bypassing DataDome and PerimeterX](/blog/bypass-datadome-perimeterx).

## Extracting from dynamic, JavaScript-rendered pages

Some product variants, lightning deals, and review widgets only populate after JavaScript runs. For those, the Playwright tier waits on the real signal rather than a fixed sleep, which keeps the browser workers fast.

```python
async def scrape_dynamic(page, url):
    await page.goto(url, wait_until="domcontentloaded")
    # Wait for the price node to actually render, not a blind timeout
    await page.wait_for_selector(".a-price .a-offscreen", timeout=8000)
    return await page.content()
```

Blind `sleep()` calls are the most common reason a browser-based scraper is slow. Waiting on the specific element that carries your data is both faster and more reliable.

## Extracting Amazon product fields reliably

A product record here carries the title, brand, and ASIN; the current, list, and deal price; star rating and review count; availability and the Buy Box seller; images and bullet features; and, for some clients, review text. Each lives in a predictable spot, but Amazon serves different layouts to different regions and visitors, which is the first thing that breaks a naive scraper.

The single most important reliability trick is a fallback chain per field. Price alone appears in several layouts, so the parser tries each known location in order and records a miss instead of guessing:

```python
PRICE_SELECTORS = (
    ".a-price .a-offscreen",
    "#corePrice_feature_div .a-offscreen",
    "#priceblock_ourprice",
)

def extract_price(response):
    for sel in PRICE_SELECTORS:
        value = response.css(f"{sel}::text").get()
        if value:
            return value.strip()
    return None  # counted by the null-rate monitor, never silently dropped
```

Reviews span many pages: follow the next-page link with a delay between requests so the review crawl does not spike your request rate.

**The policy reality.** Scraping publicly visible product data is common, but Amazon's terms of service prohibit it and Amazon actively defends against it. Do not collect personal data, throttle your requests, and read this as a technical write-up, not a claim that Amazon permits it. Where compliance is a hard requirement, evaluate the official channels first: the Product Advertising API and the Selling Partner API return structured data without scraping, with strict eligibility rules, rate limits, and less coverage than the website shows. For price monitoring at a scale the APIs do not fit, scraping remains the common path.

## The results

After the rebuild, the pipeline sustained the **10 million pages a day** target with headroom, at a fraction of the infrastructure cost a browser-only approach would have needed. The numbers that actually mattered to the client:

- **Throughput:** sustained 116-plus pages per second across the worker pool, scalable by adding nodes.
- **Block rate:** the share of requests hitting the robot check dropped low enough that retries, not CAPTCHA solving, absorbed it.
- **Cost:** roughly 90 percent of pages served through cheap HTTP, with browsers reserved for the pages that truly needed them.
- **Data quality:** per-field success monitoring caught markup changes within hours instead of after a day of silent null data.

## Running it in production: retries, monitoring, and scheduling

Building a scraper that hits the number once is the easy part. Amazon changes its markup and tightens its defenses constantly, so the real deliverable is a pipeline that survives that change. The difference between a script and a system is recovery and alerting.

**Retries with discipline.** Retry timeouts, connection errors, and soft blocks with capped exponential backoff, and never retry a clean `404`, which will not succeed. Here the retry queue rotates the proxy and session before trying again, and the cap stops one struggling target from stalling the frontier.

**Four signals, each with an alert:**

- **Success rate**: the share of requests returning valid data. A drop means the site changed or the proxies are failing.
- **Null rate per field**: a spike means a selector broke even though requests still return `200`.
- **Block rate**: robot checks and `403`s. A rising rate means the fingerprint or the proxy pool needs attention.
- **Run duration**: a sudden change signals trouble before the data shows it.

```python
def check_health(stats: dict):
    if stats["success_rate"] < 0.85:
        alert(f"Success rate dropped to {stats['success_rate']:.0%}")
    if stats["null_rate"] > 0.2:
        alert(f"Null rate {stats['null_rate']:.0%}, a selector likely broke")
```

Even a Slack message on a threshold breach turns a silent week of empty data into a same-day fix.

**Proxy health as a first-class metric.** IPs degrade as they get flagged, so the pool tracks per-proxy success rates and retires underperformers automatically instead of letting a few burned IPs drag down the whole run.

**Scheduling.** A single daily job is fine on cron. Once there are many jobs, dependencies between them, or a need to see run history, move to a scheduler such as APScheduler, or a workflow tool like Airflow or Prefect. For per-URL fan-out, a task queue (Celery with Redis is the common Python choice) turns each URL into an independent task so one bad page never kills the run; in this pipeline the Redis frontier plays that role.

Raw HTML archived in S3 is the last safety net: when a selector breaks, you fix it and re-parse history instead of re-crawling. A scraper is not a script. It is an operations problem, and that is where most teams underinvest.

## Need a scraper that scales to millions of pages?

I design and build production data pipelines that scrape at scale through IP blocks, CAPTCHAs, and dynamic JavaScript sites, using rotating proxies, Playwright, and distributed Scrapy. Pipelines like this are the top end of my [custom web scraping service](/web-scraping-service). If you have a high-volume scraping or data pipeline project, [hire me on Upwork](https://www.upwork.com/freelancers/~01b9886dc1296b3a63) or reach out through the [contact form](/#contact). I respond within 24 hours. If you are still comparing options, my guide to [hiring a web scraping developer](/hire-web-scraping-developer) covers 2026 rates and how to vet candidates.
