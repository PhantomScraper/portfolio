<template>
  <!-- Hallmark · Split Studio row set. Each service is a diptych: index and
       title in the narrow half, detail and tags in the wide one. Replaces a
       uniform six-up card grid. Row direction is fixed, not alternating: the
       zigzag broke the index column and read as a bug, not a rhythm. -->
  <section id="services" class="band" aria-label="Services">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">01 / Services</p>
        <div>
          <h2 class="section-head__title">Python Web Scraping &amp; Automation Services</h2>
          <p class="section-head__lede">
            From scraping millions of records and bypassing anti-bot protection to building full-stack
            apps and voice AI. Scalable, reliable solutions for any data challenge.
          </p>
        </div>
      </div>

      <ol class="rows">
        <li v-for="(service, i) in services" :key="service.title" class="row">
          <div class="row__lead">
            <span class="row__index tnum">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="row__title">{{ service.title }}</h3>
          </div>
          <div class="row__body">
            <p class="row__text">{{ service.description }}</p>
            <ul class="row__tags">
              <li v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Web Scraping & Data Extraction',
    description: 'Custom web scraper and data scraping solutions for any website at scale. Extract e-commerce product listings, price monitoring data, competitor intelligence, lead lists, real estate records, and job board data. Handles JS-rendered pages, login-protected sites, infinite scroll, and pagination. Outputs to CSV, JSON, Excel, or directly into your database.',
    tags: ['Python', 'Scrapy', 'Puppeteer', 'Selenium', 'Price Monitoring', 'Lead Scraping', 'E-commerce Scraping', 'Data Harvesting'],
  },
  {
    title: 'Anti-Bot Bypass & Stealth',
    description: 'Navigate Cloudflare, Akamai, DataDome, PerimeterX, and CAPTCHA systems with fingerprint spoofing, residential proxies, and headless browser stealth. Reliable, uninterrupted data access even on the most aggressively protected websites.',
    tags: ['CAPTCHA Solving', 'Fingerprint Spoofing', 'Residential Proxy', 'Rotating Proxy', '2Captcha'],
  },
  {
    title: 'API Integration & Reverse Engineering',
    description: 'Integrate third-party APIs and reverse-engineer unofficial or undocumented APIs for seamless data exchange. Build invoice pipelines, order tracking systems, and automated data sync across platforms: REST, GraphQL, WebSocket, any protocol.',
    tags: ['REST API', 'GraphQL', 'WebSocket', 'OAuth', 'Webhook', 'API Scraping'],
  },
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications: SaaS dashboards, admin panels, REST APIs, internal tools, and customer-facing products. Responsive frontends, robust backends, database design, and cloud deployment on AWS or Vercel.',
    tags: ['NuxtJS', 'Vue.js', 'React', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    title: 'AI & Document Intelligence',
    description: 'Parse PDFs, invoices, receipts, contracts, and scanned documents into structured data using OCR and LLMs. Automate document workflows, extract tables from reports, and feed unstructured data into your business systems or databases.',
    tags: ['PDF Parsing', 'OCR', 'Invoice Processing', 'OpenAI', 'GPT-4', 'Claude API', 'LangChain', 'RAG'],
  },
  {
    title: 'Voice AI & Conversational Bots',
    description: 'Build real-time voice AI assistants, IVR systems, and conversational bots using LiveKit, Dialogflow, and Voximplant. Automate inbound/outbound calls, appointment booking, lead qualification, and customer support with OpenAI, Gemini, and Grok.',
    tags: ['LiveKit', 'Dialogflow', 'Voximplant', 'WebRTC', 'TTS/STT', 'IVR', 'Chatbot'],
  },
]
</script>

<style scoped>
.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

.row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-sm);
  padding-block: var(--space-lg);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 900px) {
  .row {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: var(--space-2xl);
    align-items: start;
  }

}

.row__lead {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
}

.row__index {
  font-family: var(--font-outlier);
  font-size: var(--text-sm);
  color: var(--color-accent);
  flex: none;
}

.row__title {
  font-size: var(--text-md);
  line-height: 1.2;
}

@media (min-width: 768px) {
  .row__title {
    font-size: var(--text-lg);
  }
}

.row__text {
  color: var(--color-muted);
  max-width: 62ch;
}

.row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3xs);
  list-style: none;
  margin: var(--space-sm) 0 0;
  padding: 0;
}
</style>
