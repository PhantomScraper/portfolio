<template>
  <!-- Hallmark · macrostructure: Split Studio · design-system: design.md
       Same structural vocabulary as /web-scraping-service. Hero proof column
       is the terms spec sheet. -->
  <main id="main-content">
    <!-- Hero -->
    <section class="shell band band--lead hero" aria-label="Staffing data integration">
      <div class="hero__grid">
        <div>
          <p class="eyebrow">For staffing, recruitment and healthcare agencies</p>

          <h1 class="hero__title">
            Stop Re-Typing Candidates Into VMS Portals
          </h1>

          <p class="hero__lede">
            <strong>ATS and VMS data integration</strong> for staffing agencies. I connect the
            systems your recruiters already work in, so jobs, candidates, submittals, and
            timesheets move between them without anyone copying a field by hand. Official API
            wherever one exists, and I check the access agreement before I automate anything.
          </p>

          <div class="hero__actions">
            <a href="#contact" class="btn btn-primary">Describe your sync in 2 minutes</a>
            <a
              href="https://www.upwork.com/freelancers/phanvuong2"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
            >
              Hire me on Upwork
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <dl class="terms">
          <div v-for="term in terms" :key="term.k">
            <dt>{{ term.k }}</dt>
            <dd>{{ term.v }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- The gap -->
    <section class="band" aria-label="The submittal gap">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">01 / The gap</p>
          <div>
            <h2 class="section-head__title">Jobs Flow In. Candidates Do Not Flow Back.</h2>
            <p class="section-head__lede">
              Most agencies already have jobs pulled into their ATS automatically. The return
              trip is where the manual work sits, and it is the part nobody has solved for you.
            </p>
          </div>
        </div>

        <ol class="rows">
          <li v-for="(item, i) in gap" :key="item.title" class="row">
            <div class="row__lead">
              <span class="row__index tnum">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="row__title">{{ item.title }}</h3>
            </div>
            <p class="row__text">{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- What I build -->
    <section class="band band--tint" aria-label="What gets built">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">02 / Included</p>
          <div>
            <h2 class="section-head__title">What a Sync Engagement Includes</h2>
          </div>
        </div>

        <dl class="cases">
          <div v-for="d in deliverables" :key="d.title" class="cases__row">
            <dt>{{ d.title }}</dt>
            <dd>{{ d.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Access paths -->
    <section class="band" aria-label="How each system is connected">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">03 / Access</p>
          <div>
            <h2 class="section-head__title">Every Portal Gets the Right Access Path</h2>
            <p class="section-head__lede">
              The connection method is not a technical preference. It decides whether your
              integration survives a client security audit.
            </p>
          </div>
        </div>

        <div class="tablewrap">
          <table class="spec">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col" class="spec__mine">What I do</th>
                <th scope="col">What I will not do</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in access" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td class="spec__mine">{{ row.mine }}</td>
                <td>{{ row.never }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="section-head__lede" style="margin-top: 1.5rem">
          This matters more than it sounds. Beeline states plainly that scraping bots and shared
          user credentials violate your Supplier Access Agreement, and that its official supplier
          API is the only compliant path. A cheap integration that gets your agency flagged in a
          client's security audit is not a saving.
        </p>
      </div>
    </section>

    <!-- Process -->
    <section class="band band--tint" aria-label="How the engagement works">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">04 / Process</p>
          <div>
            <h2 class="section-head__title">How the Engagement Works</h2>
          </div>
        </div>

        <ol class="steps">
          <li v-for="(step, i) in steps" :key="step.title" class="step">
            <span class="step__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__text">{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- FAQ -->
    <section class="band" aria-label="Integration FAQ">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">05 / FAQ</p>
          <div>
            <h2 class="section-head__title">Questions Agencies Ask</h2>
          </div>
        </div>

        <div class="faq">
          <details v-for="faq in faqs" :key="faq.question" class="faq__item">
            <summary class="faq__q">
              <span>{{ faq.question }}</span>
              <span class="faq__mark" aria-hidden="true" />
            </summary>
            <p class="faq__a">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
const siteUrl = 'https://www.vuongphan.dev'
const pageUrl = `${siteUrl}/staffing-data-integration`

const terms = [
  { k: 'Upwork rating', v: '5.0, Top Rated Plus' },
  { k: 'Hours worked', v: '7,200+' },
  { k: 'Systems connected', v: 'ATS, VMS, job boards, credentialing' },
  { k: 'Access method', v: 'Official API wherever one exists' },
  { k: 'Compliance check', v: 'Before any automation is written' },
  { k: 'Monitoring', v: 'Included, with failure alerts' },
  { k: 'Working hours', v: 'Covers EU and US East business hours' },
]

const gap = [
  {
    title: 'Jobs come in automatically. Submittals go out by hand.',
    text: 'Bullhorn publishes the list of VMS portals its own VMS Sync product supports. At the time of writing it covers 124 portals for pulling jobs, and 9 for pushing candidate submittals back. For every other portal, a recruiter reads the job in the ATS and then logs into the portal and retypes the candidate, re-uploads the resume, and re-answers the screening questions.',
  },
  {
    title: 'That retyping is the most expensive step you have.',
    text: 'It happens on every submittal, it is slow, and a mistyped rate or a missed screening answer loses a placement outright. Speed to submit decides who fills the requisition, so the manual step is not just a cost, it is lost revenue.',
  },
  {
    title: 'The long tail is where your agency actually lives.',
    text: 'The big names are closing this gap themselves with supplier APIs. The healthcare and niche VMS platforms mostly are not, and many publish no developer documentation at all. That long tail is exactly where a custom integration pays for itself.',
  },
  {
    title: 'Off the shelf connectors stop at the popular systems.',
    text: 'Unified API vendors cover the systems with the most customers, which is rational for them and useless to you if your top client runs something outside that list. A per client integration built against your own credentials has no such limit.',
  },
]

const deliverables = [
  {
    title: 'Two way sync between your ATS and each portal',
    text: 'Jobs and requisitions in, candidate submittals, status updates, and timesheets back out. Field mapping agreed with you up front, including rate formats, screening questions, and custom fields.',
  },
  {
    title: 'Job board and careers site distribution',
    text: 'The same record pushed to the boards you post on and to your own careers site, so a job is written once and appears everywhere without a second data entry pass.',
  },
  {
    title: 'Deduplication and data quality rules',
    text: 'Candidate matching, duplicate prevention, and validation before anything is written into a production system. Writing bad data into your ATS is worse than not syncing at all.',
  },
  {
    title: 'Monitoring, alerting, and repair',
    text: 'Portals change their forms and their APIs. You get alerts when a sync fails rather than discovering it from a client, and repairs are part of the arrangement rather than a new quote every time.',
  },
  {
    title: 'An audit trail your clients can accept',
    text: 'Logged, attributable actions using credentials your agency owns, so you can answer a client security questionnaire about how data moved without hesitating.',
  },
  {
    title: 'The internal tools around it when you want them',
    text: 'Dashboards, submission queues, and admin panels built on the same data, in Nuxt, Vue, React, FastAPI, or Node. One person for the pipe and the interface removes an integration handoff.',
  },
]

const access = [
  {
    label: 'The portal has a supplier API',
    mine: 'Use it. Request credentials in your agency name, integrate against the documented endpoints, handle their auth and rate limits properly.',
    never: 'Automate the web UI when a supported API exists.',
  },
  {
    label: 'The API is gated behind a plan or an approval',
    never: 'Route around the gate quietly.',
    mine: 'Tell you what the upgrade or approval costs before you commit, so you can decide if the integration is worth it.',
  },
  {
    label: 'The access agreement forbids automation',
    mine: 'Say so and stop. Then look for a supported alternative, or a workflow change that removes the step.',
    never: 'Automate anyway and expose your agency in a client audit.',
  },
  {
    label: 'No API, and automation is permitted',
    mine: 'Automate your own authorised workflow with credentials your agency owns, with rate limits and full logging.',
    never: 'Use shared logins or credentials belonging to someone else.',
  },
]

const steps = [
  {
    title: 'Tell me the systems and the direction',
    text: 'Which ATS you run, which portals you serve, and which way the data needs to move. A screenshot of the screen your recruiters retype into is often enough to scope it.',
  },
  {
    title: 'I check the access path for each portal',
    text: 'Documented API, gated API, or no API. Plus what the access agreement actually permits. You get this in writing before any code is written, because it changes both the price and whether the work should happen at all.',
  },
  {
    title: 'Fixed scope and fixed price within 24 hours',
    text: 'Per portal pair, with the field mapping agreed. You know what it costs to build and what it costs to keep running before you commit.',
  },
  {
    title: 'Build, run in parallel, then cut over',
    text: 'The sync runs alongside your manual process first so you can compare outputs on real submittals. Cut over only when it matches.',
  },
  {
    title: 'Ongoing monitoring and repair',
    text: 'A monthly arrangement covering uptime, alerting, and fixes when a portal changes. This is where a sync earns its keep, since an unmaintained integration quietly rots.',
  },
]

const faqs = [
  {
    question: 'Which ATS and VMS systems do you work with?',
    answer: 'On the ATS side: Bullhorn, JobDiva, Ceipal, Avionte, JobAdder, Vincere, Recruit CRM, Loxo, and others. On the VMS side the list is long and fragmented, including the healthcare platforms that publish no developer documentation at all. The honest answer is that the system matters less than the access path: tell me the names and I will tell you within a day whether each one has a documented API, a gated one, or none, and what that means for scope and price.',
  },
  {
    question: 'Is this the same as an off the shelf integration?',
    answer: 'No, and that is the point. Unified API vendors and native connectors cover the systems with the most customers. They are a good buy when your portals are on that list. This service exists for the portals that are not, which for most agencies is where the manual work has been left stranded.',
  },
  {
    question: 'Is automating a portal allowed?',
    answer: 'It depends on the portal, and it is the first thing I check. Where a supplier API exists I use it. Some access agreements explicitly forbid scraping bots and shared credentials, Beeline states this publicly, and in those cases the compliant API is the only path I will take. Where no API exists and automation is permitted, I automate your own authorised workflow using credentials your agency owns, with logging you can show a client. I will tell you when the answer is no.',
  },
  {
    question: 'What does it cost?',
    answer: 'Build is quoted fixed per portal pair once the access path and field mapping are known, because a documented API and an undocumented form are very different amounts of work. Ongoing monitoring and repair runs as a monthly arrangement. You get both numbers before you commit, and the check to apply is simple: compare it against the recruiter hours currently spent retyping, and against one lost placement.',
  },
  {
    question: 'Do you work with healthcare staffing?',
    answer: 'Yes, and it is the segment where this gap is widest, because the healthcare VMS landscape is the most fragmented. It also carries real constraints around candidate and credentialing data, including what can be shared with a contractor and under what agreement. Raise those constraints in the first conversation and we scope around them rather than discovering them late.',
  },
  {
    question: 'You are in Vietnam. How does that work in practice?',
    answer: 'I work 12:00 to 02:00 Vietnam time, which covers the full European business day and most of the US East Coast business day. For an integration project that matters, because the work needs conversations with the recruiters who actually use the system, not just a spec handed over once. Contracting can run through Upwork with escrow protection, or as a direct contract.',
  },
  {
    question: 'Can you take over an integration someone else built?',
    answer: 'Yes. Inheriting a half working sync is common, and often the fastest win is repairing and monitoring what exists rather than rebuilding it. I will tell you honestly which of the two is cheaper for you after reading the code.',
  },
]

useSeoMeta({
  title: 'ATS and VMS Data Sync for Staffing and Recruitment Agencies',
  description:
    'Automated sync between your ATS, VMS portals and job boards. Official API first, access agreement checked, monitoring included. Built by one senior developer.',
  ogType: 'website',
  ogUrl: pageUrl,
  ogTitle: 'ATS and VMS Data Sync for Staffing and Recruitment Agencies',
  ogDescription:
    'Stop re-typing candidates into VMS portals. Two way ATS and VMS integration, built and maintained by one senior developer.',
  ogImage: `${siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og-image.png`,
})

useHead({
  titleTemplate: '%s',
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            '@id': `${pageUrl}#service`,
            name: 'ATS and VMS Data Integration for Staffing Agencies',
            serviceType: 'Systems Integration and Data Synchronisation',
            description:
              'Two way data synchronisation between an agency ATS, VMS portals, job boards and credentialing systems. Official API used wherever one exists, access agreements checked before any automation, monitoring and repair included.',
            provider: { '@id': `${siteUrl}/#person` },
            areaServed: 'Worldwide',
            url: pageUrl,
            audience: {
              '@type': 'Audience',
              audienceType:
                'Staffing agencies, recruitment agencies, healthcare staffing agencies, MSP suppliers',
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${pageUrl}#webpage`,
            url: pageUrl,
            name: 'ATS and VMS Data Sync for Staffing and Recruitment Agencies',
            description:
              'Automated sync between your ATS, VMS portals and job boards. Official API first, access agreement checked, monitoring included.',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#person` },
            inLanguage: 'en-US',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'ATS and VMS Data Sync',
                  item: pageUrl,
                },
              ],
            },
          },
          {
            '@type': 'FAQPage',
            '@id': `${pageUrl}#faq`,
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ],
      }),
    },
  ],
})
</script>

<style scoped>
.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-xl);
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    gap: var(--space-2xl);
    align-items: start;
  }
}

.hero__title {
  margin-top: var(--space-md);
  font-size: var(--text-display-s);
  line-height: 1.06;
  max-width: 18ch;
}

.hero__lede {
  margin-top: var(--space-md);
  font-size: var(--text-md);
  color: var(--color-muted);
  max-width: 56ch;
}

.hero__lede strong {
  font-weight: 500;
  color: var(--color-ink);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs);
  margin-top: var(--space-lg);
}

/* F3 · terms spec sheet */
.terms {
  margin: 0;
  border-top: 1px solid var(--color-rule);
}

.terms > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2xs) var(--space-md);
  padding-block: var(--space-2xs);
  border-bottom: 1px solid var(--color-rule);
}

.terms dt {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.terms dd {
  margin: 0;
  font-size: var(--text-sm);
  text-align: right;
  color: var(--color-ink);
}

/* Split Studio rows */
.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

.row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-2xs);
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 900px) {
  .row {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: var(--space-2xl);
    align-items: start;
  }

}

.row__lead {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
}

.row__index {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-accent);
  flex: none;
}

.row__title {
  font-size: var(--text-base);
  line-height: 1.25;
}

.row__text {
  color: var(--color-muted);
  font-size: var(--text-sm);
  max-width: 66ch;
}

/* Use cases: catalogue rows, label hanging in the margin */
.cases {
  margin: 0;
  border-top: 1px solid var(--color-rule);
}

.cases__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-3xs);
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .cases__row {
    grid-template-columns: 18rem minmax(0, 1fr);
    gap: var(--space-lg);
    align-items: baseline;
  }
}

.cases dt {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.cases dd {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-muted);
  max-width: 66ch;
}

/* F3 · comparison table */
.tablewrap {
  overflow-x: auto;
}

.spec {
  width: 100%;
  min-width: 40rem;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

.spec thead th {
  text-align: left;
  padding: var(--space-2xs) var(--space-xs);
  border-bottom: 1px solid var(--color-rule-strong);
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.spec tbody th {
  text-align: left;
  padding: var(--space-xs);
  border-bottom: 1px solid var(--color-rule);
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--color-ink);
  vertical-align: top;
  white-space: nowrap;
}

.spec td {
  padding: var(--space-xs);
  border-bottom: 1px solid var(--color-rule);
  vertical-align: top;
  color: var(--color-muted);
}

/* The accent marks the column that matters, once. */
.spec__mine {
  background: var(--color-accent-wash);
  color: var(--color-ink);
}

thead .spec__mine {
  color: var(--color-accent);
}

/* F4 · step sequence, horizontal on wide screens */
.steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--space-2xl);
  }
}

@media (min-width: 1100px) {
  .steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: var(--space-lg);
  }
}

.step {
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

.step__num {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-accent);
}

.step__title {
  margin-top: var(--space-2xs);
  font-size: var(--text-base);
  line-height: 1.25;
}

.step__text {
  margin-top: var(--space-2xs);
  font-size: var(--text-sm);
  color: var(--color-muted);
}

/* Disclosure list */
.faq {
  border-top: 1px solid var(--color-rule);
  max-width: 72ch;
}

.faq__item {
  border-bottom: 1px solid var(--color-rule);
}

.faq__q {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-md);
  padding-block: var(--space-md);
  cursor: pointer;
  list-style: none;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: -0.02em;
  line-height: 1.35;
  color: var(--color-ink);
  transition: color var(--dur-short) var(--ease-out);
}

.faq__q::-webkit-details-marker {
  display: none;
}

.faq__q:hover {
  color: var(--color-accent);
}

.faq__mark {
  position: relative;
  flex: none;
  width: 0.75rem;
  height: 0.75rem;
  margin-top: 0.3rem;
}

.faq__mark::before,
.faq__mark::after {
  content: "";
  position: absolute;
  inset: 50% 0 auto 0;
  height: 1px;
  background: var(--color-neutral);
}

.faq__mark::after {
  transform: rotate(90deg);
  transition: opacity var(--dur-short) var(--ease-out);
}

.faq__item[open] .faq__mark::after {
  opacity: 0;
}

.faq__a {
  padding-bottom: var(--space-md);
  color: var(--color-muted);
  max-width: 68ch;
}

.section-head__lede a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>
