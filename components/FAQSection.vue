<template>
  <!-- Hallmark · disclosure list on hairlines. The chevron is replaced by a
       plus/minus rule pair so the section carries no rounded card boxes. -->
  <section id="faq" class="band" aria-label="Frequently asked questions">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">07 / FAQ</p>
        <div>
          <h2 class="section-head__title">Frequently Asked Questions</h2>
          <p class="section-head__lede">
            Common questions about web scraping, automation, and how to work with me.
          </p>
        </div>
      </div>

      <div class="faq">
        <details v-for="faq in faqs" :key="faq.question" class="faq__item">
          <summary class="faq__q">
            <span>{{ faq.question }}</span>
            <span class="faq__mark" aria-hidden="true" />
          </summary>
          <p class="faq__a">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keep in sync with the FAQPage JSON-LD in pages/index.vue
const faqs = [
  {
    question: 'Do you offer a custom web scraping service for businesses?',
    answer: 'Yes. This is a done-for-you website scraping service: you describe the sites and the data you need, and I build and run custom scrapers that deliver clean, structured data to you as CSV, JSON, Excel, a database, or an API. Unlike a web scraping company, you work directly with the developer writing the code, which means faster turnaround and lower cost. See the Web Scraping Service page for details, pricing, and a free sample offer.',
  },
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
    question: 'How much does it cost to hire you for a web scraping or automation project?',
    answer: 'Most one-off web scraping projects cost between $100 and $500, and recurring pipelines with scheduling and monitoring typically run from $200 to $1,000+ per month depending on volume and anti-bot difficulty. Larger automation and full-stack builds are quoted as fixed-price projects, and hourly engagements through Upwork are available for ongoing maintenance and consulting. Every project starts with a free scoping call and a fixed quote within 24 hours, so there are no surprise hours.',
  },
  {
    question: 'What timezones do you work in and how do we communicate?',
    answer: 'I work with clients across the US, Europe, and Asia and schedule calls to overlap with US (EST and PST) and European business hours. Day-to-day collaboration is asynchronous with regular written updates, and I communicate fluently in English over Slack, Microsoft Teams, Jira, or email, whichever your team already uses.',
  },
  {
    question: 'How do I hire you for a web scraping or automation project?',
    answer: 'You can hire me directly through my Upwork profile at upwork.com/freelancers/phanvuong2, or send a message via the contact form on this page. I respond within 24 hours with a detailed project scope and quote. I am a Top Rated Plus freelancer with 7,200+ hours and a 5.0 rating on Upwork.',
  },
]
</script>

<style scoped>
.faq {
  border-top: 1px solid var(--color-rule);
  max-width: 72ch;
}

.faq__item {
  border-bottom: 1px solid var(--color-rule);
}

.faq__q {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-md);
  padding-block: var(--space-md);
  cursor: pointer;
  list-style: none;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: -0.02em;
  line-height: 1.35;
  color: var(--color-ink);
  transition: color var(--dur-short) var(--ease-out);
}

.faq__q::-webkit-details-marker {
  display: none;
}

.faq__q:hover {
  color: var(--color-accent);
}

/* A drawn plus that becomes a minus. Two rules, no icon font, no rotation. */
.faq__mark {
  position: relative;
  flex: none;
  width: 0.75rem;
  height: 0.75rem;
  margin-top: 0.3rem;
}

.faq__mark::before,
.faq__mark::after {
  content: "";
  position: absolute;
  inset: 50% 0 auto 0;
  height: 1px;
  background: var(--color-neutral);
}

.faq__mark::after {
  transform: rotate(90deg);
  transition: opacity var(--dur-short) var(--ease-out);
}

.faq__item[open] .faq__mark::after {
  opacity: 0;
}

.faq__a {
  padding-bottom: var(--space-md);
  color: var(--color-muted);
  max-width: 68ch;
}
</style>
