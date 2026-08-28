<template>
  <!-- Hallmark · macrostructure: Split Studio · design-system: design.md
       Hero proof column on this route is the terms spec sheet, not code.
       Every string below is the copy that was already here. -->
  <main id="main-content">
    <!-- Hero -->
    <section class="shell band band--lead hero" aria-label="Web scraping service">
      <div class="hero__grid">
        <div>
          <p class="eyebrow">Available for new projects</p>

          <h1 class="hero__title">
            Website Scraping Service, Built Custom for Your Business
          </h1>

          <p class="hero__lede">
            A <strong>custom web scraping</strong> and
            <strong>web data extraction service</strong> delivered by one senior
            freelance developer. You describe the websites and the data you need, I build and run the
            scrapers, you receive clean structured data. No SaaS tool to learn, no agency overhead.
          </p>

          <div class="hero__actions">
            <a href="#contact" class="btn btn-primary">Get a free quote in 24 hours</a>
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

        <!-- F3 · terms spec sheet -->
        <dl class="terms">
          <div v-for="term in terms" :key="term.k">
            <dt>{{ term.k }}</dt>
            <dd>{{ term.v }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- What you get -->
    <section class="band" aria-label="What is included">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">01 / Included</p>
          <div>
            <h2 class="section-head__title">What a Custom Web Scraping Service Includes</h2>
            <p class="section-head__lede">
              Everything from the first request to ongoing delivery is handled for you.
            </p>
          </div>
        </div>

        <ol class="rows">
          <li v-for="(item, i) in deliverables" :key="item.title" class="row">
            <div class="row__lead">
              <span class="row__index tnum">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="row__title">{{ item.title }}</h3>
            </div>
            <p class="row__text">{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Use cases -->
    <section class="band band--tint" aria-label="Use cases">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">02 / Use cases</p>
          <div>
            <h2 class="section-head__title">Web Data Extraction for Every Industry</h2>
          </div>
        </div>

        <dl class="cases">
          <div v-for="uc in useCases" :key="uc.title" class="cases__row">
            <dt>{{ uc.title }}</dt>
            <dd>{{ uc.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Freelancer vs company -->
    <section class="band" aria-label="Freelance developer versus web scraping company">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">03 / Comparison</p>
          <div>
            <h2 class="section-head__title">Freelance Developer vs Web Scraping Company</h2>
            <p class="section-head__lede">
              A web scraping company puts an account manager between you and the person writing the code.
              <NuxtLink to="/hire-web-scraping-developer">Hiring a freelance developer</NuxtLink> removes that layer.
            </p>
          </div>
        </div>

        <!-- F3 · tabular spec sheet, 3 columns, hairline every row -->
        <div class="tablewrap">
          <table class="spec">
            <thead>
              <tr>
                <th scope="col"><span class="sr-only">Criterion</span></th>
                <th scope="col" class="spec__mine">Freelance developer (me)</th>
                <th scope="col">Typical web scraping company</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparison" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td class="spec__mine">{{ row.freelancer }}</td>
                <td>{{ row.company }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="band band--tint" aria-label="How the service works">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">04 / Process</p>
          <div>
            <h2 class="section-head__title">How the Scraping Service Works</h2>
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
    <section class="band" aria-label="Service FAQ">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">05 / FAQ</p>
          <div>
            <h2 class="section-head__title">Web Scraping Service Questions</h2>
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
const pageUrl = `${siteUrl}/web-scraping-service`

// Hero proof column. Each line restates a commitment already made on this page.
const terms = [
  { k: 'Upwork rating', v: '5.0, Top Rated Plus' },
  { k: 'Hours worked', v: '7,200+' },
  { k: 'Projects delivered', v: '50+' },
  { k: 'Quote', v: 'Fixed, within 24 hours' },
  { k: 'Sample', v: 'Free, from your target sites' },
  { k: 'Anti-bot handling', v: 'Included' },
  { k: 'Delivery formats', v: 'CSV, JSON, Excel, database, API' },
]

const deliverables = [
  {
    title: 'A scraper built for your exact target sites',
    text: 'Not a generic tool. Each scraper is custom code written for the structure, pagination, logins, and JavaScript rendering of the specific websites you need data from.',
  },
  {
    title: 'Clean, structured data in your format',
    text: 'Deduplicated and validated data delivered as CSV, JSON, Excel, Google Sheets, a database (PostgreSQL, MongoDB), or a private REST API your team can call.',
  },
  {
    title: 'Anti-bot handling included',
    text: 'Cloudflare, DataDome, PerimeterX, Akamai, and CAPTCHA protected sites are handled with stealth browsers, fingerprinting fixes, and residential proxies.',
  },
  {
    title: 'Scheduling and monitoring',
    text: 'Daily, hourly, or real-time runs with alerting when a site changes. You get fresh data on a schedule without touching anything.',
  },
  {
    title: 'Scales from 1 page to millions',
    text: 'The same service covers a one-off extraction of a single site and distributed crawlers sustaining 10 million pages per day, the scale documented in my Amazon scraping case study.',
  },
  {
    title: 'Maintenance when sites change',
    text: 'Websites redesign and break scrapers. Ongoing maintenance keeps your data flowing, with fixes typically shipped within 24 hours.',
  },
]

const useCases = [
  { title: 'E-commerce and price monitoring', text: 'Track competitor prices, stock, and product catalogs across Amazon, Shopify stores, and marketplaces.' },
  { title: 'Lead generation', text: 'Build targeted B2B lead lists from directories, review sites, and public profiles, enriched and deduplicated.' },
  { title: 'Real estate data', text: 'Listings, prices, agent contacts, and historical trends from property portals, delivered daily.' },
  { title: 'Job board aggregation', text: 'Collect postings across job boards and career pages for market analysis or aggregation products.' },
  { title: 'Market and competitor research', text: 'Reviews, ratings, news mentions, and product changes compiled into one clean dataset.' },
  { title: 'AI training data', text: 'Large text and image datasets collected, cleaned, and formatted for machine learning pipelines.' },
]

const comparison = [
  { label: 'Who does the work', freelancer: 'The developer you talk to writes the code', company: 'Sales, account manager, then an outsourced dev team' },
  { label: 'Pricing', freelancer: 'Freelancer rates, quoted per project with no retainers required', company: 'Agency margins, minimum contracts, and platform fees' },
  { label: 'Turnaround', freelancer: 'First data sample typically within days', company: 'Onboarding calls and sprints before any data arrives' },
  { label: 'Flexibility', freelancer: 'Scope changes are a chat message away', company: 'Change requests go through a ticket queue' },
  { label: 'Accountability', freelancer: 'Public 5.0 rated Upwork track record, escrow protected', company: 'Case studies you cannot always verify' },
]

const steps = [
  { title: 'Describe your data need', text: 'Send the target websites, the fields you need, the volume, and how often. You get a fixed scope and quote within 24 hours.' },
  { title: 'Free sample extraction', text: 'I build a prototype and send a real data sample from your target sites so you can validate quality before committing.' },
  { title: 'Full build and delivery', text: 'The production scraper runs at full scale and delivers to your chosen format: files, database, dashboard, or API.' },
  { title: 'Ongoing runs and support', text: 'Optional scheduling, monitoring, and maintenance keep the data fresh for as long as you need it.' },
]

const faqs = [
  {
    question: 'How much does a custom web scraping service cost?',
    answer: 'Most one-off extractions land between $100 and $500, and recurring pipelines with monitoring typically run from $200 to $1,000+ per month depending on volume, site difficulty, and anti-bot protection. Every project gets a fixed quote up front after a free scoping call, so there are no surprise hours.',
  },
  {
    question: 'Why hire a freelance developer instead of a web scraping company?',
    answer: 'With a web scraping company you pay for sales, account management, and office overhead before any code gets written. Hiring a freelance developer means the person quoting your project is the person building it. You get faster answers, lower cost, and direct accountability through a public Upwork track record with escrow protection.',
  },
  {
    question: 'Why hire a developer instead of using a no-code scraping tool like Octoparse or ParseHub?',
    answer: 'No-code tools work well for simple public pages, but they break on Cloudflare, DataDome, and CAPTCHA protected sites and struggle past a few thousand pages. A custom-built scraper handles anti-bot protection with rotating residential proxies and fingerprint control, scales to millions of pages per day on a distributed architecture, and gets fixed when the target site changes instead of failing silently. You also own the code and the pipeline instead of renting a tool your team has to operate.',
  },
  {
    question: 'Is web scraping legal?',
    answer: 'Scraping publicly available data is generally legal in most jurisdictions, and courts have repeatedly upheld it, but the details matter: terms of service, personal data regulations like GDPR, and copyright all apply. I only take on projects targeting publicly accessible data and can advise on lower-risk approaches, but for legal certainty you should consult a lawyer.',
  },
  {
    question: 'How fast can you deliver the first data?',
    answer: 'For most sites you will see a real sample of extracted data within 2 to 3 days of agreeing on scope. Simple single-site extractions are often delivered in full within a week. Heavily protected or very large targets take longer and the timeline is part of the fixed quote.',
  },
  {
    question: 'Can you scrape sites protected by Cloudflare, DataDome, or CAPTCHAs?',
    answer: 'Yes. Anti-bot bypass is my specialty: stealth browser automation, TLS and browser fingerprint consistency, residential and rotating proxies, and CAPTCHA solving services. Sites protected by Cloudflare, Akamai, DataDome, and PerimeterX are all workable.',
  },
  {
    question: 'Do you offer ongoing scraping as a service, not just one-off projects?',
    answer: 'Yes. Many clients start with a one-off extraction and move to a managed pipeline: scheduled runs, change monitoring, automatic retries, and maintenance when target sites redesign. You receive fresh data continuously without managing any infrastructure.',
  },
]

useSeoMeta({
  title: 'Website Scraping Service | Custom Web Scraping & Data Extraction',
  description: 'Custom website scraping service by a Top Rated Plus freelance developer. Web data extraction delivered as CSV, JSON, database, or API. Free sample, fixed quote in 24 hours, anti-bot bypass included.',
  ogType: 'website',
  ogUrl: pageUrl,
  ogTitle: 'Website Scraping Service | Custom Web Scraping & Data Extraction',
  ogDescription: 'Custom website scraping service by a Top Rated Plus freelance developer. Clean web data extraction as CSV, JSON, database, or API. Free sample and fixed quote in 24 hours.',
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
            name: 'Custom Web Scraping & Web Data Extraction Service',
            serviceType: 'Web Scraping Service',
            description: 'Custom website scraping service and web data extraction delivered by a freelance developer. Scraper development, anti-bot bypass, scheduling, monitoring, and clean data delivery as CSV, JSON, database, or API.',
            provider: { '@id': `${siteUrl}/#person` },
            areaServed: 'Worldwide',
            url: pageUrl,
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '100',
              description: 'One-off extractions typically $100 to $500. Managed recurring pipelines with monitoring from $200 per month. Fixed quote within 24 hours after a free scoping call.',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web Scraping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce and price monitoring scraping' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anti-bot bypass (Cloudflare, DataDome, PerimeterX, Akamai)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead generation and B2B list building' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed scraping pipelines with scheduling and monitoring' } },
              ],
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${pageUrl}#webpage`,
            url: pageUrl,
            name: 'Website Scraping Service | Custom Web Scraping & Data Extraction',
            description: 'Custom website scraping service by a Top Rated Plus freelance developer. Web data extraction delivered as CSV, JSON, database, or API.',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#person` },
            inLanguage: 'en-US',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'Web Scraping Service', item: pageUrl },
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
