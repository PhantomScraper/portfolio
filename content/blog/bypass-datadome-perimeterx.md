---
title: "How to Scrape DataDome and PerimeterX Protected Pages"
description: "How to identify DataDome vs PerimeterX, why they are harder than Cloudflare, which tools still work in 2026, and how the scraping APIs compare."
date: "2026-05-28"
updated: "2026-08-28"
tags: ["datadome", "perimeterx", "anti-bot", "web scraping", "proxies", "human security"]
readingTime: "12 min read"
takeaways:
  - "DataDome and PerimeterX score consistency and humanity, not just IP reputation."
  - "Identify which system you face from its cookies first: `datadome` versus `_px3` and `_pxhd`."
  - "These are harder than Cloudflare because the block decision is server side and continuous, not a one time challenge."
  - "A clean IP with a headless fingerprint still fails; fix every layer together."
  - "Match timezone and locale to the proxy geolocation, and add real mouse movement against PerimeterX."
  - "Expect $2 to $6 per 1,000 successes from a scraping API on these targets, roughly double Cloudflare pricing."
faqs:
  - question: "How do I know whether a site uses DataDome or PerimeterX?"
    answer: "Check the cookies and network requests. DataDome sets a cookie literally named `datadome` and loads its script from js.datadome.co or a first-party /tags.js path. PerimeterX, now HUMAN Security, sets `_px3`, `_pxhd`, `_pxvid`, and `pxcts`, and loads from client.perimeterx.net or a first-party path containing the app id. The CAPTCHA also differs: DataDome shows a puzzle slider, PerimeterX shows a Press and Hold button."
  - question: "Is DataDome harder to bypass than Cloudflare?"
    answer: "Generally yes. Cloudflare's managed challenge is a gate you pass once, after which a cf_clearance cookie carries you. DataDome and PerimeterX score you continuously across the whole session, so a scraper that passes the first page can still be blocked on page fifty for behaving inhumanly. They also weigh behavioral biometrics far more heavily, which means a headless browser that never moves the mouse gets flagged even with a perfect fingerprint and a clean residential IP."
  - question: "Does cloudscraper or curl_cffi work against DataDome?"
    answer: "No. cloudscraper only ever targeted Cloudflare's retired IUAM challenge and does nothing here. curl_cffi fixes the TLS fingerprint, which is necessary but nowhere near sufficient, because DataDome and PerimeterX require executing JavaScript to produce a valid payload. You need a real patched browser, or an API that runs one for you."
  - question: "Can 2Captcha or CapSolver solve the DataDome CAPTCHA?"
    answer: "Yes, both support the DataDome puzzle slider and the PerimeterX Press and Hold widget, typically for $1 to $3 per 1,000 solves. But treat the solver as a fallback, not a strategy. If you are hitting the CAPTCHA on most requests, your fingerprint, proxy, or behavior is wrong upstream, and solving every one is slow and expensive compared with fixing the cause."
  - question: "What is the best scraping API for DataDome protected sites?"
    answer: "Bright Data Web Unlocker and Scrapfly have the strongest track record on DataDome and PerimeterX, with ZenRows and Oxylabs Web Unblocker close behind. Expect roughly $2 to $6 per 1,000 successful requests, about double what the same providers charge on Cloudflare targets. Always run a 500 request test on your own URLs before committing, because success rates vary enormously by specific target."
  - question: "Is it legal to scrape a DataDome protected site?"
    answer: "The presence of an anti-bot vendor is a technical control, not a legal one, and does not by itself make scraping illegal. The questions that actually matter are the same as for any site: whether the data is public, what the terms of service say, whether personal data is involved under GDPR or CCPA, and whether your request volume harms the service. Get legal advice for anything involving personal data, paywalled content, or a site where you hold an account."
---

# How to Scrape DataDome and PerimeterX Protected Pages (2026)

DataDome and PerimeterX (now part of HUMAN Security) are among the toughest bot protection systems on the web. They go beyond the IP and header checks of a basic firewall and build a behavioral profile of every visitor. If your scraper passes Cloudflare but dies on these, this guide explains why and what actually works.

## First, identify what you are actually facing

Before writing any code, find out which system is in front of the site. The countermeasures differ, and people waste days applying Cloudflare tactics to a DataDome target. Open DevTools, load the page, and look at cookies and network requests:

| Signal | DataDome | PerimeterX / HUMAN |
| --- | --- | --- |
| **Cookie names** | `datadome` | `_px3`, `_pxhd`, `_pxvid`, `pxcts` |
| **Script source** | `js.datadome.co`, or first-party `/tags.js` | `client.perimeterx.net`, or first-party path containing the app id (`/<appid>/init.js`) |
| **Block response** | `403` with a JSON body containing `datadome` | `403` with `_pxCaptcha` or a `px-captcha` block page |
| **CAPTCHA style** | Puzzle slider (GeeTest lineage) | "Press and Hold" button |
| **Payload endpoint** | `api-js.datadome.co/js/` | `collector-<appid>.perimeterx.net` |

A quick command line check that catches most cases:

```bash
curl -sI https://target-site.com | grep -i "set-cookie"
```

If neither appears, you may be looking at Cloudflare, Akamai, or Kasada instead. My [Cloudflare guide](/blog/bypass-cloudflare-web-scraping) covers that path, and the tooling advice there does not transfer here.

## What makes them harder than a basic WAF

A simple firewall checks your IP reputation and a few headers. DataDome and PerimeterX collect far more signals and score them together with machine learning:

- **Deep browser fingerprinting.** Canvas, WebGL, audio context, installed fonts, screen metrics, and dozens of JavaScript properties.
- **Behavioral biometrics.** Mouse movement curves, scroll velocity, keystroke timing, and how naturally you navigate.
- **Device consistency.** Whether your user agent, fingerprint, and TLS signature all agree with each other.
- **Session reputation.** A score that builds over time, so a session that suddenly acts like a bot gets flagged even if it started clean.

The key insight: these systems look for **consistency and humanity**, not just a clean IP. A perfect residential IP attached to an obvious headless browser fails immediately.

## Why these are harder than Cloudflare

This is the part that surprises people who have already solved Cloudflare.

Cloudflare's managed challenge is fundamentally a **gate**. You pass it once, receive a `cf_clearance` cookie, and that cookie carries you through subsequent requests. Get the first request right and the rest is cheap.

DataDome and PerimeterX are **continuous scoring**. Every request updates your session score server side. A scraper that clears the first page can still be blocked on page fifty because its click cadence was too even, it never scrolled, or it requested pages in an order no human would. There is no equivalent of "solve it once and you are in".

Three practical consequences:

1. **You cannot cheaply downgrade to an HTTP client.** The Cloudflare trick of passing the challenge in a browser then reusing the clearance cookie via `curl_cffi` does not transfer. The score keeps being recomputed from signals only a real browser emits.
2. **Throughput is structurally lower.** Expect 0.3 to 1.5 pages per second per browser session, versus 20 to 50 for a `curl_cffi` pipeline against light Cloudflare. Budget infrastructure accordingly.
3. **Failures are delayed.** A misconfiguration may not show up for hundreds of requests, which makes debugging much slower. Log the block rate over time, not just pass or fail on a single fetch.

## Why most scrapers fail here

The common failure is fixing one layer and ignoring the rest. People add residential proxies and still get blocked because the browser fingerprint screams automation. Or they patch the fingerprint but run from a flagged datacenter IP. DataDome and PerimeterX correlate signals, so any single inconsistency is enough.

The second common failure is behavior. Even a flawless fingerprint and IP get caught if the session loads ten pages per second in a perfectly even rhythm no human could produce.

## What tools actually work in 2026

| Tool | Passes DataDome | Passes PerimeterX | Notes |
| --- | --- | --- | --- |
| `requests` / `httpx` | No | No | Fails before JavaScript runs |
| `cloudscraper` | No | No | Only ever targeted Cloudflare's retired challenge |
| `curl_cffi` (impersonate) | No | No | Fixes TLS only; necessary, nowhere near sufficient |
| Stock Playwright / Selenium | No | No | Detected on the first fingerprint probe |
| **patchright** (patched Playwright) | Sometimes | Sometimes | Cheapest upgrade for existing Playwright code |
| **nodriver** | Often | Sometimes | Chrome based, actively maintained |
| **Camoufox** (patched Firefox) | Usually | Often | Best open source odds on these targets |
| Scraping API | Yes | Yes | See pricing below |

Notice there is no HTTP-client row that works. That is the defining difference from Cloudflare, and it is why these targets cost more to scrape.

## The layered approach that works

Getting through requires all of these together, not any one alone.

### 1. Residential or mobile proxies

Datacenter IPs start with a trust deficit you cannot overcome here. Use residential or, for the hardest targets, mobile proxies, and match the proxy country to the site's audience. See my guide on [rotating proxies](/blog/rotating-proxies-for-web-scraping) for the rotation and retry logic, and the [residential proxy comparison](/blog/residential-proxy-services-compared) for choosing a provider.

### 2. A genuinely patched browser fingerprint

The browser must present a consistent, realistic fingerprint with no automation tells. This means a real user agent that matches the actual browser build, correct WebGL vendor strings, a populated plugins array, and `navigator.webdriver` removed. Purpose built tools like Camoufox and nodriver handle much of this, but they need updates as detection evolves.

```python
from playwright.async_api import async_playwright

async def stealth_context(p, proxy):
    browser = await p.chromium.launch(
        headless=True,
        args=["--disable-blink-features=AutomationControlled"],
        proxy=proxy,
    )
    ctx = await browser.new_context(
        user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                   "AppleWebKit/537.36 (KHTML, like Gecko) "
                   "Chrome/131.0.0.0 Safari/537.36",
        viewport={"width": 1440, "height": 900},
        locale="en-US",
        timezone_id="America/New_York",
    )
    return ctx
```

Note the timezone and locale. DataDome checks whether your timezone matches your IP geolocation, so a US proxy with a European timezone is a red flag.

### 3. Human like behavior

Add realistic interaction before extracting data. Move the mouse, scroll gradually, and vary your timing.

```python
async def human_warmup(page):
    await page.mouse.move(200, 300)
    await page.wait_for_timeout(800)
    await page.mouse.wheel(0, 600)
    await page.wait_for_timeout(1200)
    await page.mouse.move(500, 450)
```

This is not optional on PerimeterX, which weighs behavioral biometrics heavily. A session that never moves the mouse is an obvious bot.

One refinement that matters more than the warmup itself: **move in curves, not straight lines.** A single `mouse.move` call jumps the cursor instantly, which is itself a signal. Interpolate across several small steps with uneven timing.

### 4. Session and cookie management

Both systems issue a cookie that carries your trust score. Once you earn a good score, reuse that session. Throwing away cookies and re-solving on every request both wastes effort and looks suspicious. Persist the session, rotate to a new one when the score degrades.

Bind each session to **one** proxy IP for its whole life. Rotating the IP mid-session while keeping the cookie is one of the loudest inconsistency signals you can send.

## When the CAPTCHA appears

DataDome serves a puzzle slider; PerimeterX serves a Press and Hold button. Both 2Captcha and CapSolver support these, typically at $1 to $3 per 1,000 solves, and both need the site URL plus the challenge parameters pulled from the block page. The [CAPTCHA solver guide](/blog/solving-captchas-2captcha-capsolver) covers the integration mechanics.

The strategic point matters more than the integration: **a CAPTCHA is a symptom, not the problem.** If you are solving on most requests, something upstream is wrong. Solving every challenge is slower and more expensive than fixing the fingerprint, proxy quality, or pacing that triggered it. Track your CAPTCHA rate as a health metric; if it climbs above roughly 10% of requests, stop and debug the cause rather than scaling up solver spend.

## Detecting when you are blocked

These systems often return a `200` with a block page or a challenge, not an obvious error. Always validate the body.

```python
def is_blocked(html: str, status: int) -> bool:
    if status in (403, 429):
        return True
    markers = ["datadome", "px-captcha", "_pxcaptcha", "_px", "blocked by"]
    lowered = html.lower()
    return any(m in lowered for m in markers)
```

When blocked, rotate the proxy and session together, back off, and retry. Hammering with the same flagged session escalates a soft block into a hard ban.

## Scraping APIs for DataDome and PerimeterX

If you would rather not own this stack, several providers sell it as one endpoint. Rough positioning as of 2026, based on what I see across client projects:

| Provider | DataDome | PerimeterX | Rough cost per 1k successes |
| --- | --- | --- | --- |
| **Bright Data Web Unlocker** | Strong | Strong | $3 to $6 |
| **Scrapfly** | Strong | Good | $2 to $5 |
| **ZenRows** | Good | Good | $2 to $5 |
| **Oxylabs Web Unblocker** | Good | Good | $3 to $6 |
| **ScraperAPI** | Weak | Weak | $1 to $3 |

Note the pricing is roughly **double** what the same providers charge on Cloudflare targets, which reflects the genuine difficulty gap. Treat every published success rate, mine included, as target dependent, and run a 500 request test on your own URLs before committing.

The break-even against building it yourself sits lower here than for Cloudflare: somewhere around a few hundred thousand pages a month, because the browser infrastructure and residential proxy spend are both higher and the maintenance burden is continuous.

## A decision checklist

Work down this list and stop at the first thing that works:

1. **Identify the system** from its cookies. Applying Cloudflare tactics to DataDome wastes days.
2. **Look for a private API.** Mobile apps and internal JSON endpoints are often protected far more weakly than the web front end. [Reverse engineering the private API](/blog/reverse-engineering-private-apis) is the single highest leverage move on these targets, and it is the one most people skip.
3. **Try Camoufox or nodriver** with a residential proxy, correct timezone, and a real warmup. Measure block rate over 500 requests, not 5.
4. **Still blocked, or the maintenance is not worth it?** Buy a scraping API and spend your engineering time on the data.

## A realistic expectation

DataDome and PerimeterX update their detection continuously. A setup that works this month may need adjustment next month. Scraping these sites reliably is an ongoing engineering effort with monitoring and maintenance, not a one time script. Anyone promising a permanent bypass is overselling.

## Need a hard target scraped reliably?

I build and maintain scrapers that get through DataDome, PerimeterX, Cloudflare, and Akamai, with the stealth, proxy, and monitoring infrastructure to keep them running. Hard targets like these are the core of my [website scraping service](/web-scraping-service). If you have a tough target, [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2) or reach out through the [contact form](/#contact). I respond within 24 hours. Not sure who to bring in? My guide on [hiring a web scraping developer](/hire-web-scraping-developer) lists the vetting questions that expose weak candidates.
