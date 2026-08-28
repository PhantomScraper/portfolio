---
title: "Why VMS Candidate Submittals Are Still Manual in 2026"
description: "Bullhorn's own list pulls jobs from 124 VMS platforms but pushes submittals back to just 9. That gap is where recruiters still retype candidates."
date: "2026-08-29"
updated: "2026-08-29"
tags: ["staffing", "ATS", "VMS", "integration", "automation", "recruitment"]
readingTime: "10 min read"
takeaways:
  - "Bullhorn VMS Sync lists 124 portals it can pull jobs from, and 9 it can push candidate submittals to."
  - "The return trip, not the inbound feed, is where the expensive manual work sits."
  - "Access path matters more than the platform name: documented API, gated API, forbidden, or none."
  - "Beeline states publicly that scraping bots and shared credentials violate the Supplier Access Agreement."
  - "Speed to submit decides who fills a requisition, so retyping is lost revenue, not just lost time."
  - "The healthcare and niche VMS long tail is where custom integration actually pays for itself."
faqs:
  - question: "Why can my ATS pull VMS jobs but not push candidates back?"
    answer: "Pulling a job is reading a list, which every portal exposes in some form. Pushing a submittal means writing into a client's system of record, which requires an authenticated write API, an agreed field mapping including rate formats and screening questions, and error handling for rejected records. Most VMS platforms never built or never exposed that write path for suppliers, so the vendor integration stops at read."
  - question: "How many VMS portals actually support automated submittals?"
    answer: "Bullhorn publishes its VMS Sync portal support list openly. Counting the entries at the time of writing, it lists 124 portals under VMS for Jobs and 9 under VMS for Submittals: Beeline, Fieldglass, Fieldglass API, Pixid, HealthTrust, SimpleVMS, VNDLY API, Trio and Einsteinii. Your own numbers will differ by vendor and will change over time, so check your vendor's current list rather than trusting any figure in an article, including this one."
  - question: "Is it allowed to automate a VMS portal that has no API?"
    answer: "It depends entirely on that portal's supplier access agreement, and this is the first thing to check rather than the last. Beeline states publicly that scraping bots and shared user credentials violate its Supplier Access Agreement and that its official supplier API is the only compliant path. Other portals differ. Where automation is permitted, it should run on credentials your agency owns, with rate limiting and a full audit trail you can show a client."
  - question: "Should I buy a unified API product or build a custom integration?"
    answer: "Buy when your portals are on the vendor's covered list, because you get maintenance included and it is cheaper than building. Build when your highest-volume client runs something outside that list, which for most agencies is exactly where the manual work has been stranded. The two are complements, not alternatives: use the connector for the covered systems and a custom integration for the long tail."
  - question: "What does an ATS to VMS integration realistically cost?"
    answer: "Build cost varies enormously by access path, because a documented REST API and an undocumented web form are different amounts of work for the same business outcome. The recurring cost is the part people underestimate: portals change forms and APIs, so an unmaintained integration decays. Judge any quote against two numbers you already know, the recruiter hours currently spent retyping submittals, and the value of one lost placement."
---

# Why VMS Candidate Submittals Are Still Manual in 2026

If you run a staffing agency, you have probably already solved half of this problem. Jobs from your MSP and VMS clients arrive in your ATS automatically. Recruiters see them without logging into anything.

Then a recruiter finds a candidate, and the automation stops. They open the client portal in another tab and retype the candidate by hand: name, rate, availability, resume upload, screening questions, cover sheet. The data they are retyping is already sitting in the ATS three inches to the left.

This is not an oversight at your agency. It is a structural gap in the tooling, and it is measurable.

## The number that shows the gap

Bullhorn publishes the [portal support list for its VMS Sync product](https://kb.bullhorn.com/vmssync/Content/VMSSync/Topics/portalSupportList.htm) openly, no login required. The page splits into two sections.

Counting the entries at the time of writing:

| Direction | Portals supported |
| --- | --- |
| **VMS for Jobs** (pull requisitions in) | **124** |
| **VMS for Submittals** (push candidates back) | **9** |

The nine are Beeline, Fieldglass, Fieldglass API, Pixid, HealthTrust, SimpleVMS, VNDLY API, Trio and Einsteinii.

Read that again, because it is the whole point. The market-leading ATS, with a dedicated integration product and years of engineering behind it, can read jobs out of 124 systems and write candidates back into nine.

For the other 115, a human retypes.

That is not a criticism of Bullhorn. Any vendor faces the same wall, and the list is honest and public, which is more than most publish. It is a description of where the industry actually is.

## Why reading is easy and writing is hard

The asymmetry is not laziness. It comes from what each direction requires.

**Pulling a job** means reading a list. Almost every portal exposes requisitions somehow, because getting jobs in front of suppliers is the portal's entire purpose. A read integration that breaks is annoying: someone refreshes and sees the job late.

**Pushing a submittal** means writing into a client's system of record. That needs an authenticated write endpoint, an agreed field mapping including rate formats and bill and pay splits, screening question handling, resume upload, and sane behaviour when the portal rejects a record. A write integration that breaks is dangerous: a duplicate candidate, a wrong rate, or a submittal that silently never arrived.

So vendors build read first, and many never build write at all. Meanwhile the write step is the one consuming recruiter hours.

## Why this costs more than the hours suggest

The obvious cost is time. Five to fifteen minutes per submittal, every submittal, forever.

The real cost is placements.

In an MSP or VMS arrangement, requisitions frequently go to several suppliers at once, and being early matters. Every minute a recruiter spends retyping is a minute the candidate is not in front of the client. A mistyped rate or a missed screening answer can invalidate the submission outright.

Beeline puts this plainly on [its supplier integrations page](https://bsn.beeline.com/supplier-integrations): "Competitors who have automated this workflow are first in, first to fill, first to win."

They are selling something, so treat that as marketing. But the mechanism is real and any agency working MSP programmes already knows it.

## Access path matters more than platform name

When agencies ask me to scope an integration, they usually describe it by product name: "we need Bullhorn to talk to Fieldglass." That is the wrong first question. The right one is what the **access path** is for each portal, because it decides the cost, the timeline, and whether the work should happen at all.

There are four cases, and every portal you deal with falls into one.

### 1. A documented supplier API exists

Use it. Nothing else is worth considering. You request credentials in your agency's name, integrate against documented endpoints, and handle their auth and rate limits properly.

This case is also expanding. The major VMS platforms are actively building supplier APIs, partly because they would rather suppliers used a supported path than an unsupported one. If your portal is on this list today, the integration is a straightforward engineering job.

### 2. An API exists but is gated

Behind a plan upgrade, a partner agreement, an approval process, or a per-buyer connector that has to be individually enabled. This is common and it catches people out, because "the platform has an API" and "you can use the API" are different statements.

The gate has a price. Find out what it is before scoping, not after. Sometimes the upgrade is cheaper than the integration; sometimes it kills the business case entirely, and it is better to learn that in week one.

### 3. Automation is explicitly forbidden

Some access agreements prohibit it outright. Beeline's supplier integrations page states that if you connect by any method other than its secure API credentials, "you are in violation of your Supplier Access Agreement," and that "scraping bots and shared user credentials are unsupported, unreliable, and put you at risk in client security audits."

That is unambiguous, and it should end the conversation about unofficial automation for that portal. An integration that saves ten recruiter hours a week and gets your agency flagged in a client's security questionnaire is not a saving. It is a supplier relationship at risk.

This is worth saying clearly because it is the case a cheap developer will quietly ignore. Ask any prospective integrator what they do when the access agreement forbids automation. If they do not have an answer, they have not read one.

### 4. No API, and automation is permitted

Then a custom integration is genuinely the only path, and this is where the long tail lives. It should still be built like a professional system: credentials your agency owns rather than shared logins, sensible rate limiting, full logging, and an audit trail you can hand to a client without hesitating.

## Where the gap is widest

Two segments stand out.

**Healthcare staffing.** The VMS landscape here is the most fragmented in the industry, with a long tail of platforms serving specific hospital systems and regional networks. Many publish no developer documentation at all. If you place clinicians across several health systems, you are almost certainly retyping into portals no connector covers.

**Everyone whose biggest client is not on the popular list.** Unified API vendors and native connectors cover the systems with the most customers. That is rational product strategy and useless to you if your highest-volume client is the exception. The irony is that your most valuable account is often the one still handled by hand.

## What to do about it

A practical sequence, in order of cost:

1. **Count the retyping.** How many submittals per week, times minutes each, times loaded recruiter cost. Do this before pricing any solution, because it is the only number that tells you what a fix is worth.
2. **Check your vendor's current support list.** Your ATS may already cover a portal you are doing by hand, simply because nobody turned it on.
3. **Classify each remaining portal** into the four access paths above. Documented API, gated, forbidden, or none. This takes about a day and it changes everything downstream.
4. **Buy where you can, build where you must.** Connectors for the covered systems, custom integration for the long tail. These are complements, not competing options.
5. **Budget for maintenance from day one.** Portals change forms and APIs. An unmaintained integration decays quietly, and the failure mode is the worst kind: it looks like it is working while submittals silently do not arrive. Monitoring and alerting are not optional extras here.

## The part people get wrong

The most common mistake is treating this as a one-off IT project. It is not. It is a running system that touches a client's system of record, and it needs the same treatment as any production pipeline: validation before write, deduplication, failure alerts, and someone who fixes it when a portal ships a new form.

The second most common mistake is skipping step three. Scoping an integration without establishing the access path first produces a quote that is wrong in both directions: too high for the portals with clean APIs, and too low for the ones that have none.

## Need this built and kept running?

I build and maintain two way sync between agency ATS platforms, VMS portals, job boards and credentialing systems, using the official API wherever one exists and checking the access agreement before writing any automation. Details, process, and how each access path is priced are on the [ATS and VMS data sync page](/staffing-data-integration).

If you want a straight answer on your specific portals, send me the list of systems and which direction the data needs to move, through the [contact form](/#contact) or [Upwork](https://www.upwork.com/freelancers/phanvuong2). I reply within 24 hours, and I will tell you when the answer is that a portal should not be automated at all.
