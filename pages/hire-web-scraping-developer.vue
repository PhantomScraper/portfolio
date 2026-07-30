<template>
  <main id="main-content">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 hero-gradient grid-pattern overflow-hidden" aria-label="Hire a web scraping developer">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" aria-hidden="true" />
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="badge mx-auto mb-6">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          Available for new projects
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Hire a Web Scraping Developer
          <span class="gradient-text block">Who Ships Clean, Reliable Data</span>
        </h1>
        <p class="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mt-8">
          Skip the agency markup and the hiring lottery. I am a
          <strong class="text-slate-700">Top Rated freelance web scraping developer</strong> with a
          <strong class="text-slate-700">5.0 rating and 6,300+ hours on Upwork</strong>. You get the
          person who writes the code, a fixed quote in 24 hours, and a free data sample before you commit.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            Hire Me on Upwork
          </a>
          <a href="#contact" class="btn-outline">Get a Free Quote in 24 Hours</a>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-slate-500">
          <span><strong class="text-slate-700">5.0</strong> rating on Upwork</span>
          <span>Top Rated freelancer</span>
          <span>6,300+ hours worked</span>
          <span>50+ projects delivered</span>
        </div>
      </div>
    </section>

    <!-- What you can hire me for -->
    <section class="py-24 bg-white" aria-label="Skills you can hire">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">Skills</div>
          <h2 class="section-title">
            What You Can
            <span class="gradient-text"> Hire Me For</span>
          </h2>
          <p class="section-subtitle mx-auto text-center">
            Web scraping is the specialty, but most clients hire me for the full pipeline:
            extraction, automation, and the application on top of the data.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="skill in skills" :key="skill.title" class="card">
            <h3 class="font-semibold text-slate-900 mb-2">{{ skill.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed">{{ skill.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rates -->
    <section class="py-24 bg-slate-50" aria-label="Web scraping developer rates">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">Rates</div>
          <h2 class="section-title">
            What It Costs to Hire a
            <span class="gradient-text"> Web Scraping Developer</span>
          </h2>
          <p class="section-subtitle mx-auto text-center">
            Market ranges for 2026, so you can sanity-check any quote, including mine.
            Every project I take gets a fixed price up front.
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-slate-200 text-left">
                <th class="py-3 pr-4 font-semibold text-slate-900">Engagement</th>
                <th class="py-3 pr-4 font-semibold text-primary-700">Senior freelancer</th>
                <th class="py-3 font-semibold text-slate-500">Web scraping company</th>
              </tr>
            </thead>
            <tbody class="text-slate-600">
              <tr v-for="row in rates" :key="row.label" class="border-b border-slate-100 align-top">
                <td class="py-3 pr-4 font-medium text-slate-900">{{ row.label }}</td>
                <td class="py-3 pr-4">{{ row.freelancer }}</td>
                <td class="py-3 text-slate-500">{{ row.company }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-500 mt-6 text-center">
          Full breakdown in
          <NuxtLink to="/blog/web-scraping-company-vs-freelancer" class="text-primary-600 hover:underline">
            Web Scraping Company vs Freelance Developer</NuxtLink>.
        </p>
      </div>
    </section>

    <!-- How to hire -->
    <section class="py-24 bg-white" aria-label="Ways to hire">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">How It Works</div>
          <h2 class="section-title">
            Three Ways to
            <span class="gradient-text"> Work Together</span>
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="opt in hireOptions" :key="opt.title" class="card">
            <h3 class="font-semibold text-slate-900 mb-2">{{ opt.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed">{{ opt.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vetting checklist -->
    <section class="py-24 bg-slate-50" aria-label="How to vet a web scraping developer">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">Vetting Checklist</div>
          <h2 class="section-title">
            How to Vet Any Web Scraping Developer
            <span class="gradient-text"> Before You Hire</span>
          </h2>
          <p class="section-subtitle mx-auto text-center">
            Use this checklist on every candidate, including me. A serious developer
            passes all five without hesitation.
          </p>
        </div>
        <div class="space-y-4">
          <div v-for="(check, i) in vetting" :key="check.title" class="card flex gap-4">
            <div class="w-9 h-9 rounded-xl bg-primary-50 text-primary-700 font-bold flex items-center justify-center flex-shrink-0">{{ i + 1 }}</div>
            <div>
              <h3 class="font-semibold text-slate-900 mb-1">{{ check.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ check.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-white" aria-label="Hiring FAQ">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">FAQ</div>
          <h2 class="section-title">
            Questions About
            <span class="gradient-text"> Hiring</span>
          </h2>
        </div>
        <div class="space-y-4">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group card !p-0 overflow-hidden hover:border-primary-200 transition-colors"
          >
            <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              {{ faq.question }}
              <svg class="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p class="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
              {{ faq.answer }}
            </p>
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
    question: 'Where is the best place to hire a web scraping developer?',
    answer: 'Upwork is the most reliable place for most businesses: escrow payment protection, verified work history, and public client reviews make vetting far easier than cold-contacting agencies or hiring from job boards. You can hire me directly through my Upwork profile, where I hold a Top Rated badge with a 5.0 rating across 6,300+ hours, or contact me through this site for a direct contract.',
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
    question: 'What do you need from me to give a quote?',
    answer: 'Three things: the target websites, the data fields you need, and roughly how much and how often. From that I return a fixed scope, price, and timeline within 24 hours. You do not need technical specifications; describing the business outcome is enough.',
  },
]

useSeoMeta({
  title: 'Hire a Web Scraping Developer | Top Rated Upwork Freelancer',
  description: 'Hire a web scraping developer with a 5.0 rating and 6,300+ hours on Upwork. Custom scrapers, anti-bot bypass, and full-stack data pipelines. Free sample and fixed quote in 24 hours.',
  ogType: 'website',
  ogUrl: pageUrl,
  ogTitle: 'Hire a Web Scraping Developer | Top Rated Upwork Freelancer',
  ogDescription: 'Hire a web scraping developer with a 5.0 rating and 6,300+ hours on Upwork. Custom scrapers, anti-bot bypass, and full-stack data pipelines.',
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
            description: 'Hire a Top Rated freelance web scraping developer: custom scrapers, anti-bot bypass, data pipelines, and full-stack development. 5.0 rating and 6,300+ hours on Upwork.',
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
            name: 'Hire a Web Scraping Developer | Top Rated Upwork Freelancer',
            description: 'Hire a web scraping developer with a 5.0 rating and 6,300+ hours on Upwork. Custom scrapers, anti-bot bypass, and full-stack data pipelines.',
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
