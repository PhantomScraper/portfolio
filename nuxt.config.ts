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
        // Preconnect for fonts (LCP improvement)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.vuongphan.dev',
      // Google Ads conversion tracking. ID is hardcoded (it's a public
      // client-side tag); env vars can still override per-environment.
      // TODO: fill in the two conversion labels from each conversion action's
      // event snippet (the part after "AW-18250162476/") to start recording.
      gtag: {
        adsId: process.env.NUXT_PUBLIC_GTAG_ADS_ID || 'AW-18250162476',
        formLabel: process.env.NUXT_PUBLIC_GTAG_FORM_LABEL || '',
        upworkLabel: process.env.NUXT_PUBLIC_GTAG_UPWORK_LABEL || '',
      },
    },
  },
})
