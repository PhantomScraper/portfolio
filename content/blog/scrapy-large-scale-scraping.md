---
title: "Building a Large-Scale Web Scraper with Scrapy"
description: "How to use Scrapy for production scraping at scale. Covers spiders, item pipelines, concurrency tuning, proxy and retry middleware, and exporting to databases."
date: "2026-06-05"
tags: ["scrapy", "web scraping", "python", "data pipeline", "automation"]
readingTime: "9 min read"
takeaways:
  - "Use Scrapy when the job is recurring and spans many pages, not for a one-off scrape."
  - "Item pipelines clean, validate, and store data in stages."
  - "AutoThrottle adapts the request rate to avoid bans; raise concurrency only while block rate stays at zero."
  - "Use ON CONFLICT upserts so re-runs update existing rows instead of duplicating."
---

# Building a Large-Scale Web Scraper with Scrapy

When a scraping job grows past a few thousand pages, a hand written script with `requests` and a `for` loop starts to fall apart. Scrapy is the framework built for this scale. It handles concurrency, retries, throttling, and data export so you can focus on the extraction logic. This guide covers the parts that matter for production.

## Why Scrapy over a plain script

A simple script does one request at a time and breaks on the first unexpected error. Scrapy gives you the infrastructure for free:

- **Asynchronous by default.** It fetches many pages concurrently without you managing threads or async code by hand.
- **Built in retries and throttling.** Failed requests retry automatically, and AutoThrottle adapts the request rate to the server.
- **Middleware system.** Proxies, custom headers, and retry rules plug in cleanly.
- **Item pipelines.** Clean, validate, and store scraped data in stages.

The tradeoff is a steeper learning curve. For a one off scrape of a single page, Scrapy is overkill. For a recurring job across many pages, it pays for itself quickly.

## A basic spider

A spider defines where to start, how to follow links, and how to parse each page.

```python
import scrapy

class ProductSpider(scrapy.Spider):
    name = "products"
    start_urls = ["https://example.com/category/page/1"]

    def parse(self, response):
        for product in response.css("div.product"):
            yield {
                "name": product.css("h2.title::text").get(),
                "price": product.css("span.price::text").get(),
                "url": product.css("a::attr(href)").get(),
            }

        # Follow pagination
        next_page = response.css("a.next::attr(href)").get()
        if next_page:
            yield response.follow(next_page, callback=self.parse)
```

Scrapy queues every yielded request and schedules it with the concurrency settings you choose, so following thousands of pagination links needs no extra code.

## Item pipelines for clean data

Raw scraped fields are messy. Prices have currency symbols, whitespace creeps in, and duplicates appear. Pipelines process each item before it is stored.

```python
class CleanPricePipeline:
    def process_item(self, item, spider):
        if item.get("price"):
            item["price"] = (
                item["price"].replace("$", "").replace(",", "").strip()
            )
        return item

class DropEmptyPipeline:
    def process_item(self, item, spider):
        if not item.get("name"):
            raise scrapy.exceptions.DropItem("Missing name")
        return item
```

Register them in `settings.py` with a priority number that sets the order:

```python
ITEM_PIPELINES = {
    "myproject.pipelines.CleanPricePipeline": 100,
    "myproject.pipelines.DropEmptyPipeline": 200,
}
```

## Tuning concurrency without getting banned

The default settings are conservative. For a large job you want more throughput, but pushing too hard gets you blocked. The key settings:

```python
# settings.py
CONCURRENT_REQUESTS = 16
CONCURRENT_REQUESTS_PER_DOMAIN = 8
DOWNLOAD_DELAY = 0.5
AUTOTHROTTLE_ENABLED = True
AUTOTHROTTLE_TARGET_CONCURRENCY = 4.0
RETRY_TIMES = 3
```

AutoThrottle is the part most people miss. It watches response latency and slows down automatically when the server is under load, which keeps you below the rate that triggers bans. Start gentle and increase concurrency only while the block rate stays at zero.

## Adding proxies with middleware

For protected sites you need rotating proxies. Scrapy applies them through downloader middleware so every request goes through the pool.

```python
import random

class ProxyMiddleware:
    PROXIES = [
        "http://user:pass@p1.provider.com:8000",
        "http://user:pass@p2.provider.com:8000",
    ]

    def process_request(self, request, spider):
        request.meta["proxy"] = random.choice(self.PROXIES)
```

For the rotation, retry, and geolocation details that make this reliable, see my guide on [integrating rotating proxies](/blog/rotating-proxies-for-web-scraping).

## Exporting to a database

For a real pipeline you want the data in a database, not a CSV. A storage pipeline writes each item as it is scraped.

```python
import psycopg2

class PostgresPipeline:
    def open_spider(self, spider):
        self.conn = psycopg2.connect("dbname=scrape user=postgres")
        self.cur = self.conn.cursor()

    def process_item(self, item, spider):
        self.cur.execute(
            "INSERT INTO products (name, price, url) VALUES (%s, %s, %s) "
            "ON CONFLICT (url) DO UPDATE SET price = EXCLUDED.price",
            (item["name"], item["price"], item["url"]),
        )
        self.conn.commit()
        return item

    def close_spider(self, spider):
        self.cur.close()
        self.conn.close()
```

The `ON CONFLICT` clause makes re-runs idempotent, so scraping the same page twice updates the price instead of creating a duplicate row.

## Handling JavaScript heavy pages

Scrapy fetches raw HTML and does not run JavaScript. For pages that render content client side, pair Scrapy with a browser using `scrapy-playwright`, which lets a spider request a fully rendered page only when needed while keeping the fast path for static pages.

## When Scrapy is the right call

Reach for Scrapy when the job is recurring, spans many pages, and needs reliability: price monitoring, catalog extraction, or any pipeline that runs on a schedule. For a quick one time grab of a single page, a small script is simpler. Match the tool to the job.

## Need a production scraping pipeline built?

I build Scrapy based pipelines with proxy rotation, retry logic, and database export that run on a schedule and stay reliable at scale. If you have a recurring scraping need, [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2) or reach out through the [contact form](/#contact). I respond within 24 hours.
