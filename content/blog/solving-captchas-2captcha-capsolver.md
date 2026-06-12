---
title: "Solving CAPTCHAs in Your Scraper with 2Captcha and CapSolver"
description: "A practical guide to integrating CAPTCHA solving services into a Python scraper. Covers reCAPTCHA v2 and v3, hCaptcha, Cloudflare Turnstile, token injection, and cost control."
date: "2026-06-08"
tags: ["captcha", "web scraping", "python", "automation", "anti-bot"]
readingTime: "8 min read"
---

# Solving CAPTCHAs in Your Scraper with 2Captcha and CapSolver

CAPTCHAs are the wall most scrapers hit once a site decides it does not trust you. The good news is that almost every common CAPTCHA can be solved programmatically through a solving service. This guide shows how to integrate 2Captcha and CapSolver, when each one fits, and how to keep costs under control.

## How CAPTCHA solving services work

You do not solve the CAPTCHA yourself. Instead you send the challenge to a service, the service returns a token, and you inject that token into the page exactly as a real browser would after a human passed the test.

The flow is always the same:

1. Detect the CAPTCHA on the page and read its site key.
2. Send the site key and page URL to the solving service.
3. Poll until the service returns a solution token.
4. Inject the token into the hidden form field and submit.

The token, not the image, is what the target site validates. This is why solving services work even on invisible reCAPTCHA v3 where there is no puzzle to click.

## 2Captcha vs CapSolver: which to pick

Both services cover the major CAPTCHA types. The practical differences matter more than the feature list.

| Factor | 2Captcha | CapSolver |
| --- | --- | --- |
| Speed | Human powered, slower | AI powered, faster |
| reCAPTCHA v2 | Reliable | Reliable |
| reCAPTCHA v3 | Supported | Strong |
| Cloudflare Turnstile | Supported | Strong |
| Pricing model | Per solve | Per solve, cheaper at volume |
| Best for | Image and token tasks | High volume token tasks |

Rule of thumb: start with CapSolver for speed on token based challenges, keep 2Captcha as a fallback for odd image puzzles and broad coverage.

## Solving reCAPTCHA v2 with 2Captcha

First find the site key in the page. It sits in the `data-sitekey` attribute of the reCAPTCHA element. Then send it to the service.

```python
import time
import requests

API_KEY = "your_2captcha_key"

def solve_recaptcha_v2(site_key: str, page_url: str) -> str:
    # 1. Submit the task
    r = requests.post("https://2captcha.com/in.php", data={
        "key": API_KEY,
        "method": "userrecaptcha",
        "googlekey": site_key,
        "pageurl": page_url,
        "json": 1,
    }).json()
    request_id = r["request"]

    # 2. Poll for the token
    for _ in range(24):
        time.sleep(5)
        res = requests.get("https://2captcha.com/res.php", params={
            "key": API_KEY,
            "action": "get",
            "id": request_id,
            "json": 1,
        }).json()
        if res["status"] == 1:
            return res["request"]  # the g-recaptcha-response token
    raise TimeoutError("CAPTCHA not solved in time")
```

## Injecting the token with Playwright

The token is useless until it is placed in the page and the form is submitted. Inject it into the hidden textarea reCAPTCHA expects.

```python
token = solve_recaptcha_v2(site_key, page_url)

await page.evaluate(
    """(token) => {
        document.querySelector('#g-recaptcha-response').value = token;
    }""",
    token,
)
await page.click("button[type=submit]")
```

For reCAPTCHA v3 there is no checkbox. The token goes into whatever field the site reads, often a hidden input the site script populates, and you usually pass a `min_score` and `action` to the solver so the returned token matches what the site expects.

## Solving Cloudflare Turnstile with CapSolver

Turnstile is increasingly common and CapSolver handles it well. The pattern is identical, only the task type changes.

```python
import requests

CAPSOLVER_KEY = "your_capsolver_key"

def solve_turnstile(site_key: str, page_url: str) -> str:
    create = requests.post("https://api.capsolver.com/createTask", json={
        "clientKey": CAPSOLVER_KEY,
        "task": {
            "type": "AntiTurnstileTaskProxyLess",
            "websiteURL": page_url,
            "websiteKey": site_key,
        },
    }).json()
    task_id = create["taskId"]

    while True:
        res = requests.post("https://api.capsolver.com/getTaskResult", json={
            "clientKey": CAPSOLVER_KEY,
            "taskId": task_id,
        }).json()
        if res["status"] == "ready":
            return res["solution"]["token"]
```

## Keeping costs under control

Solving services charge per solve, and on a large job the bill adds up fast. The cheapest CAPTCHA is the one you never trigger.

- **Reduce triggers first.** A clean residential IP and a realistic browser fingerprint mean fewer CAPTCHAs in the first place. Solving is the fallback, not the strategy. See my guide on [bypassing Cloudflare](/blog/bypass-cloudflare-web-scraping) for the stealth side.
- **Cache sessions.** Once you pass a challenge, reuse the cookies. Do not solve a fresh CAPTCHA on every request.
- **Solve only when blocked.** Detect the CAPTCHA and call the service only if it actually appears, rather than pre solving on every page.
- **Set a budget cap.** Track solves per run and stop the job if the count spikes, which usually means your fingerprint or proxy went bad.

## When solving services are not enough

Some sites layer behavioral analysis on top of the CAPTCHA. A valid token from a session that never moved a mouse or scrolled can still be rejected. In those cases you need the full stealth stack: residential proxies, a patched browser fingerprint, and human like interaction timing, with the solver as one piece rather than the whole answer.

## Need CAPTCHAs handled in your scraping project?

I build scraping systems that combine stealth, proxy rotation, and CAPTCHA solving so they keep running on protected sites. If you have a project that keeps hitting CAPTCHAs, [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2) or reach out through the [contact form](/#contact). I reply within 24 hours with a scope and quote.
