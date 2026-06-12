// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.vuongphan.dev',
    name: 'Vuong Phan',
  },

  sitemap: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.vuongphan.dev',
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
    },
  },
})
