---
title: "How to Scrape Sites Protected by DataDome and PerimeterX"
description: "What DataDome and PerimeterX detect, why they are harder than basic WAFs, and the layered approach of stealth browsers, residential proxies, and session management that gets through."
date: "2026-05-28"
tags: ["datadome", "perimeterx", "anti-bot", "web scraping", "proxies"]
readingTime: "8 min read"
takeaways:
  - "DataDome and PerimeterX score consistency and humanity, not just IP reputation."
  - "A clean IP with a headless fingerprint still fails; fix every layer together."
  - "Match timezone and locale to the proxy's geolocation to stay consistent."
  - "Add human-like mouse movement and scrolling, especially against PerimeterX."
---

# How to Scrape Sites Protected by DataDome and PerimeterX

DataDome and PerimeterX (now part of HUMAN) are among the toughest bot protection systems on the web. They go beyond the IP and header checks of a basic firewall and build a behavioral profile of every visitor. If your scraper passes Cloudflare but dies on these, this guide explains why and what actually works.

## What makes them harder than a basic WAF

A simple firewall checks your IP reputation and a few headers. DataDome and PerimeterX collect far more signals and score them together with machine learning:

- **Deep browser fingerprinting.** Canvas, WebGL, audio context, installed fonts, screen metrics, and dozens of JavaScript properties.
- **Behavioral biometrics.** Mouse movement curves, scroll velocity, keystroke timing, and how naturally you navigate.
- **Device consistency.** Whether your user agent, fingerprint, and TLS signature all agree with each other.
- **Session reputation.** A score that builds over time, so a session that suddenly acts like a bot gets flagged even if it started clean.

The key insight: these systems look for **consistency and humanity**, not just a clean IP. A perfect residential IP attached to an obvious headless browser fails immediately.

## Why most scrapers fail here

The common failure is fixing one layer and ignoring the rest. People add residential proxies and still get blocked because the browser fingerprint screams automation. Or they patch the fingerprint but run from a flagged datacenter IP. DataDome and PerimeterX correlate signals, so any single inconsistency is enough.

The second common failure is behavior. Even a flawless fingerprint and IP get caught if the session loads ten pages per second in a perfectly even rhythm no human could produce.

## The layered approach that works

Getting through requires all of these together, not any one alone.

### 1. Residential or mobile proxies

Datacenter IPs start with a trust deficit you cannot overcome here. Use residential or, for the hardest targets, mobile proxies, and match the proxy country to the site's audience. See my guide on [rotating proxies](/blog/rotating-proxies-for-web-scraping) for the rotation and retry logic.

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

### 4. Session and cookie management

Both systems issue a cookie that carries your trust score. Once you earn a good score, reuse that session. Throwing away cookies and re-solving on every request both wastes effort and looks suspicious. Persist the session, rotate to a new one when the score degrades.

## Detecting when you are blocked

These systems often return a `200` with a block page or a challenge, not an obvious error. Always validate the body.

```python
def is_blocked(html: str, status: int) -> bool:
    if status in (403, 429):
        return True
    markers = ["datadome", "px-captcha", "_px", "blocked by"]
    lowered = html.lower()
    return any(m in lowered for m in markers)
```

When blocked, rotate the proxy and session together, back off, and retry. Hammering with the same flagged session escalates a soft block into a hard ban.

## A realistic expectation

DataDome and PerimeterX update their detection continuously. A setup that works this month may need adjustment next month. Scraping these sites reliably is an ongoing engineering effort with monitoring and maintenance, not a one time script. Anyone promising a permanent bypass is overselling.

## Need a hard target scraped reliably?

I build and maintain scrapers that get through DataDome, PerimeterX, Cloudflare, and Akamai, with the stealth, proxy, and monitoring infrastructure to keep them running. If you have a tough target, [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2) or reach out through the [contact form](/#contact). I respond within 24 hours.
