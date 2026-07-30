<template>
  <main id="main-content">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 hero-gradient grid-pattern overflow-hidden" aria-label="Web scraping service">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" aria-hidden="true" />
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="badge mx-auto mb-6">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          Available for new projects
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Website Scraping Service,
          <span class="gradient-text block">Built Custom for Your Business</span>
        </h1>
        <p class="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mt-8">
          A <strong class="text-slate-700">custom web scraping</strong> and
          <strong class="text-slate-700">web data extraction service</strong> delivered by one senior
          freelance developer. You describe the websites and the data you need, I build and run the
          scrapers, you receive clean structured data. No SaaS tool to learn, no agency overhead.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="#contact" class="btn-primary">Get a Free Quote in 24 Hours</a>
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline"
          >
            Hire Me on Upwork
          </a>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-slate-500">
          <span><strong class="text-slate-700">5.0</strong> rating on Upwork</span>
          <span>Top Rated freelancer</span>
          <span>6,300+ hours worked</span>
          <span>50+ projects delivered</span>
        </div>
      </div>
    </section>

    <!-- What you get -->
    <section class="py-24 bg-white" aria-label="What is included">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">Done For You</div>
          <h2 class="section-title">
            What a Custom Web Scraping
            <span class="gradient-text"> Service Includes</span>
          </h2>
          <p class="section-subtitle mx-auto text-center">
            Everything from the first request to ongoing delivery is handled for you.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in deliverables" :key="item.title" class="card">
            <h3 class="font-semibold text-slate-900 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use cases -->
    <section class="py-24 bg-slate-50" aria-label="Use cases">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">Use Cases</div>
          <h2 class="section-title">
            Web Data Extraction for
            <span class="gradient-text"> Every Industry</span>
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="uc in useCases" :key="uc.title" class="card">
            <h3 class="font-semibold text-slate-900 mb-2">{{ uc.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed">{{ uc.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Freelancer vs company -->
    <section class="py-24 bg-white" aria-label="Freelance developer versus web scraping company">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">Why a Freelancer</div>
          <h2 class="section-title">
            Freelance Developer vs
            <span class="gradient-text"> Web Scraping Company</span>
          </h2>
          <p class="section-subtitle mx-auto text-center">
            A web scraping company puts an account manager between you and the person writing the code.
            <NuxtLink to="/hire-web-scraping-developer" class="text-primary-600 hover:underline">Hiring a freelance developer</NuxtLink> removes that layer.
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-slate-200 text-left">
                <th class="py-3 pr-4 font-semibold text-slate-900">&nbsp;</th>
                <th class="py-3 pr-4 font-semibold text-primary-700">Freelance developer (me)</th>
                <th class="py-3 font-semibold text-slate-500">Typical web scraping company</th>
              </tr>
            </thead>
            <tbody class="text-slate-600">
              <tr v-for="row in comparison" :key="row.label" class="border-b border-slate-100 align-top">
                <td class="py-3 pr-4 font-medium text-slate-900">{{ row.label }}</td>
                <td class="py-3 pr-4">{{ row.freelancer }}</td>
                <td class="py-3 text-slate-500">{{ row.company }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-24 bg-slate-50" aria-label="How the service works">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">Process</div>
          <h2 class="section-title">
            How the Scraping Service
            <span class="gradient-text"> Works</span>
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, i) in steps" :key="step.title" class="card">
            <div class="w-9 h-9 rounded-xl bg-primary-50 text-primary-700 font-bold flex items-center justify-center mb-4">{{ i + 1 }}</div>
            <h3 class="font-semibold text-slate-900 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-white" aria-label="Service FAQ">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge mx-auto mb-4">FAQ</div>
          <h2 class="section-title">
            Web Scraping Service
            <span class="gradient-text"> Questions</span>
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
const pageUrl = `${siteUrl}/web-scraping-service`

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
  description: 'Custom website scraping service by a Top Rated freelance developer. Web data extraction delivered as CSV, JSON, database, or API. Free sample, fixed quote in 24 hours, anti-bot bypass included.',
  ogType: 'website',
  ogUrl: pageUrl,
  ogTitle: 'Website Scraping Service | Custom Web Scraping & Data Extraction',
  ogDescription: 'Custom website scraping service by a Top Rated freelance developer. Clean web data extraction as CSV, JSON, database, or API. Free sample and fixed quote in 24 hours.',
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
            description: 'Custom website scraping service by a Top Rated freelance developer. Web data extraction delivered as CSV, JSON, database, or API.',
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
