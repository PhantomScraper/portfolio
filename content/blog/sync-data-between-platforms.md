---
title: "How to Sync Data Between Two Platforms (Even With No API)"
description: "Four ways to connect two platforms that do not integrate: native connectors, n8n, custom API sync, and browser automation, plus when you need ETL instead."
date: "2026-08-31"
updated: "2026-08-31"
tags: ["automation", "data sync", "integration", "etl", "n8n", "api integration"]
readingTime: "10 min read"
takeaways:
  - "There are four ways to connect two platforms: native integration, an iPaaS like n8n or Make, custom API sync, and browser automation when one side has no API at all."
  - "Most sync problems are one-way pushes. True two-way sync is a conflict-resolution problem, not a plumbing problem, and costs accordingly."
  - "Webhooks beat polling for freshness and cost, but every webhook consumer still needs a reconciliation poll to catch missed events."
  - "Sync keeps two operational systems consistent. ETL feeds a warehouse for reporting. They are different jobs and mixing them up is how projects blow their budget."
  - "Every reliable sync needs three boring things: idempotency keys, a retry queue for failures, and an alert when volume drops to zero."
  - "Self-hosted n8n removes per-task pricing, which is what kills Zapier budgets once volume grows."
faqs:
  - question: "How do I sync data between two platforms that do not integrate?"
    answer: "Work down the ladder: check for a native integration first, then try an iPaaS like n8n or Make using their prebuilt connectors, then build a custom sync against both platforms' APIs, and only fall back to browser automation or private API reverse engineering when one side offers no API at all. A custom API sync is usually the right answer once you need field mapping, conflict rules, or volume beyond iPaaS pricing tiers."
  - question: "How much does it cost to connect two platforms?"
    answer: "In 2026, an n8n or Make workflow build runs $300 to $1,500 fixed from a senior freelancer. A custom one-way API sync runs $300 to $1,200, and a two-way sync with conflict handling runs $800 to $2,500. Ongoing maintenance is $100 to $500 per month. Agencies quote the same work at $5,000 and up. Senior freelance rates are $30 to $80 per hour; mine start at $25 per hour with a fixed quote within 24 hours."
  - question: "Can I sync data from a platform that has no API?"
    answer: "Yes, two ways. Browser automation with Playwright logs into the platform and reads or enters data exactly as a person would, on a schedule. Or a developer reverse engineers the private API the platform's own web app uses, which is faster and more stable when it works. Staffing tools, legacy portals, and government systems are the usual no-API suspects, and both approaches are standard practice for them."
  - question: "What is the difference between data sync and ETL?"
    answer: "Sync keeps two operational systems consistent in near real time so people can work in either one: a contact updated in the CRM appears updated in the billing tool. ETL extracts data from several sources on a schedule, transforms it into clean tables, and loads it into a database or warehouse for reporting and analytics. Sync moves records both ways between live systems; ETL flows one way into a store optimized for queries."
  - question: "Is two-way sync harder than one-way sync?"
    answer: "Significantly. One-way sync is a push with retries. Two-way sync must answer what happens when the same record changes in both systems between sync runs, which requires a source-of-truth rule or field-level merge logic, loop prevention so an update does not bounce between systems forever, and idempotency keys so retries never create duplicates. Budget roughly two to three times the effort of a one-way sync."
  - question: "Should I use Zapier, Make, n8n, or custom code to sync platforms?"
    answer: "Zapier or Make for low-volume workflows between standard SaaS tools. Self-hosted n8n once volume grows, because you own the instance and per-task pricing disappears. Custom code when you need conflict resolution, complex field mapping, high volume, or a platform with no connector and no API. The common migration path is Zapier to n8n to custom code as volume and complexity grow."
---

# How to Sync Data Between Two Platforms (Even With No API)

Every business past a certain size runs on tools that do not talk to each other. The CRM does not know what the billing system knows, the ATS does not know what the VMS knows, and somebody on the team spends an hour a day retyping records from one screen into another.

Connecting two platforms is one of the most requested automation projects I build as a freelance [automation developer](/hire-automation-developer), and it is also one of the most misquoted, because "sync our systems" can mean anything from a 30-minute Zapier setup to a two-way integration with conflict resolution. This guide lays out the four ways to connect two platforms, what each one costs in 2026, and how to tell whether you actually need sync at all, or ETL.

## The four ways to connect two platforms

Work down this ladder in order. Each step down adds capability and cost, so stop at the first rung that solves your problem.

### 1. Native integration

Check both platforms' integration marketplaces first. If HubSpot already ships a QuickBooks integration that maps the fields you care about, use it. Native integrations are maintained by the vendors, survive API changes, and cost nothing beyond the subscription.

They fail you in two ways: the integration exists but does not map the fields you need, or it syncs on the vendor's schedule instead of yours. When you find yourself exporting CSVs to work around a native integration's gaps, move down a rung.

### 2. iPaaS: Zapier, Make, or n8n

Integration platforms give you prebuilt connectors for thousands of SaaS tools and a visual builder for the logic between them. For standard tools and modest volume, this rung solves most connection problems in days, not weeks.

The trap is pricing. Zapier and Make charge per task or operation, which is fine at 500 syncs a month and painful at 50,000. **Self-hosted n8n removes per-task pricing entirely**: you pay for a small server and own the instance. I cover the trade-offs in detail in my [n8n vs Make vs Zapier guide](/blog/no-code-scraping-automation-n8n), and migrating an expensive Zapier setup to self-hosted n8n is one of my most common fixed-price projects.

An iPaaS stops being the right tool when your logic outgrows the visual builder: multi-step conflict rules, per-field merge decisions, or throughput that needs real concurrency.

### 3. Custom API sync

A small service, usually Python, that talks to both platforms' REST or GraphQL APIs and keeps chosen records consistent. This is the rung where "connect our systems" becomes engineering, and where the reliability features that iPaaS tools half-deliver get built properly:

- **Field mapping** that handles the two platforms disagreeing about what a "contact" or a "placement" is.
- **Idempotency keys** so a retried request never creates a duplicate record.
- **A retry queue** for failures, with exponential backoff, instead of silently dropping a record because one API returned a 500.
- **A change log** so you can answer "why did this field change" six months later.
- **Alerts on silence.** The worst failure mode of any sync is not an error, it is zero records moving while everyone assumes it works.

A one-way custom sync typically runs $300 to $1,200 fixed. Two-way runs $800 to $2,500, and the next section explains why the price doubles.

### 4. No API at all: browser automation or private APIs

Plenty of platforms your business depends on offer no public API: legacy portals, government systems, and a remarkable share of staffing industry tools. Two escape hatches work.

**Browser automation.** A Playwright bot logs in, navigates, and reads or enters data exactly as a person would, on a schedule, with screenshots as an audit trail. Slower and more fragile than an API, but it works on anything a human can use.

**Private API reverse engineering.** The platform's own web app talks to a backend API; open the network tab and it is right there. Building against that private API is faster and far more stable than driving the UI. I wrote up the technique in [reverse engineering private APIs](/blog/reverse-engineering-private-apis).

I usually quote both options after a feasibility check, because the right choice depends on the target's protection and how often its UI changes.

## One-way push vs two-way sync

Most projects that arrive as "we need two-way sync" are actually a one-way push: system A is the source of truth, system B needs a current copy. Be honest about which one you need, because the difference is the largest cost driver in the whole project.

A true two-way sync must answer questions a one-way push never faces:

1. **Conflict resolution.** The same contact was edited in both systems since the last sync. Which edit wins? The answer is either a source-of-truth rule per field or a merge policy, and someone from the business has to sign off on it.
2. **Loop prevention.** A syncs to B, B's webhook fires, B syncs back to A, forever. Every two-way sync needs origin tracking to break the loop.
3. **Deletes.** Does deleting a record in one system delete it in the other, archive it, or flag it for review? Silent delete propagation is how sync projects destroy data.

If a vendor or freelancer quotes two-way sync without asking about conflicts, deletes, and loops, they have not built one before.

## Webhooks vs polling

| | Webhooks | Polling |
|---|---|---|
| Freshness | Seconds | Whatever the interval is |
| API quota cost | Low, only real changes | High, mostly empty checks |
| Missed events | Possible, delivery is not guaranteed | Self-healing on next poll |
| Setup | Needs a public endpoint | Just a scheduler |

The production answer is both: webhooks for freshness, plus a reconciliation poll every few hours that compares record counts and catches anything the webhooks dropped. Running that scheduler reliably is its own topic; my guide to [running scheduled jobs in production](/blog/scheduling-monitoring-scrapers-production) covers the monitoring side.

## When you need ETL instead of sync

Sync and ETL get conflated constantly, and the confusion is expensive because they are optimized for opposite things.

**Sync** keeps two operational systems consistent so people can work in either one. Record-level, near real time, bidirectional logic.

**ETL** (extract, transform, load) collects data from several sources on a schedule, cleans and reshapes it, and loads it into one place built for queries: PostgreSQL, BigQuery, or a spreadsheet the finance team lives in. One direction, batch-oriented, and the transform step is where the value is: deduplication, joining customers across systems, normalizing the five different ways your tools write dates.

The tell: if the goal is "reporting across our tools" or "one dashboard with everything", you need ETL, not sync. If the goal is "stop retyping records between tools", you need sync. Plenty of businesses need both, and they share infrastructure, which is why hiring one [automation developer](/hire-automation-developer) for the pair beats hiring two vendors.

For standard SaaS sources, managed connectors like Fivetran or Airbyte are worth pricing first. Custom Python ETL wins when your sources include scraped websites, no-API platforms, or transforms the managed tools cannot express, which in my project queue is most of the time.

## What integration work costs in 2026

| Project | Senior freelancer | Agency |
|---|---|---|
| n8n or Make workflow build | $300 - $1,500 fixed | $3,000 - $10,000 |
| Custom one-way API sync | $300 - $1,200 fixed | $5,000+ |
| Custom two-way sync with conflict handling | $800 - $2,500 fixed | $5,000 - $20,000 |
| ETL pipeline to a database or warehouse | $500 - $2,500 fixed | $5,000 - $20,000 |
| Ongoing maintenance | $100 - $500 / month | $1,000+ / month |

Senior freelance rates run $30 to $80 per hour; my own rate starts at $25 per hour and every project gets a fixed quote within 24 hours. The full rate breakdown and engagement options are on my [automation hiring page](/hire-automation-developer).

## A real example: syncing staffing platforms

The clearest case I work in is the staffing industry, where recruiters submit candidates from their ATS into client VMS portals by hand, hundreds of times a week. The platforms do not integrate, half the VMS tools have no public API, and the manual copy-paste step is where errors and lost hours concentrate. That exact problem, and the sync architecture that removes it, is written up in [the ATS to VMS integration gap](/blog/ats-vms-submittal-integration-gap), and productized as my [ATS and VMS data sync service](/staffing-data-integration).

The pattern generalizes: any pair of systems where people retype records is a sync project waiting to be scoped.

## Decision checklist

Before you brief anyone, including me, answer these six questions. They determine the rung on the ladder and most of the price:

1. Which fields, exactly, need to move? List them.
2. One-way or genuinely two-way? Who wins a conflict?
3. Do both platforms have APIs? Check the developer docs, not the sales page.
4. How fresh does the data need to be: seconds, hours, or daily?
5. What volume: tens, thousands, or hundreds of thousands of records a month?
6. What should happen when a record fails to sync, and who gets told?

## Need two systems talking to each other?

I build platform-to-platform sync, integrations, and ETL pipelines as fixed-price projects: field mapping, conflict rules, retries, and monitoring included, with the source in your repository. Describe the two systems and the fields through the [contact form](/#contact) or [hire me on Upwork](https://www.upwork.com/freelancers/phanvuong2), and you will have a scope and fixed quote within 24 hours. If you are still comparing options, my [automation hiring guide](/hire-automation-developer) covers 2026 rates and the questions worth asking any candidate.
