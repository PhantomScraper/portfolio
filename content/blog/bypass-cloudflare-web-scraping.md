---
title: "How to Scrape Cloudflare-Protected Websites (Python, 2026)"
description: "Whether cloudscraper still works, which Python stack gets through Cloudflare in 2026, and how the paid scraping APIs compare on price and success rate."
date: "2026-06-10"
updated: "2026-08-28"
tags: ["web scraping", "cloudflare", "anti-bot", "playwright", "python", "cloudscraper"]
readingTime: "12 min read"
takeaways:
  - "Cloudflare scores you across TLS, HTTP/2, browser fingerprint, behavior, and IP reputation."
  - "cloudscraper and the original cloudflare-scrape are effectively dead against modern Bot Management."
  - "Plain HTTP clients fail at the TLS layer; curl_cffi impersonates a real browser and handles low security settings."
  - "Managed challenges need a patched stealth browser (Camoufox, nodriver, patchright), not a stock headless launch."
  - "Residential proxies matched to the site's country are required, and a 200 response can still be a block page."
  - "Scraping APIs cost roughly $1 to $5 per 1,000 successful requests and are cheaper than DIY below a few million pages a month."
faqs:
  - question: "Does Cloudflare prevent web scraping?"
    answer: "Cloudflare does not block scraping outright. It scores every request across TLS fingerprint, HTTP/2 fingerprint, browser fingerprint, behavior, and IP reputation, then challenges or blocks the requests that score badly. A scraper that looks like a real browser on all five layers passes. A Python requests session fails at the very first layer, before any JavaScript runs."
  - question: "Does cloudscraper or cloudflare-scrape still work in 2026?"
    answer: "Not against current Cloudflare Bot Management. Both libraries were built to solve the old IUAM JavaScript challenge that Cloudflare retired years ago. They still work on a small number of sites running very old or very relaxed settings, but on anything with a managed challenge or Turnstile they return the block page. Use curl_cffi for TLS impersonation or a patched stealth browser instead."
  - question: "What is the best Python Cloudflare scraper in 2026?"
    answer: "There is no single library. For sites on low security settings, curl_cffi with impersonate=\"chrome131\" is the fastest and cheapest option at roughly 20 to 50 pages per second. For managed challenges and Turnstile you need a patched browser such as Camoufox, nodriver, or patchright, paired with residential proxies. Most production systems use curl_cffi first and fall back to the browser only when a block is detected."
  - question: "What is the best scraping API for Cloudflare-protected sites?"
    answer: "Bright Data Web Unlocker and Scrapfly have the highest success rates on hard Cloudflare targets, ZenRows and ScraperAPI are cheaper for medium difficulty, and ScrapingBee sits in between with the simplest API. Expect roughly $1 to $5 per 1,000 successful requests. Below about two million pages a month an API is usually cheaper than building and maintaining the equivalent stack yourself."
  - question: "Is it legal to scrape a Cloudflare-protected website?"
    answer: "Cloudflare is a technical control, not a legal one, and its presence does not by itself make scraping illegal. What matters is the same set of questions as any other site: whether the data is public, what the terms of service say, whether personal data is involved under GDPR or CCPA, and whether your request volume harms the service. Get legal advice for anything involving personal data, paywalled content, or a site you have an account on."
  - question: "How much does it cost to hire someone to scrape a Cloudflare-protected site?"
    answer: "A senior freelance web scraping developer charges $30 to $80 per hour in 2026, or $100 to $600 fixed for a one-off extraction from a single protected site. Recurring managed pipelines that include proxy costs, monitoring, and repairs when Cloudflare updates run $200 to $1,000+ per month. Web scraping companies typically charge two to five times more for the same deliverable."
---

# How to Scrape Cloudflare-Protected Websites in 2026 (Python Guide)

Cloudflare sits in front of roughly a fifth of the web, and its bot management has gotten much harder to beat. If you have hit the "Checking your browser" interstitial, a Turnstile challenge, or a silent `403`, this guide covers what is actually happening, which tools still work in 2026, and what it costs to get through reliably.

## What Cloudflare actually checks

Cloudflare does not rely on one signal. It scores you across several layers, and failing any one can flag you:

- **TLS fingerprint (JA3/JA4).** The way your HTTP client negotiates TLS reveals whether you are a real browser or a Python `requests` session. This is why plain `requests` gets blocked instantly, before any JavaScript runs.
- **HTTP/2 fingerprint.** Header order, pseudo-header order, and frame settings differ between real Chrome and automation libraries.
- **Browser fingerprint.** JavaScript challenges probe `navigator.webdriver`, WebGL, canvas, installed fonts, screen properties, and dozens of other values.
- **Behavioral signals.** Mouse movement, timing, and navigation patterns.
- **IP reputation.** Datacenter IPs start with a low trust score.

The takeaway: **a scraper that fixes only one layer still fails.** Clean IP with a headless fingerprint? Blocked. Perfect fingerprint from a flagged datacenter IP? Blocked.

## Does Cloudflare prevent scraping?

Not exactly. Cloudflare does not have a rule that says "no scrapers". It runs a scoring system, and the site owner picks how aggressive it should be. That setting is the single biggest factor in how hard your job will be:

| Site configuration | What you see | What you need |
| --- | --- | --- |
| **Cloudflare CDN only** | Nothing, pages load normally | Any HTTP client |
| **Low security / bot fight mode** | Occasional `403` on datacenter IPs | `curl_cffi` plus decent proxies |
| **Managed challenge** | "Just a moment..." interstitial | Patched stealth browser plus residential proxies |
| **Turnstile on key routes** | Interactive widget | Stealth browser, solver as fallback |
| **Enterprise Bot Management** | Silent blocks, poisoned data, rate ceilings | Full stack plus session warming and monitoring |

Most sites people ask me about sit in the middle two rows. That is where a correct setup works consistently and a naive one fails 100% of the time, which is why the same target gets described as "impossible" by one developer and "fine" by another.

## Why plain HTTP clients cannot win

A request from `requests` or `httpx` is rejected at the TLS layer before Cloudflare even serves the challenge. Libraries like `curl_cffi` help by impersonating a real browser's TLS fingerprint:

```python
from curl_cffi import requests

# Impersonate a real Chrome TLS + HTTP2 fingerprint
resp = requests.get(
    "https://protected-site.com",
    impersonate="chrome131",
    timeout=20,
)
print(resp.status_code)
```

This gets you past the TLS check and works on Cloudflare's *lower* security settings. But on sites running a managed challenge or Turnstile, you need a real browser to execute the JavaScript.

## Do cloudscraper and cloudflare-scrape still work?

This is the most common starting point, and the honest answer is no.

`cloudflare-scrape` (the original `cfscrape` package) and its successor `cloudscraper` were written to solve Cloudflare's old **IUAM** challenge: a snippet of JavaScript maths that the library evaluated locally and submitted back as a cookie. That challenge was retired. Modern Cloudflare uses an obfuscated, frequently rotated challenge tied to browser fingerprint values that no header-spoofing library can produce.

What that means in practice:

- On a site with Cloudflare CDN only, `cloudscraper` "works", but so does `requests`. Cloudflare was never challenging you.
- On low security settings, it works inconsistently, and `curl_cffi` does the same job faster and more reliably.
- On a managed challenge or Turnstile, it returns the block page with a `200` status. Your parser then silently produces empty rows, which is worse than a clean failure.

If you inherited a scraper built on `cfscrape` or `cloudscraper`, the migration path is `curl_cffi` for the easy targets and a patched browser for the rest. Do not spend time patching the old libraries.

## Python Cloudflare scraper options compared

| Tool | Beats TLS check | Beats managed challenge | Rough throughput | Best for |
| --- | --- | --- | --- | --- |
| `requests` / `httpx` | No | No | Very high | Unprotected sites only |
| `cloudscraper` / `cfscrape` | Partially | No | High | Legacy code, avoid for new work |
| `curl_cffi` (impersonate) | Yes | No | 20 to 50 req/s | Low security settings, APIs, JSON endpoints |
| `tls-client`, `primp`, `rnet` | Yes | No | High | Same as curl_cffi, different language bindings |
| Stock Playwright / Selenium | Yes | No | 1 to 3 pages/s | Nothing protected, detected immediately |
| **patchright** (patched Playwright) | Yes | Often | 1 to 3 pages/s | Drop-in upgrade for existing Playwright code |
| **nodriver** (successor to undetected-chromedriver) | Yes | Often | 1 to 3 pages/s | Chrome-based stealth automation |
| **Camoufox** (patched Firefox) | Yes | Usually | 0.5 to 2 pages/s | Hardest managed-challenge targets |
| Scraping API (see below) | Yes | Yes | Provider limited | Skipping the maintenance entirely |

The pattern almost every production system converges on: **try `curl_cffi` first, detect the block, escalate to a browser only for the requests that failed.** Browsers are 20 to 50 times slower and far more expensive per page, so you want them handling the small fraction of traffic that genuinely needs them.

## The reliable approach: a stealth browser

For managed challenges, run an actual browser with anti-detection patches. With Playwright, the base setup looks like this, but the stock launch is *not* enough:

```python
from playwright.async_api import async_playwright

async def scrape(url: str):
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=[
                "--disable-blink-features=AutomationControlled",
            ],
            proxy={
                "server": "http://gateway.provider.com:7000",
                "username": "USER",
                "password": "PASS",
            },
        )
        ctx = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Chrome/131.0.0.0 Safari/537.36",
            viewport={"width": 1920, "height": 1080},
            locale="en-US",
        )
        page = await ctx.new_page()
        await page.goto(url, wait_until="domcontentloaded")
        # Wait out the challenge, then read the real content
        await page.wait_for_load_state("networkidle")
        return await page.content()
```

The hidden work is in the patches that hide automation: removing `navigator.webdriver`, spoofing the permissions API, faking plugins and WebGL vendor strings, and matching the user-agent to the actual browser build. Projects like `patchright`, `nodriver`, and Camoufox automate much of this, but they need maintenance as Cloudflare updates its detection.

Two things people get wrong here:

1. **Consistency beats sophistication.** A Windows user-agent with a Linux WebGL renderer string and an `Asia/Ho_Chi_Minh` timezone on a US residential IP is a louder signal than a plain headless browser. Every value has to tell the same story.
2. **Reuse the clearance cookie.** Once a challenge passes, Cloudflare issues a `cf_clearance` cookie tied to your IP and fingerprint. Persist it with the matching proxy session and reuse it for subsequent requests through `curl_cffi`. This is what turns a 2 page-per-second browser pipeline into a 30 page-per-second one.

## Residential proxies are not optional here

On Cloudflare-protected sites, datacenter IPs start with a trust deficit you usually cannot overcome. Pair the stealth browser with residential or mobile proxies, and **match the proxy country to the site's audience**. A US store accessed through a foreign IP often triggers extra verification even when everything else is perfect.

See my detailed guide on [integrating rotating proxies](/blog/rotating-proxies-for-web-scraping) and the [residential proxy provider comparison](/blog/residential-proxy-services-compared) for rotation and retry logic.

## Handling Turnstile challenges

When a Turnstile or interactive challenge appears, you have two paths:

1. **Let the stealth browser solve it passively.** With a clean fingerprint and good IP, Turnstile often passes without interaction.
2. **Use a solver service** (2Captcha, CapSolver) for the token when passive solving fails. The solver returns a token you inject into the form submission.

In practice, a well-configured stealth browser passes most non-interactive challenges on its own, and the solver is the fallback for the hardest cases. More detail in the guide on [solving CAPTCHAs with 2Captcha and CapSolver](/blog/solving-captchas-2captcha-capsolver).

## Validate the response, not just the status

A `200` response can still be a block page. Always check the body:

```python
def is_blocked(html: str) -> bool:
    markers = [
        "cf-challenge",
        "Checking your browser",
        "Just a moment",
        "cf-turnstile",
        "Attention Required!",
    ]
    return any(m in html for m in markers)
```

If `is_blocked()` returns true, rotate the proxy, back off, and retry. Do not treat it as success. Silent block pages parsed as valid HTML are the single most common cause of a scraper that "runs fine" while delivering empty data for a week.

## Best scraping API for Cloudflare-protected sites

If you do not want to own the stealth and proxy stack, several providers sell the whole thing as one endpoint. Rough positioning as of 2026, based on what I see across client projects:

| Provider | Strength | Weakness | Rough cost per 1k successes |
| --- | --- | --- | --- |
| **Bright Data Web Unlocker** | Highest success rate on hard targets, huge proxy pool | Complex pricing, enterprise-leaning | $1.5 to $3 |
| **Scrapfly** | Strong anti-bot handling, good debugging tools | Smaller company, lower brand recognition | $1 to $4 |
| **ZenRows** | Good balance of price and success rate | Struggles on the hardest enterprise setups | $1 to $3 |
| **ScraperAPI** | Cheapest at volume, simple API | Weaker on managed challenges | $0.5 to $2 |
| **ScrapingBee** | Simplest API, good docs | Pricier per request at scale | $2 to $5 |
| **Oxylabs Web Unblocker** | Enterprise support and SLAs | Higher minimum commitment | $2 to $4 |

Treat every published success rate, mine included, as target dependent. The only number that matters is the one you measure on **your** URLs, so run a 500 request test on each shortlisted provider before committing.

**The rough break-even:** below about two million pages a month, an API is usually cheaper than building the equivalent stack yourself once you count residential proxy spend, browser infrastructure, and the engineering hours spent repairing it. Above that, owning the stack starts to pay off, which is the pattern described in the [10 million pages per day case study](/blog/scaling-amazon-scraper-10-million-products-per-day).

## A decision checklist

Work down this list and stop at the first thing that works:

1. Is there a JSON or GraphQL endpoint behind the page? [Reverse engineer the private API](/blog/reverse-engineering-private-apis) and skip the HTML entirely. Fastest and most stable path when it exists.
2. Does `curl_cffi` with `impersonate="chrome131"` return real content? Ship it, add proxy rotation, done.
3. Does a patched browser (patchright, nodriver, Camoufox) plus a residential proxy pass the challenge? Then add clearance cookie reuse so the browser only handles the first request per session.
4. Still blocked, or the maintenance cost is not worth it? Buy a scraping API and spend your engineering time on the data instead.

## When this gets hard

Cloudflare updates its detection continuously, so a setup that works today can break next month. A production scraper needs monitoring, alerting on block-rate spikes, and a maintenance plan, not a one-off script. That ongoing reliability is the real deliverable, and it is where most DIY scrapers fall apart.

## Need a Cloudflare-protected site scraped reliably?

I build and maintain production scrapers that get through Cloudflare, DataDome, and Akamai as part of my [custom web scraping service](/web-scraping-service), with the stealth, proxy, and monitoring infrastructure to keep them running. If you have a project, [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2) or reach out via the [contact form](/#contact). I respond within 24 hours. For 2026 rate benchmarks and a vetting checklist, see [how to hire a web scraping developer](/hire-web-scraping-developer).
