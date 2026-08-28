<template>
  <!-- Hallmark · macrostructure: Split Studio · design-system: design.md
       Hero proof column on this route is the vetting checklist, the thing a
       buyer actually wants at the top of a hiring page. Copy is unchanged. -->
  <main id="main-content">
    <!-- Hero -->
    <section class="shell band band--lead" aria-label="Hire a web scraping developer">
      <div class="hero__grid">
        <div>
          <p class="eyebrow">Available for new projects</p>

          <h1 class="hero__title">
            Hire a Web Scraping Developer Who Ships Clean, Reliable Data
          </h1>

          <p class="hero__lede">
            Skip the agency markup and the hiring lottery. I am a
            <strong>Top Rated Plus freelance web scraping developer</strong> with a
            <strong>5.0 rating and 7,200+ hours on Upwork</strong>. You get the
            person who writes the code, a fixed quote in 24 hours, and a free data sample before you commit.
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
            <a href="#contact" class="btn btn-outline">Get a free quote in 24 hours</a>
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

        <!-- Vetting checklist as the hero's proof column -->
        <div class="vet">
          <p class="vet__head">Vet me the same way you would vet anyone</p>
          <ol class="vet__list">
            <li v-for="(check, i) in vetting" :key="check.title">
              <span class="vet__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
              <span>
                <span class="vet__title">{{ check.title }}</span>
                <span class="vet__text">{{ check.text }}</span>
              </span>
            </li>
          </ol>
          <p class="vet__note">
            Use this checklist on every candidate, including me. A serious developer
            passes all five without hesitation.
          </p>
        </div>
      </div>
    </section>

    <!-- What you can hire me for -->
    <section class="band" aria-label="Skills you can hire">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">01 / Skills</p>
          <div>
            <h2 class="section-head__title">What You Can Hire Me For</h2>
            <p class="section-head__lede">
              Web scraping is the specialty, but most clients hire me for the full pipeline:
              extraction, automation, and the application on top of the data.
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

    <!-- Hire by stack -->
    <section class="band band--tint" aria-label="Hire by technology stack">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">02 / By stack</p>
          <div>
            <h2 class="section-head__title">Hire by Stack</h2>
            <p class="section-head__lede">
              Already know the tooling you need? These are the stacks I work in daily,
              with the depth to take over an existing codebase rather than rewrite it.
            </p>
          </div>
        </div>

        <dl class="cases">
          <div v-for="stack in stacks" :key="stack.title" class="cases__row">
            <dt>{{ stack.title }}</dt>
            <dd>
              {{ stack.text }}
              <NuxtLink :to="stack.link" class="cases__link">{{ stack.linkText }} →</NuxtLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Rates -->
    <section class="band" aria-label="Web scraping developer rates">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">03 / Rates</p>
          <div>
            <h2 class="section-head__title">What It Costs to Hire a Web Scraping Developer</h2>
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
                <th scope="col">Web scraping company</th>
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
          Full breakdown in
          <NuxtLink to="/blog/web-scraping-company-vs-freelancer">Web Scraping Company vs Freelance Developer</NuxtLink>.
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
            <h2 class="section-head__title">Questions About Hiring</h2>
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
const pageUrl = `${siteUrl}/hire-web-scraping-developer`

const skills = [
  {
    title: 'Custom web scraping and crawlers',
    text: 'Scrapers built for your exact target sites with Python, Playwright, Puppeteer, and Scrapy. From one-off extractions to scalable asynchronous crawlers sustaining 10 million pages per day.',
  },
  {
    title: 'Anti-bot bypass',
    text: 'Cloudflare, DataDome, PerimeterX, Akamai, and CAPTCHA protected sites handled with stealth browsers, fingerprint control, and residential proxies.',
  },
  {
    title: 'Data pipelines and delivery',
    text: 'Clean, validated data delivered as CSV, JSON, Excel, Google Sheets, PostgreSQL, MongoDB, or a private REST API, on a schedule with monitoring and alerts.',
  },
  {
    title: 'Full-stack development',
    text: 'Hire the same developer for the application layer: dashboards, admin panels, SaaS backends, and internal tools with Nuxt, Vue, React, FastAPI, and Node.js.',
  },
  {
    title: 'API integration and reverse engineering',
    text: 'REST, GraphQL, and WebSocket integrations, plus reverse engineering of private or undocumented APIs when scraping HTML is the slow way.',
  },
  {
    title: 'Automation and AI workflows',
    text: 'End-to-end automations with n8n, Make, or custom code, plus LLM-powered document parsing and voice AI agents built on LiveKit.',
  },
]

const stacks = [
  {
    title: 'Hire a Scrapy developer',
    text: 'Production Scrapy projects: spiders, item pipelines, middlewares, AutoThrottle tuning, distributed crawls with scrapy-redis, and deployment to Scrapyd or a container scheduler. Used on crawls in the millions of pages per day range.',
    link: '/blog/scrapy-large-scale-scraping',
    linkText: 'Scrapy at scale guide',
  },
  {
    title: 'Hire a Playwright or Puppeteer developer',
    text: 'Browser automation for JavaScript-heavy sites, login flows, infinite scroll, and file downloads, including patched stealth builds (patchright, nodriver, Camoufox) for anti-bot targets. Also used for end-to-end testing and RPA work.',
    link: '/blog/playwright-vs-puppeteer-vs-selenium',
    linkText: 'Playwright vs Puppeteer vs Selenium',
  },
  {
    title: 'Hire a BeautifulSoup or requests developer',
    text: 'Fast, cheap HTML parsing pipelines with BeautifulSoup, lxml, selectolax, and httpx or curl_cffi for TLS impersonation. The right choice whenever a headless browser is overkill, which is more often than most people assume.',
    link: '/blog/reverse-engineering-private-apis',
    linkText: 'Skipping HTML with private APIs',
  },
  {
    title: 'Hire a Selenium developer',
    text: 'Legacy Selenium suites maintained, debugged, or migrated to Playwright when the maintenance cost stops making sense. Grid setups, undetected-chromedriver replacements, and CI integration included.',
    link: '/blog/playwright-vs-puppeteer-vs-selenium',
    linkText: 'When to migrate off Selenium',
  },
  {
    title: 'Hire a WebSocket and realtime developer',
    text: 'WebSocket and Socket.IO clients for realtime feeds: trading data, live odds, chat, and order books. Includes reconnection, backpressure, and message replay logic, plus reverse engineering of undocumented socket protocols.',
    link: '/blog/reverse-engineering-private-apis',
    linkText: 'Reverse engineering private APIs',
  },
  {
    title: 'Hire an anti-bot bypass specialist',
    text: 'Cloudflare, DataDome, PerimeterX, Akamai, and Turnstile. TLS and HTTP/2 fingerprinting, residential proxy rotation, clearance cookie reuse, CAPTCHA solvers, and block-rate monitoring so failures surface before your data does.',
    link: '/blog/bypass-cloudflare-web-scraping',
    linkText: 'Cloudflare bypass guide',
  },
]

const rates = [
  { label: 'Hourly rate', freelancer: '$30 - $80 / hour for senior scraping specialists', company: '$100 - $250 / hour blended agency rate' },
  { label: 'One-off extraction, one site', freelancer: '$100 - $600 fixed', company: '$1,500 - $5,000 minimum engagement' },
  { label: 'Recurring pipeline, monthly', freelancer: '$200 - $1,000 / month', company: '$1,000 - $5,000+ / month' },
  { label: 'First data sample', freelancer: '2 - 3 days, usually free', company: '2 - 4 weeks after onboarding' },
  { label: 'Contract minimums', freelancer: 'None', company: 'Often 3 - 12 months' },
]

const hireOptions = [
  {
    title: '1. Hire through Upwork',
    text: 'Hourly or fixed price with escrow protection, verified work history, and a public 5.0 rated track record. The safest option for a first project together.',
  },
  {
    title: '2. Direct project contract',
    text: 'Describe your project through the contact form and get a fixed scope and quote within 24 hours, with a free sample from your target sites before you commit.',
  },
  {
    title: '3. Managed data pipeline',
    text: 'A monthly arrangement where I run, monitor, and maintain your scrapers and you simply receive fresh data. Covered in detail on the web scraping service page.',
  },
]

const vetting = [
  {
    title: 'Ask for a sample from your target sites',
    text: 'Not a portfolio screenshot. A real extraction from the actual websites you need proves the developer can handle their specific protection and structure. I provide this free for most projects.',
  },
  {
    title: 'Check verified, platform-escrowed history',
    text: 'An Upwork or similar profile shows hours worked, client reviews, and success rate that cannot be faked. Look for consistent scraping projects, not one lucky review.',
  },
  {
    title: 'Probe anti-bot experience with specifics',
    text: 'Ask how they would approach a Cloudflare or DataDome protected target. A specialist talks about TLS fingerprints, residential proxies, and session management, not just "I use Selenium".',
  },
  {
    title: 'Agree on data quality up front',
    text: 'Field completeness, deduplication, validation rules, and what happens when the site changes. Vague deliverables are how scraping projects go wrong.',
  },
  {
    title: 'Confirm maintenance and response time',
    text: 'Scrapers break when sites redesign. Ask what a fix costs and how fast it ships. My standard is a response within 24 hours and most fixes shipped the same day.',
  },
]

const faqs = [
  {
    question: 'How much does it cost to hire a web scraping developer?',
    answer: 'Senior freelance web scraping developers typically charge $30 to $80 per hour in 2026, or fixed prices of $100 to $600 for a single-site extraction and $200 to $1,000+ per month for recurring pipelines. Web scraping companies charge 2 to 5 times more for the same deliverable because their price includes sales, account management, and agency margin. I quote every project as a fixed price within 24 hours.',
  },
  {
    question: 'Should I hire a freelance developer or a web scraping company?',
    answer: 'For projects under roughly $10,000, a senior freelancer is usually 40 to 70% cheaper and several weeks faster, because you work directly with the person writing the code. A company makes sense when you need 24/7 SLAs, compliance paperwork, or a vendor of record for procurement. Most price monitoring, lead generation, and data pipeline projects fit the freelancer model.',
  },
  {
    question: 'Can I hire you for full-stack development, not just scraping?',
    answer: 'Yes. Around a third of my work is full-stack: dashboards and SaaS applications built on Nuxt, Vue, React, FastAPI, and Node.js, often on top of scraped data. Hiring one developer for the scraper and the application removes an integration handoff and keeps accountability in one place.',
  },
  {
    question: 'How quickly can you start, and how fast is the first delivery?',
    answer: 'I respond to every inquiry within 24 hours with a scope and fixed quote, and most projects start within a few days. For a typical site you will see a real data sample within 2 to 3 days of agreeing on scope, and simple single-site extractions are often fully delivered within a week.',
  },
  {
    question: 'How do I choose a web scraping freelancer?',
    answer: 'Judge four things in order: a free sample extracted from your actual target sites, verified escrowed work history rather than a portfolio page, specific answers about anti-bot handling such as TLS fingerprints and residential proxies rather than "I use Selenium", and a written agreement on data quality and maintenance. Price should be the last filter, not the first. The five-point checklist above is the one I would use to vet me.',
  },
  {
    question: 'Where can I find and hire professional web scraping developers online?',
    answer: 'Upwork is the best default for most businesses: escrow protection, verified hours, and public reviews make vetting practical, and rates run $30 to $80 per hour for senior specialists. Toptal and Arc pre-vet candidates but add a 40 to 100% markup. Agencies like Zyte, Bright Data, and Oxylabs are the right call only when you need SLAs and procurement paperwork. GitHub and technical communities work if you can evaluate code yourself. You can hire me through my Upwork profile, where I hold a Top Rated Plus badge with a 5.0 rating across 7,200+ hours, or through a direct contract from this site.',
  },
  {
    question: 'Can I hire you for a Scrapy, Playwright, or BeautifulSoup project specifically?',
    answer: 'Yes. I take stack-specific engagements: Scrapy spiders and distributed crawls, Playwright and Puppeteer browser automation including patched stealth builds, BeautifulSoup and lxml parsing pipelines, Selenium maintenance or migration, and WebSocket clients for realtime feeds. If you already have a codebase, I can take over and maintain it rather than rewriting from scratch.',
  },
  {
    question: 'What do you need from me to give a quote?',
    answer: 'Three things: the target websites, the data fields you need, and roughly how much and how often. From that I return a fixed scope, price, and timeline within 24 hours. You do not need technical specifications; describing the business outcome is enough.',
  },
]

useSeoMeta({
  title: 'Hire a Web Scraping Developer | Top Rated Plus on Upwork',
  description: 'Hire a web scraping developer with a 5.0 rating and 7,200+ hours on Upwork. Custom scrapers, anti-bot bypass, free sample, fixed quote in 24 hours.',
  ogType: 'website',
  ogUrl: pageUrl,
  ogTitle: 'Hire a Web Scraping Developer | Top Rated Plus on Upwork',
  ogDescription: 'Hire a web scraping developer with a 5.0 rating and 7,200+ hours on Upwork. Custom scrapers, anti-bot bypass, and full-stack data pipelines.',
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
            name: 'Freelance Web Scraping Developer for Hire',
            serviceType: 'Web Scraping Development',
            description: 'Hire a Top Rated Plus freelance web scraping developer: custom scrapers, anti-bot bypass, data pipelines, and full-stack development. 5.0 rating and 7,200+ hours on Upwork.',
            provider: { '@id': `${siteUrl}/#person` },
            areaServed: 'Worldwide',
            url: pageUrl,
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '100',
              description: 'Fixed-price projects from $100. Recurring managed pipelines from $200 per month. Fixed quote within 24 hours, free data sample for most projects.',
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${pageUrl}#webpage`,
            url: pageUrl,
            name: 'Hire a Web Scraping Developer | Top Rated Plus on Upwork',
            description: 'Hire a web scraping developer with a 5.0 rating and 7,200+ hours on Upwork. Custom scrapers, anti-bot bypass, and full-stack data pipelines.',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#person` },
            inLanguage: 'en-US',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'Hire a Web Scraping Developer', item: pageUrl },
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
