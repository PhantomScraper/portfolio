<template>
  <section
    id="faq"
    class="py-24 bg-white"
    aria-label="Frequently asked questions"
  >
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="badge mx-auto mb-4">FAQ</div>
        <h2 class="section-title">
          Frequently Asked
          <span class="gradient-text"> Questions</span>
        </h2>
        <p class="section-subtitle mx-auto text-center">
          Common questions about web scraping, automation, and how to work with me.
        </p>
      </div>

      <!-- FAQ list -->
      <div class="space-y-4">
        <details
          v-for="faq in faqs"
          :key="faq.question"
          class="group card !p-0 overflow-hidden hover:border-primary-200 transition-colors"
        >
          <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            {{ faq.question }}
            <svg
              class="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
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
</template>

<script setup lang="ts">
// Keep in sync with the FAQPage JSON-LD in pages/index.vue
const faqs = [
  {
    question: 'What web scraping services do you offer?',
    answer: 'I build custom web scrapers and data scraping pipelines using Python, Playwright, Scrapy, Puppeteer, and Selenium. Services include web crawling, data harvesting, e-commerce scraping, price monitoring, lead scraping, competitor data collection, real estate data, and job board extraction. Works on JS-rendered pages, login-protected sites, and sites with anti-bot protection. Data delivered in CSV, JSON, Excel, or directly into your database.',
  },
  {
    question: 'Can you bypass anti-bot protection like Cloudflare or CAPTCHA?',
    answer: 'Yes. I specialize in stealth browser automation with fingerprint spoofing, residential and rotating proxies, and CAPTCHA solving (2Captcha, CapSolver). I have experience working around Cloudflare, Akamai, DataDome, and similar bot detection systems to ensure reliable data access.',
  },
  {
    question: 'What full-stack development services do you provide?',
    answer: 'I build end-to-end web applications using NuxtJS, Vue.js, React, FastAPI, Node.js, PostgreSQL, and MongoDB. Services include SaaS dashboards, admin panels, REST APIs, data pipelines, and cloud deployment on AWS or Vercel. I handle everything from database design to frontend UI.',
  },
  {
    question: 'Do you build voice AI and chatbot systems?',
    answer: 'Yes. I build real-time voice AI assistants and IVR systems using LiveKit, Dialogflow, and Voximplant. These include automated inbound/outbound call handling, lead qualification bots, appointment booking, and customer support automation powered by OpenAI, Gemini, and Grok.',
  },
  {
    question: 'How do I hire you for a web scraping or automation project?',
    answer: 'You can hire me directly through my Upwork profile at upwork.com/freelancers/phanvuong2, or send a message via the contact form on this page. I respond within 24 hours with a detailed project scope and quote. I am a Top Rated freelancer with 6,300+ hours and a 5.0 rating on Upwork.',
  },
]
</script>
