<template>
  <div>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-sm focus:py-2xs focus:bg-accent focus:text-accent-ink focus:rounded-sm focus:font-medium"
    >
      Skip to main content
    </a>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Global SEO meta tags
useSeoMeta({
  title: 'Custom Web Scraping Service & Web Data Extraction',
  titleTemplate: '%s | Vuong Phan',
  description: 'Custom web scraping service by a Top Rated Plus freelance developer. Website scraping, web data extraction, and automation delivered as clean CSV, JSON, or API. Faster and more affordable than a web scraping company. 5.0 ★ on Upwork.',
  keywords: 'custom web scraping, custom web scraping service, website scraping service, web scraping service, web scraping company, web data extraction, web data extraction service, data extraction service, data extraction company, web scraping freelancer, freelance web scraping developer, hire web scraping developer, developer to scrape website, web scraping gig, outsource web scraping, managed scraping service, scraping as a service, done for you web scraping, web scraper, web scraping, data scraping, scraping service, scraper developer, web crawler, web crawling, data harvesting, data extraction, data extraction service, hire web scraper, hire scraper, Python scraping, Python scraper, Python developer, Python automation, web automation, browser automation, headless browser, JavaScript rendering, stealth scraping, scraping bot, scraping expert, scraping API, scraping freelancer, e-commerce scraper, price scraper, price monitoring, lead scraper, lead generation, Amazon scraper, extract data from website, web data extraction, automated data collection, data collection service, data mining, Playwright, Puppeteer, Scrapy, Selenium, BeautifulSoup, aiohttp, anti-bot bypass, CAPTCHA bypass, CAPTCHA solving, Cloudflare bypass, fingerprint spoofing, proxy management, residential proxy, rotating proxy, API integration, REST API, GraphQL, API reverse engineering, unofficial API, WebSocket, full-stack developer, full stack web developer, Vue.js, NuxtJS, React, FastAPI, Node.js, PostgreSQL, MongoDB, Docker, AWS, data pipeline, automation engineer, automation developer, AI integration, LLM integration, OpenAI, GPT, Claude API, document parsing, OCR, PDF extraction, invoice processing, voice AI, voice assistant, LiveKit, Dialogflow, Voximplant, WebRTC, IVR, chatbot, conversational AI, freelance developer, freelance Python developer, remote developer, Upwork freelancer, Senior Web Scraping Expert, Data Pipeline Engineer, data pipeline development, ETL pipeline, ELT pipeline, scalable data pipeline, big data pipeline, data engineering, bypass Cloudflare 403 error, Cloudflare 403 bypass, data extraction from dynamic JavaScript sites, dynamic website scraping, JavaScript heavy site scraping, scale web scrapers with Playwright, scale web scrapers with Scrapy, large-scale web scraping, distributed scraping, high volume scraping',
  author: 'Phan Vuong',
  robots: 'index, follow',

  // Open Graph
  ogType: 'website',
  ogUrl: 'https://www.vuongphan.dev/',
  ogTitle: 'Custom Web Scraping Service & Web Data Extraction',
  ogDescription: 'Custom web scraping service by a Top Rated Plus freelance developer. Website scraping, web data extraction, and automation delivered as clean CSV, JSON, or API. 5.0 ★ on Upwork.',
  ogImage: 'https://www.vuongphan.dev/og-image.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogSiteName: 'Vuong Phan',
  ogLocale: 'en_US',

  // Twitter / X Card
  twitterImage: 'https://www.vuongphan.dev/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Custom Web Scraping Service & Web Data Extraction',
  twitterDescription: 'Custom web scraping and data extraction service by a Top Rated Plus freelance developer. Clean data as CSV, JSON, or API. 5.0 ★ on Upwork.',
  twitterCreator: '@phanvuong2',
})

// Canonical + lang
useHead({
  link: [
    { rel: 'canonical', href: 'https://www.vuongphan.dev/' },
    { rel: 'alternate', type: 'application/rss+xml', title: 'Vuong Phan Blog', href: 'https://www.vuongphan.dev/rss.xml' },
  ],
})
</script>
