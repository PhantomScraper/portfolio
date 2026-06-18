---
title: "Case Study: Scaling an Amazon Scraper to 10 Million Products a Day"
description: "How I built a data pipeline that scrapes 10 million Amazon products per day through IP blocks and CAPTCHAs, using rotating proxies, Playwright, and a distributed Scrapy architecture."
date: "2026-06-18"
tags: ["case study", "amazon", "data pipeline", "web scraping", "scrapy", "playwright", "proxies"]
readingTime: "9 min read"
takeaways:
  - "Ten million products a day is a throughput problem first and an anti-bot problem second."
  - "Split the work: cheap HTTP requests for static pages, headless browsers only where JavaScript forces it."
  - "Rotating residential proxies plus session reuse cut the CAPTCHA rate far more than solving CAPTCHAs after the fact."
  - "A queue-backed, distributed Scrapy cluster scales horizontally without rewriting the spiders."
  - "Monitoring success rate per field is what keeps the pipeline alive as Amazon changes its markup."
---

# Case Study: Scaling an Amazon Scraper to 10 Million Products a Day

This is a write-up of a real pattern I build for clients as a senior web scraping expert and data pipeline engineer. Names and exact numbers are generalized, but the architecture and the problems are exactly what you hit at this scale.

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
- **Scrapy workers.** Scrapy handles concurrency, retries, and backpressure natively. Each worker runs hundreds of concurrent requests through the proxy layer. This is how you [scale a scraper with Scrapy](/blog/scrapy-large-scale-scraping) without writing your own async engine.
- **Browser tier.** A separate, smaller pool of [Playwright](/blog/playwright-vs-puppeteer-vs-selenium) workers handles only the escalated pages: JavaScript-rendered content and interactive challenges.
- **Storage.** Raw HTML lands in S3 (cheap, lets you re-parse history when selectors change), structured fields go to Postgres.

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

When a block is detected, the request is not retried blindly on the same session. It is requeued with a flag that rotates the proxy and session, and after a couple of failures it escalates to the browser tier where a CAPTCHA can actually be solved. The point is that **reducing how often the CAPTCHA appears is far cheaper than solving it**. Geo-matched residential proxies plus session reuse dropped the challenge rate enough that the [CAPTCHA solving](/blog/solving-captchas-2captcha-capsolver) bill became a rounding error instead of the main cost.

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

## The results

After the rebuild, the pipeline sustained the **10 million pages a day** target with headroom, at a fraction of the infrastructure cost a browser-only approach would have needed. The numbers that actually mattered to the client:

- **Throughput:** sustained 116-plus pages per second across the worker pool, scalable by adding nodes.
- **Block rate:** the share of requests hitting the robot check dropped low enough that retries, not CAPTCHA solving, absorbed it.
- **Cost:** roughly 90 percent of pages served through cheap HTTP, with browsers reserved for the pages that truly needed them.
- **Data quality:** per-field success monitoring caught markup changes within hours instead of after a day of silent null data.

## What actually keeps it running

Building a scraper that hits the number once is the easy part. Amazon changes its markup and tightens its defenses constantly, so the real deliverable is a pipeline that survives that change: monitored success rates per field, alerts when extraction starts returning nulls, raw HTML archived so you can re-parse history when a selector breaks, and proxy and session health tracked as first-class metrics. A scraper is not a script. It is an operations problem, and that is where most teams underinvest.

## Need a scraper that scales to millions of pages?

I design and build production data pipelines that scrape at scale through IP blocks, CAPTCHAs, and dynamic JavaScript sites, using rotating proxies, Playwright, and distributed Scrapy. If you have a high-volume scraping or data pipeline project, [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2) or reach out through the [contact form](/#contact). I respond within 24 hours.
