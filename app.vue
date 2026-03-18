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
  description: 'Expert web scraping engineer & full-stack developer. Data extraction, anti-bot bypass, API integration, voice AI with LiveKit, and scalable automation systems.',
  keywords: 'web scraping, data extraction, automation, anti-bot bypass, API integration, full-stack developer, Python scraping, Playwright, Puppeteer, voice AI, LiveKit, freelancer',
  author: 'Phan Vuong',
  robots: 'index, follow',

  // Open Graph
  ogType: 'website',
  ogUrl: 'https://vuongphan.dev',
  ogTitle: 'Web Scraping & Automation Expert | Full-Stack Developer',
  ogDescription: 'Expert web scraping engineer & full-stack developer. Data extraction, anti-bot bypass, API integration, voice AI with LiveKit, and scalable automation systems.',
  ogSiteName: 'Vuong Phan',
  ogLocale: 'en_US',

  // Twitter / X Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Web Scraping & Automation Expert | Full-Stack Developer',
  twitterDescription: 'Expert web scraping engineer. Data extraction, anti-bot bypass, API integration, voice AI with LiveKit.',
  twitterCreator: '@phanvuong2',
})

// Canonical + lang
useHead({
  link: [
    { rel: 'canonical', href: 'https://vuongphan.dev' },
  ],
})
</script>
