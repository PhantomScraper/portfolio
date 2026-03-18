<template>
  <section
    id="services"
    class="py-24 bg-slate-50"
    aria-label="Services"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="badge mx-auto mb-4">What I Do</div>
        <h2 class="section-title">
          Python Web Scraping &
          <span class="gradient-text"> Automation Services</span>
        </h2>
        <p class="section-subtitle mx-auto text-center">
          From scraping millions of records and bypassing anti-bot protection to building full-stack
          apps and voice AI, scalable, reliable solutions for any data challenge.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="service in services"
          :key="service.title"
          class="card group cursor-default"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <component :is="service.icon" class="w-6 h-6" :class="service.iconColor" aria-hidden="true" />
          </div>

          <!-- Content -->
          <h3 class="text-lg font-bold text-slate-900 mb-2">{{ service.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ service.description }}</p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600 font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// Inline SVG icon components
const IconScraping = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' }),
  ]),
})
const IconShield = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }),
  ]),
})
const IconApi = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }),
  ]),
})
const IconCode = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' }),
  ]),
})
const IconAI = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }),
  ]),
})
const IconMic = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' }),
  ]),
})

const services = [
  {
    title: 'Web Scraping & Data Extraction',
    description: 'Extract structured data from any website at scale, e-commerce product listings, price monitoring, competitor data, lead generation, real estate, and job boards. Handles dynamic JS pages, login-protected sites, and pagination. Exports to CSV, JSON, Excel, or directly into your database.',
    icon: IconScraping,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    tags: ['Python', 'Playwright', 'Scrapy', 'Puppeteer', 'Selenium', 'BeautifulSoup', 'aiohttp'],
  },
  {
    title: 'Anti-Bot Bypass & Stealth',
    description: 'Navigate Cloudflare, Akamai, DataDome, PerimeterX, and CAPTCHA systems with fingerprint spoofing, residential proxies, and headless browser stealth. Reliable, uninterrupted data access even on the most aggressively protected websites.',
    icon: IconShield,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    tags: ['CAPTCHA Solving', 'Fingerprint Spoofing', 'Residential Proxy', 'Rotating Proxy', '2Captcha'],
  },
  {
    title: 'API Integration & Reverse Engineering',
    description: 'Integrate third-party APIs and reverse-engineer unofficial or undocumented APIs for seamless data exchange. Build invoice pipelines, order tracking systems, and automated data sync across platforms, REST, GraphQL, WebSocket, any protocol.',
    icon: IconApi,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    tags: ['REST API', 'GraphQL', 'WebSocket', 'OAuth', 'Webhook', 'API Scraping'],
  },
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application, SaaS dashboards, admin panels, REST APIs, internal tools, and customer-facing products. Responsive frontends, robust backends, database design, and cloud deployment on AWS or Vercel.',
    icon: IconCode,
    iconBg: 'bg-primary-50',
    iconColor: 'text-primary-600',
    tags: ['NuxtJS', 'Vue.js', 'React', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    title: 'AI & Document Intelligence',
    description: 'Parse PDFs, invoices, receipts, contracts, and scanned documents into structured data using OCR and LLMs. Automate document workflows, extract tables from reports, and feed unstructured data into your business systems or databases.',
    icon: IconAI,
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    tags: ['PDF Parsing', 'OCR', 'Invoice Processing', 'OpenAI', 'GPT-4', 'Claude API', 'LangChain', 'RAG'],
  },
  {
    title: 'Voice AI & Conversational Bots',
    description: 'Build real-time voice AI assistants, IVR systems, and conversational bots using LiveKit, Dialogflow, and Voximplant. Automate inbound/outbound calls, appointment booking, lead qualification, and customer support with OpenAI, Gemini, and Grok.',
    icon: IconMic,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    tags: ['LiveKit', 'Dialogflow', 'Voximplant', 'WebRTC', 'TTS/STT', 'IVR', 'Chatbot'],
  },
]
</script>
