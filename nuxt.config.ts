// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt/content',
  ],

  // Hardcoded to www so Vercel's auto-detected apex URL
  // (VERCEL_PROJECT_PRODUCTION_URL = vuongphan.dev) cannot override it and
  // reintroduce the www/non-www canonical split.
  site: {
    url: 'https://www.vuongphan.dev',
    name: 'Vuong Phan',
  },

  sitemap: {
    siteUrl: 'https://www.vuongphan.dev',
    sources: ['/api/__sitemap__/urls'],
  },

  // @nuxt/content v3 queries a SQLite DB that does not run in Vercel's
  // serverless functions, so prerender all content routes at build time
  // (where better-sqlite3 works) and serve them as static files.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', '/rss.xml'],
      failOnError: false,
    },
  },

  // Posts Google declined to index, merged into stronger articles on
  // 2026-11-09. Permanent redirects keep old links and signals.
  routeRules: {
    '/blog/web-scraping-company-vs-freelancer': { redirect: { to: '/blog/best-web-scraping-freelancer-upwork', statusCode: 301 } },
    '/blog/scrape-amazon-product-data': { redirect: { to: '/blog/scaling-amazon-scraper-10-million-products-per-day', statusCode: 301 } },
    '/blog/scrapy-large-scale-scraping': { redirect: { to: '/blog/scaling-amazon-scraper-10-million-products-per-day', statusCode: 301 } },
    '/blog/scheduling-monitoring-scrapers-production': { redirect: { to: '/blog/scaling-amazon-scraper-10-million-products-per-day', statusCode: 301 } },
    '/blog/solving-captchas-2captcha-capsolver': { redirect: { to: '/blog/bypass-cloudflare-web-scraping', statusCode: 301 } },
    '/blog/no-code-scraping-automation-n8n': { redirect: { to: '/blog/sync-data-between-platforms', statusCode: 301 } },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // DNS prefetch for third-party services
        { rel: 'dns-prefetch', href: 'https://api.emailjs.com' },
        { rel: 'dns-prefetch', href: 'https://www.upwork.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        // Hallmark Cobalt stack (Space Grotesk display + Geist body + JetBrains
        // Mono outlier) is self-hosted, see @font-face in assets/css/main.css.
        // Preload all three latin files: every page's first screen uses them,
        // and an unpreloaded font starts at VeryHigh priority, which Lighthouse
        // then counts as render-blocking (measured: FCP 0.15-0.37s worse).
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/geist-latin.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/space-grotesk-latin.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/jetbrains-mono-latin.woff2', crossorigin: '' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.vuongphan.dev',
      // Google Ads conversion tracking. ID + labels hardcoded (public
      // client-side tag); env vars can still override per-environment.
      // TODO: add the Upwork-click conversion label once that action is created.
      gtag: {
        adsId: process.env.NUXT_PUBLIC_GTAG_ADS_ID || 'AW-18250162476',
        formLabel: process.env.NUXT_PUBLIC_GTAG_FORM_LABEL || 'xQ9ACIalp8EcEKzCrf5D',
        upworkLabel: process.env.NUXT_PUBLIC_GTAG_UPWORK_LABEL || '',
      },
    },
  },
})
