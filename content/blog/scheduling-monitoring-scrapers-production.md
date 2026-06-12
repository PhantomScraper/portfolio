---
title: "Running Scrapers in Production: Scheduling, Queues, and Monitoring"
description: "How to take a scraper from a script to a reliable production system. Covers scheduling, task queues, retries, error alerting, and proxy health monitoring."
date: "2026-05-05"
tags: ["automation", "web scraping", "production", "monitoring", "python"]
readingTime: "8 min read"
---

# Running Scrapers in Production: Scheduling, Queues, and Monitoring

A scraper that runs once on your laptop is a script. A scraper that runs every day, recovers from failures, and tells you when something breaks is a production system. The gap between the two is where most scraping projects fail. This guide covers the infrastructure that makes a scraper reliable.

## What "production" actually means

A production scraper has to handle the messy reality that the script ignores:

- The target site goes down or changes its markup.
- A proxy gets banned mid run.
- A page times out or returns garbage.
- The job needs to run on a schedule without you starting it.
- You need to know when it breaks, before the client does.

None of this is the extraction logic. It is the infrastructure around it, and it is the actual deliverable for a paying client.

## Scheduling: from cron to schedulers

The simplest scheduling is cron. For a single daily job it is fine.

```bash
# Run the scraper every day at 6am
0 6 * * * /usr/bin/python3 /opt/scraper/run.py >> /var/log/scraper.log 2>&1
```

Cron breaks down when you have many jobs, dependencies between them, or need visibility into runs. At that point move to a real scheduler like APScheduler for in process scheduling, or a workflow tool like Airflow or Prefect when jobs depend on each other and you want a dashboard of run history.

## Task queues for scale and isolation

When you scrape thousands of URLs, you do not want one process working through them serially, and you do not want one failure to kill the whole run. A task queue solves both. Celery with Redis is the common Python choice.

```python
from celery import Celery

app = Celery("scraper", broker="redis://localhost:6379/0")

@app.task(bind=True, max_retries=3, default_retry_delay=60)
def scrape_url(self, url: str):
    try:
        data = fetch_and_parse(url)
        save(data)
    except TemporaryError as exc:
        # Retry with backoff on transient failures
        raise self.retry(exc=exc)
```

Each URL becomes an independent task. Workers process them in parallel, failures retry on their own, and one bad page does not stop the rest. You can also scale by adding workers without touching the code.

## Retries and backoff done right

Transient failures are normal in scraping. The discipline is retrying the recoverable ones and giving up on the rest.

```python
import time

def fetch_with_retry(url: str, max_attempts: int = 4):
    for attempt in range(max_attempts):
        try:
            resp = fetch(url)  # rotates proxy internally
            if resp.status_code == 200 and not is_blocked(resp.text):
                return resp
        except (TimeoutError, ConnectionError):
            pass
        time.sleep(min(2 ** attempt, 30))  # exponential backoff, capped
    raise RuntimeError(f"Failed after {max_attempts} attempts: {url}")
```

Retry on timeouts, connection errors, and soft blocks. Do not retry on a clean `404`, which will never succeed. Cap the backoff so a struggling target does not stall the queue forever. The proxy rotation that pairs with this is covered in my [rotating proxies guide](/blog/rotating-proxies-for-web-scraping).

## Monitoring and alerting

The single most important production feature is knowing when the scraper breaks. A scraper that silently returns empty data for a week is worse than one that crashes loudly. Track these signals:

- **Success rate.** The percentage of requests returning valid data. A drop means the site changed or your proxies are failing.
- **Null rate.** How often a field comes back empty. A spike means a selector broke even though requests succeed.
- **Block rate.** How often you hit CAPTCHAs or `403`s. Rising means your fingerprint or proxy pool needs attention.
- **Run duration.** A sudden change signals trouble.

Wire these to an alert. Even a simple Slack message on a threshold breach turns a silent failure into a same day fix.

```python
def check_health(stats: dict):
    if stats["success_rate"] < 0.85:
        alert(f"Scraper success rate dropped to {stats['success_rate']:.0%}")
    if stats["null_rate"] > 0.2:
        alert(f"High null rate {stats['null_rate']:.0%}, a selector likely broke")
```

## Proxy health monitoring

Your proxy pool degrades over time as IPs get flagged. Track per proxy success rates and drop the bad ones automatically, so a few burned IPs do not drag down the whole job. Many providers expose usage stats through an API you can poll, and rotating out underperformers keeps the success rate high.

## Storing data idempotently

Production scrapers re-run, so writes must be safe to repeat. Use an upsert keyed on a stable identifier so a re-run updates rather than duplicates.

```sql
INSERT INTO products (url, price, scraped_at)
VALUES (%s, %s, now())
ON CONFLICT (url) DO UPDATE
SET price = EXCLUDED.price, scraped_at = now();
```

This way a partial re-run after a crash is harmless, which is essential when jobs fail halfway and restart.

## The maintenance reality

Even a well built scraper needs ongoing care because the targets change. The difference between a script and a system is that the system tells you when it needs attention and recovers from the failures it can. Budget for maintenance, because a scraper is a living thing, not a one time build.

## Need a production grade scraping system?

I build scraping systems with scheduling, queues, retries, and monitoring so they run reliably and alert you when something needs attention. If you need a scraper that runs in production, [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2) or reach out through the [contact form](/#contact). I respond within 24 hours.
