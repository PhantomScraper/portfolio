<template>
  <div>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:font-medium"
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
  title: 'Web Scraping & Automation Expert | Full-Stack Developer',
  titleTemplate: '%s | Vuong Phan',
  description: 'Hire a Python web scraping expert & full-stack developer. Data extraction, anti-bot bypass, API integration, voice AI systems, and automation pipelines. 5.0 ★ Top Rated on Upwork.',
  keywords: 'web scraper, web scraping, data scraping, scraping service, scraper developer, web crawler, web crawling, data harvesting, data extraction, data extraction service, hire web scraper, hire scraper, Python scraping, Python scraper, Python developer, Python automation, web automation, browser automation, headless browser, JavaScript rendering, stealth scraping, scraping bot, scraping expert, scraping API, scraping freelancer, e-commerce scraper, price scraper, price monitoring, lead scraper, lead generation, Amazon scraper, extract data from website, web data extraction, automated data collection, data collection service, data mining, Playwright, Puppeteer, Scrapy, Selenium, BeautifulSoup, aiohttp, anti-bot bypass, CAPTCHA bypass, CAPTCHA solving, Cloudflare bypass, fingerprint spoofing, proxy management, residential proxy, rotating proxy, API integration, REST API, GraphQL, API reverse engineering, unofficial API, WebSocket, full-stack developer, full stack web developer, Vue.js, NuxtJS, React, FastAPI, Node.js, PostgreSQL, MongoDB, Docker, AWS, data pipeline, automation engineer, automation developer, AI integration, LLM integration, OpenAI, GPT, Claude API, document parsing, OCR, PDF extraction, invoice processing, voice AI, voice assistant, LiveKit, Dialogflow, Voximplant, WebRTC, IVR, chatbot, conversational AI, freelance developer, freelance Python developer, remote developer, Upwork freelancer',
  author: 'Phan Vuong',
  robots: 'index, follow',

  // Open Graph
  ogType: 'website',
  ogUrl: 'https://vuongphan.dev',
  ogTitle: 'Web Scraping & Automation Expert | Full-Stack Developer',
  ogDescription: 'Hire a Python web scraping expert & full-stack developer. Data extraction, anti-bot bypass, API integration, voice AI systems, and automation pipelines. 5.0 ★ Top Rated on Upwork.',
  ogImage: 'https://vuongphan.dev/og-image.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogSiteName: 'Vuong Phan',
  ogLocale: 'en_US',

  // Twitter / X Card
  twitterImage: 'https://vuongphan.dev/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Web Scraping & Automation Expert | Full-Stack Developer',
  twitterDescription: 'Python web scraping expert & full-stack developer. Data extraction, anti-bot bypass, API integration, voice AI. 5.0 ★ Top Rated on Upwork.',
  twitterCreator: '@phanvuong2',
})

// Canonical + lang
useHead({
  link: [
    { rel: 'canonical', href: 'https://vuongphan.dev' },
  ],
})
</script>
