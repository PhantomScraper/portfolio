<template>
  <!-- Hallmark · macrostructure: Split Studio · design-system: design.md
       Same page grammar as /hire-web-scraping-developer. The hero proof column
       is a "should you automate this" checklist, the question a buyer actually
       has before they search for a developer. -->
  <main id="main-content">
    <!-- Hero -->
    <section class="shell band band--lead" aria-label="Hire an automation developer">
      <div class="hero__grid">
        <div>
          <p class="eyebrow">Available for new projects</p>

          <h1 class="hero__title">
            Hire an Automation Developer Who Removes the Manual Steps
          </h1>

          <p class="hero__lede">
            Reports that write themselves, data that moves between tools on its own,
            portals that get checked while you sleep. I am a
            <strong>Top Rated Plus freelance automation developer</strong> with a
            <strong>5.0 rating and 7,200+ hours on Upwork</strong>, working in Python,
            n8n, Make, and browser automation. Fixed quote within 24 hours.
          </p>

          <div class="hero__actions">
            <a
              href="https://www.upwork.com/freelancers/phanvuong2"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-upwork"
            >
              Hire me on Upwork
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" class="btn btn-outline">Describe the task, get a quote</a>
          </div>

          <dl class="terms">
            <div>
              <dt>Upwork rating</dt>
              <dd>5.0, Top Rated Plus</dd>
            </div>
            <div>
              <dt>Hours worked</dt>
              <dd>7,200+</dd>
            </div>
            <div>
              <dt>Projects delivered</dt>
              <dd>50+</dd>
            </div>
          </dl>
        </div>

        <!-- Hero proof column: is this task worth automating -->
        <div class="vet">
          <p class="vet__head">Five signs a task is worth automating</p>
          <ol class="vet__list">
            <li v-for="(check, i) in signs" :key="check.title">
              <span class="vet__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
              <span>
                <span class="vet__title">{{ check.title }}</span>
                <span class="vet__text">{{ check.text }}</span>
              </span>
            </li>
          </ol>
          <p class="vet__note">
            If three of the five apply, automation usually pays for itself within the
            first month. Send me the task and I will tell you honestly if it does not.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick answer -->
    <section class="band band--tint" aria-label="Quick answer">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">Quick answer</p>
          <div>
            <h2 class="section-head__title">Hiring an Automation Developer in 2026</h2>
            <p class="dateline">Published August 31, 2026</p>
          </div>
        </div>

        <dl class="qa">
          <div v-for="fact in quickAnswers" :key="fact.label">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>

        <p class="qa__note">
          Vuong Phan is a Top Rated Plus freelance automation developer on Upwork with a
          5.0 rating across 7,200+ hours, building Python scripts, n8n and Make workflows,
          browser bots, and AI document pipelines, with a fixed scope and price quoted
          within 24 hours of your first message.
        </p>
      </div>
    </section>

    <!-- What you can automate -->
    <section class="band" aria-label="What you can automate">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">01 / Skills</p>
          <div>
            <h2 class="section-head__title">What You Can Hire Me to Automate</h2>
            <p class="section-head__lede">
              One developer across the whole automation stack: no-code workflows where
              they fit, custom code where they do not, and the judgment to know which is which.
            </p>
          </div>
        </div>

        <ol class="rows">
          <li v-for="(skill, i) in skills" :key="skill.title" class="row">
            <div class="row__lead">
              <span class="row__index tnum">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="row__title">{{ skill.title }}</h3>
            </div>
            <p class="row__text">{{ skill.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Hire by tool -->
    <section class="band band--tint" aria-label="Hire by tool">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">02 / By tool</p>
          <div>
            <h2 class="section-head__title">Hire by Tool</h2>
            <p class="section-head__lede">
              Already know the platform you want? These are the tools I build and
              maintain automations in every week.
            </p>
          </div>
        </div>

        <dl class="cases">
          <div v-for="tool in tools" :key="tool.title" class="cases__row">
            <dt>{{ tool.title }}</dt>
            <dd>
              {{ tool.text }}
              <NuxtLink v-if="tool.link" :to="tool.link" class="cases__link">{{ tool.linkText }} →</NuxtLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Rates -->
    <section class="band" aria-label="Automation developer rates">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">03 / Rates</p>
          <div>
            <h2 class="section-head__title">What It Costs to Hire an Automation Developer</h2>
            <p class="section-head__lede">
              Market ranges for 2026, so you can sanity-check any quote, including mine.
              Every project I take gets a fixed price up front.
            </p>
          </div>
        </div>

        <div class="tablewrap">
          <table class="spec">
            <thead>
              <tr>
                <th scope="col">Engagement</th>
                <th scope="col" class="spec__mine">Senior freelancer</th>
                <th scope="col">Automation agency</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rates" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td class="spec__mine">{{ row.freelancer }}</td>
                <td>{{ row.company }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="footnote">
          Automation is often the second half of a data project. Rates for the data
          extraction half are on the
          <NuxtLink to="/hire-web-scraping-developer">hire a web scraping developer</NuxtLink> page.
        </p>
      </div>
    </section>

    <!-- How to hire -->
    <section class="band band--tint" aria-label="Ways to hire">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">04 / Engagement</p>
          <div>
            <h2 class="section-head__title">Three Ways to Work Together</h2>
          </div>
        </div>

        <ol class="steps">
          <li v-for="(opt, i) in hireOptions" :key="opt.title" class="step">
            <span class="step__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="step__title">{{ opt.title }}</h3>
            <p class="step__text">{{ opt.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- FAQ -->
    <section class="band" aria-label="Hiring FAQ">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">05 / FAQ</p>
          <div>
            <h2 class="section-head__title">Questions About Hiring an Automation Developer</h2>
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
const pageUrl = `${siteUrl}/hire-automation-developer`

const signs = [
  {
    title: 'It repeats on a schedule',
    text: 'Daily exports, weekly reports, monthly reconciliations. Anything with a calendar rhythm is a script waiting to exist.',
  },
  {
    title: 'It moves data between two tools by copy-paste',
    text: 'CRM to spreadsheet, inbox to database, portal to portal. Copy-paste between systems is the single most automatable task in any business.',
  },
  {
    title: 'A human waits in the loop without adding judgment',
    text: 'Approve, rename, forward, upload. If the decision rule can be written down, the person does not need to be there.',
  },
  {
    title: 'The steps are mechanical but errors are expensive',
    text: 'Invoice numbers, order quantities, compliance fields. Machines do not get tired at row 400.',
  },
  {
    title: 'The inputs are already digital',
    text: 'Emails, PDFs, spreadsheets, dashboards, APIs. If the data is on a screen, it can be captured and moved automatically.',
  },
]

const quickAnswers = [
  { label: 'Hourly rate', value: 'From $25 per hour. Senior freelance automation developers typically charge $30 to $80 per hour in 2026' },
  { label: 'Single script', value: '$150 to $600 fixed for one automation, delivered in 2 to 5 days' },
  { label: 'Workflow build', value: '$300 to $1,500 fixed for a typical n8n or Make workflow with error handling' },
  { label: 'Quote', value: 'Fixed scope and price within 24 hours of your first message' },
  { label: 'Tooling', value: 'Python, n8n, Make, Playwright, cron and task queues, OpenAI and Claude APIs' },
  { label: 'Track record', value: '5.0 rating, Top Rated Plus, 7,200+ hours and 50+ projects on Upwork' },
]

const skills = [
  {
    title: 'Workflow automation with n8n and Make',
    text: 'Cross-platform workflows connecting your CRM, email, spreadsheets, forms, and databases. Self-hosted n8n setups you own, webhook triggers, retry logic, and error alerts, so a silent failure never costs you a week of data.',
  },
  {
    title: 'Custom Python automation',
    text: 'The jobs drag-and-drop tools cannot express: data processing, file handling, report generation, bulk operations, and scheduled scripts running on cron or a task queue with logging and monitoring built in.',
  },
  {
    title: 'Browser automation and RPA',
    text: 'Playwright bots for systems with no API: filling forms in legacy portals, downloading statements, checking availability, and submitting entries, on a schedule and with screenshots as an audit trail.',
  },
  {
    title: 'API integration and two-way sync',
    text: 'REST, GraphQL, and webhook integrations that keep two platforms in sync, such as ATS to VMS, CRM to billing, or store to warehouse. When there is no official API, I reverse engineer the private one.',
  },
  {
    title: 'AI document workflows',
    text: 'Invoices, receipts, contracts, and email attachments parsed with OCR and LLMs into clean structured rows, with a human review queue for the edge cases instead of a human doing all of it.',
  },
  {
    title: 'Voice AI and phone automation',
    text: 'Real-time voice agents on LiveKit for inbound qualification, appointment reminders, and after-hours answering, connected to your calendar and CRM.',
  },
]

const tools = [
  {
    title: 'Hire an n8n developer',
    text: 'Production n8n on your own server: complex branching, sub-workflows, custom code nodes, credentials management, and version-controlled exports. You own the instance, so there is no per-task pricing creep.',
    link: '/blog/no-code-scraping-automation-n8n',
    linkText: 'n8n vs Make vs Zapier guide',
  },
  {
    title: 'Hire a Make or Zapier developer',
    text: 'New scenarios built, or existing ones untangled and documented. When Zapier task pricing outgrows your budget, I migrate the workflows to self-hosted n8n or custom code and cut the monthly bill.',
    link: '/blog/no-code-scraping-automation-n8n',
    linkText: 'When to migrate off Zapier',
  },
  {
    title: 'Hire a Playwright automation developer',
    text: 'Browser bots for portals without an API: logins, form filling, file downloads, and scheduled checks, including stealth builds for sites that block automation.',
    link: '/blog/playwright-vs-puppeteer-vs-selenium',
    linkText: 'Playwright vs Puppeteer vs Selenium',
  },
  {
    title: 'Hire a Python scripting developer',
    text: 'Standalone scripts and scheduled jobs: file processing, report generation, data cleanup, and alerts, deployed with cron or a queue and monitored so failures surface immediately.',
    link: '/blog/scheduling-monitoring-scrapers-production',
    linkText: 'Running scheduled jobs in production',
  },
  {
    title: 'Hire an API integration developer',
    text: 'Two-way sync between platforms, webhook receivers, and integrations with undocumented APIs when the vendor does not offer one.',
    link: '/blog/reverse-engineering-private-apis',
    linkText: 'Reverse engineering private APIs',
  },
  {
    title: 'Hire a web scraping automation developer',
    text: 'When the automation starts with data that lives on someone else\'s website: scheduled scrapers feeding your sheets, database, or workflows. This is my core specialty, with its own hiring page.',
    link: '/hire-web-scraping-developer',
    linkText: 'Hire a web scraping developer',
  },
]

const rates = [
  { label: 'Hourly rate', freelancer: '$30 - $80 / hour for senior automation specialists', company: '$90 - $200 / hour blended agency rate' },
  { label: 'Single automation script', freelancer: '$150 - $600 fixed', company: '$2,000+ minimum engagement' },
  { label: 'n8n or Make workflow build', freelancer: '$300 - $1,500 fixed', company: '$3,000 - $10,000' },
  { label: 'Monthly maintenance', freelancer: '$100 - $500 / month', company: '$1,000+ / month' },
  { label: 'First working version', freelancer: '2 - 5 days', company: '2 - 4 weeks after onboarding' },
]

const hireOptions = [
  {
    title: '1. Hire through Upwork',
    text: 'Hourly or fixed price with escrow protection, verified work history, and a public 5.0 rated track record. The safest option for a first project together.',
  },
  {
    title: '2. Direct project contract',
    text: 'Describe the manual task through the contact form and get a fixed scope and quote within 24 hours, including an honest answer if the task is not worth automating.',
  },
  {
    title: '3. Managed automation',
    text: 'A monthly arrangement where I run, monitor, and fix your automations and you simply see the work happen. Ideal once two or three workflows are in production.',
  },
]

const faqs = [
  {
    question: 'How much does it cost to hire an automation developer?',
    answer: 'Senior freelance automation developers charge $30 to $80 per hour in 2026. Typical fixed prices: $150 to $600 for a single automation script, $300 to $1,500 for an n8n or Make workflow with proper error handling, and $100 to $500 per month for maintenance of automations already in production. Automation agencies charge 3 to 5 times more for the same deliverable. My own hourly rate starts at $25 per hour, and I quote every project as a fixed price within 24 hours.',
  },
  {
    question: 'Should I use n8n, Make, Zapier, or custom Python code?',
    answer: 'Use Zapier or Make for simple workflows between standard SaaS tools when monthly volume is low. Use self-hosted n8n when volume grows, because you own the instance and stop paying per task. Use custom Python when the logic is complex, the volume is high, a site has no API, or the workflow needs scraping and anti-bot handling. I build all four and regularly migrate clients from Zapier to n8n or code when the monthly bill outgrows the value.',
  },
  {
    question: 'What business tasks can be automated?',
    answer: 'The common wins: moving data between tools that do not talk to each other, generating and sending recurring reports, parsing invoices and documents into spreadsheets or accounting software, monitoring portals or competitor sites for changes, syncing a CRM with billing or fulfillment, qualifying inbound leads, and answering routine phone calls with a voice agent. The test is simple: if the steps can be written down as rules, the task can almost always be automated.',
  },
  {
    question: 'Can you automate a website or portal that has no API?',
    answer: 'Yes, two ways. Browser automation with Playwright drives the site like a person: logging in, filling forms, downloading files, on a schedule. Or I reverse engineer the private API the site itself uses, which is faster and more stable when it works. I pick per target and confirm feasibility before quoting.',
  },
  {
    question: 'Do you maintain automations after delivery?',
    answer: 'Yes. Every build ships with logging and failure alerts, and the first days of support after delivery are included. After that, maintenance is $100 to $500 per month depending on how many workflows are in production, with a response within 24 hours and most fixes shipped the same day. Automations break when the tools they touch change, so unmaintained automation is a liability.',
  },
  {
    question: 'How fast can an automation be delivered?',
    answer: 'Most single automations ship in 2 to 5 days. A multi-step workflow with several integrations typically takes 1 to 2 weeks. You get a fixed scope, price, and timeline within 24 hours of describing the task, and I tell you up front if the task is not worth automating.',
  },
  {
    question: 'Can you take over an existing n8n, Make, or Zapier setup?',
    answer: 'Yes. I audit the existing workflows, document what each one does, fix the fragile steps, and either keep the current platform or migrate to self-hosted n8n or custom code when per-task pricing has become the biggest line item. You get a map of your own automation instead of a black box a former contractor left behind.',
  },
  {
    question: 'Should I hire a freelance automation developer or an agency?',
    answer: 'For projects under roughly $10,000, a senior freelancer is usually faster and 40 to 70% cheaper, because you work directly with the person building the automation. An agency makes sense for enterprise RPA programs with compliance requirements and dozens of processes. Most report, sync, and document workflows fit the freelancer model.',
  },
]

useSeoMeta({
  title: 'Hire an Automation Developer | Python, n8n, Browser Bots',
  description: 'Hire a freelance automation developer: Python scripts, n8n and Make workflows, browser bots, and AI document parsing. Fixed quote in 24 hours.',
  ogType: 'website',
  ogUrl: pageUrl,
  ogTitle: 'Hire an Automation Developer | Python, n8n, Browser Bots',
  ogDescription: 'Hire a freelance automation developer: Python scripts, n8n and Make workflows, browser bots, and AI document parsing. Fixed quote in 24 hours.',
  ogImage: `${siteUrl}/og/pages/hire-automation-developer.png`,
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og/pages/hire-automation-developer.png`,
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
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Phan Vuong',
            url: siteUrl,
            jobTitle: 'Freelance Automation Developer | Web Scraping and Full-Stack Engineer',
            description: 'Top Rated Plus freelance developer on Upwork with a 5.0 rating and 7,200+ hours: automation, web scraping, API integration, and full-stack development.',
            sameAs: [
              'https://www.upwork.com/freelancers/phanvuong2',
              'https://github.com/hienvuong2810',
            ],
            knowsAbout: [
              'Business Process Automation',
              'Workflow Automation',
              'n8n',
              'Make',
              'Zapier Migration',
              'Browser Automation',
              'RPA',
              'Python Scripting',
              'API Integration',
              'Web Scraping',
              'AI Document Parsing',
              'Voice AI',
            ],
          },
          {
            '@type': 'Service',
            '@id': `${pageUrl}#service`,
            name: 'Freelance Automation Developer for Hire',
            serviceType: 'Automation Development',
            description: 'Hire a Top Rated Plus freelance automation developer: Python scripts, n8n and Make workflows, browser bots, API sync, and AI document parsing. 5.0 rating and 7,200+ hours on Upwork.',
            provider: { '@id': `${siteUrl}/#person` },
            areaServed: 'Worldwide',
            url: pageUrl,
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '150',
              description: 'Single automation scripts from $150 fixed. Workflow builds from $300. Managed automation from $100 per month. Fixed quote within 24 hours.',
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${pageUrl}#webpage`,
            url: pageUrl,
            name: 'Hire an Automation Developer | Python, n8n, Browser Bots',
            description: 'Hire a freelance automation developer: Python scripts, n8n and Make workflows, browser bots, and AI document parsing. Fixed quote in 24 hours.',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#person` },
            inLanguage: 'en-US',
            datePublished: '2026-08-31',
            dateModified: '2026-08-31',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'Hire an Automation Developer', item: pageUrl },
              ],
            },
          },
          {
            '@type': 'FAQPage',
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
    grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
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
  max-width: 54ch;
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

.terms {
  margin: var(--space-xl) 0 0;
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
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

/* Hero proof column */
.vet {
  padding: var(--space-md);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  background: var(--color-paper-2);
}

.vet__head {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.vet__list {
  list-style: none;
  margin: var(--space-sm) 0 0;
  padding: 0;
}

.vet__list > li {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: var(--space-2xs);
  padding-block: var(--space-2xs);
  border-top: 1px solid var(--color-rule);
}

.vet__num {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-accent);
  padding-top: 0.2rem;
}

.vet__title {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: -0.01em;
  color: var(--color-ink);
}

.vet__text {
  display: block;
  margin-top: 0.1rem;
  font-size: var(--text-sm);
  color: var(--color-muted);
}

.vet__note {
  margin-top: var(--space-sm);
  padding-top: var(--space-2xs);
  border-top: 1px solid var(--color-rule);
  font-size: var(--text-xs);
  color: var(--color-neutral);
}

/* Quick answer fact list */
.dateline {
  margin-top: var(--space-3xs);
  font-size: var(--text-xs);
  color: var(--color-neutral);
}

.qa {
  margin: 0;
  border-top: 1px solid var(--color-rule);
}

.qa > div {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-3xs) var(--space-lg);
  padding-block: var(--space-2xs);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .qa > div {
    grid-template-columns: 12rem minmax(0, 1fr);
  }
}

.qa dt {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
  padding-top: 0.15rem;
}

.qa dd {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.qa__note {
  margin-top: var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-muted);
  max-width: 72ch;
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

/* Catalogue rows */
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
    grid-template-columns: 16rem minmax(0, 1fr);
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

.cases__link {
  display: inline-block;
  margin-left: var(--space-3xs);
  color: var(--color-accent);
  white-space: nowrap;
}

.cases__link:hover {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

/* F3 · rates table */
.tablewrap {
  overflow-x: auto;
}

.spec {
  width: 100%;
  min-width: 38rem;
  border-collapse: collapse;
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
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
}

.spec td {
  padding: var(--space-xs);
  border-bottom: 1px solid var(--color-rule);
  vertical-align: top;
  color: var(--color-muted);
}

.spec__mine {
  background: var(--color-accent-wash);
  color: var(--color-ink);
}

thead .spec__mine {
  color: var(--color-accent);
}

.footnote {
  margin-top: var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-neutral);
}

.footnote a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

/* F4 · engagement options */
.steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

@media (min-width: 900px) {
  .steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--space-2xl);
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
</style>
