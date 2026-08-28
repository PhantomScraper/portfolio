<template>
  <main id="main-content">
    <HeroSection />
    <ServicesSection />
    <WhyUsSection />
    <HowItWorks />
    <TechStack />
    <TestimonialsSection />
    <LatestArticles />
    <FAQSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
// JSON-LD structured data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': 'https://www.vuongphan.dev/#person',
            name: 'Phan Vuong',
            url: 'https://www.vuongphan.dev',
            jobTitle: 'Freelance Web Scraping Developer | Full-Stack Engineer',
            description: 'Freelance web scraping developer offering a custom web scraping service: website scraping, web data extraction, anti-bot bypass, API integration, voice AI with LiveKit, and scalable automation systems.',
            sameAs: [
              'https://www.upwork.com/freelancers/phanvuong2',
              'https://github.com/hienvuong2810',
            ],
            knowsAbout: [
              'Custom Web Scraping',
              'Website Scraping Service',
              'Web Data Extraction',
              'Data Extraction Service',
              'Web Scraping',
              'Web Scraper',
              'Data Scraping',
              'Web Crawler',
              'Web Crawling',
              'Data Extraction',
              'Data Harvesting',
              'Data Mining',
              'E-commerce Scraping',
              'Price Monitoring',
              'Lead Scraping',
              'Headless Browser',
              'Browser Automation',
              'Anti-Bot Bypass',
              'CAPTCHA Solving',
              'Proxy Management',
              'Fingerprint Spoofing',
              'API Integration',
              'REST API',
              'GraphQL',
              'API Reverse Engineering',
              'WebSocket',
              'Full-Stack Development',
              'Python',
              'Node.js',
              'FastAPI',
              'Vue.js',
              'NuxtJS',
              'React',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'AWS',
              'Playwright',
              'Puppeteer',
              'Scrapy',
              'Selenium',
              'BeautifulSoup',
              'Data Pipeline',
              'AI Integration',
              'LLM Integration',
              'OpenAI',
              'OCR',
              'Document Parsing',
              'PDF Extraction',
              'Invoice Processing',
              'Voice AI',
              'LiveKit',
              'Dialogflow',
              'Voximplant',
              'WebRTC',
              'IVR',
              'Chatbot',
              'LangChain',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': 'https://www.vuongphan.dev/#website',
            url: 'https://www.vuongphan.dev',
            name: 'Vuong Phan - Web Scraping & Automation Expert',
            description: 'Expert web scraping engineer & full-stack developer. Data extraction, anti-bot bypass, API integration, voice AI with LiveKit, and scalable automation systems.',
            author: { '@id': 'https://www.vuongphan.dev/#person' },
            inLanguage: 'en-US',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://www.vuongphan.dev/#person' },
            name: 'Custom Web Scraping Service & Web Data Extraction',
            description: 'Custom web scraping service and website scraping for businesses. Large-scale web crawling, data harvesting, e-commerce scraping, price monitoring, lead scraping, and multi-format data export (CSV, JSON, Excel, database).',
            serviceType: 'Web Scraping Service',
            url: 'https://www.vuongphan.dev/web-scraping-service',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://www.vuongphan.dev/#person' },
            name: 'Full-Stack Web Development',
            description: 'End-to-end web applications using NuxtJS, React, FastAPI, Node.js with cloud deployment.',
            serviceType: 'Web Development',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://www.vuongphan.dev/#person' },
            name: 'Anti-Bot Bypass & Stealth Automation',
            description: 'Bypass Cloudflare, CAPTCHA, and bot detection systems using fingerprint spoofing, residential proxies, and stealth browser techniques.',
            serviceType: 'Automation',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://www.vuongphan.dev/#person' },
            name: 'API Integration & Reverse Engineering',
            description: 'Integrate REST, GraphQL, and WebSocket APIs. Reverse-engineer unofficial or undocumented APIs for automated data exchange.',
            serviceType: 'API Development',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://www.vuongphan.dev/#person' },
            name: 'AI & Document Intelligence',
            description: 'Parse PDFs, invoices, and scanned documents using OCR and LLMs. Build AI-powered extraction pipelines with OpenAI, Claude API, and LangChain.',
            serviceType: 'AI Development',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://www.vuongphan.dev/#person' },
            name: 'Voice AI & Conversational Bots',
            description: 'Real-time voice assistants and IVR solutions using LiveKit, Dialogflow, and Voximplant. Automate calls with natural-sounding conversational AI.',
            serviceType: 'AI Development',
          },
          {
            '@type': 'WebPage',
            '@id': 'https://www.vuongphan.dev/#webpage',
            url: 'https://www.vuongphan.dev',
            name: 'Vuong Phan - Custom Web Scraping Service & Web Data Extraction',
            description: 'Custom web scraping service by a Top Rated Plus freelance developer. Website scraping, web data extraction, anti-bot bypass, API integration, and automation pipelines.',
            isPartOf: { '@id': 'https://www.vuongphan.dev/#website' },
            about: { '@id': 'https://www.vuongphan.dev/#person' },
            inLanguage: 'en-US',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.vuongphan.dev',
                },
              ],
            },
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you offer a custom web scraping service for businesses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. This is a done-for-you website scraping service: you describe the sites and the data you need, and I build and run custom scrapers that deliver clean, structured data to you as CSV, JSON, Excel, a database, or an API. Unlike a web scraping company, you work directly with the developer writing the code, which means faster turnaround and lower cost.',
            },
          },
          {
            '@type': 'Question',
            name: 'What web scraping services do you offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I build custom web scrapers and data scraping pipelines using Python, Playwright, Scrapy, Puppeteer, and Selenium. Services include web crawling, data harvesting, e-commerce scraping, price monitoring, lead scraping, competitor data collection, real estate data, and job board extraction. Works on JS-rendered pages, login-protected sites, and sites with anti-bot protection. Data delivered in CSV, JSON, Excel, or directly into your database.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you bypass anti-bot protection like Cloudflare or CAPTCHA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. I specialize in stealth browser automation with fingerprint spoofing, residential and rotating proxies, and CAPTCHA solving (2Captcha, CapSolver). I have experience working around Cloudflare, Akamai, DataDome, and similar bot detection systems to ensure reliable data access.',
            },
          },
          {
            '@type': 'Question',
            name: 'What full-stack development services do you provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I build end-to-end web applications using NuxtJS, Vue.js, React, FastAPI, Node.js, PostgreSQL, and MongoDB. Services include SaaS dashboards, admin panels, REST APIs, data pipelines, and cloud deployment on AWS or Vercel. I handle everything from database design to frontend UI.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you build voice AI and chatbot systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. I build real-time voice AI assistants and IVR systems using LiveKit, Dialogflow, and Voximplant. These include automated inbound/outbound call handling, lead qualification bots, appointment booking, and customer support automation powered by OpenAI, Gemini, and Grok.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost to hire you for a web scraping or automation project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most one-off web scraping projects cost between $100 and $500, and recurring pipelines with scheduling and monitoring typically run from $200 to $1,000+ per month depending on volume and anti-bot difficulty. Larger automation and full-stack builds are quoted as fixed-price projects, and hourly engagements through Upwork are available for ongoing maintenance and consulting. Every project starts with a free scoping call and a fixed quote within 24 hours, so there are no surprise hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'What timezones do you work in and how do we communicate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I work with clients across the US, Europe, and Asia and schedule calls to overlap with US (EST and PST) and European business hours. Day-to-day collaboration is asynchronous with regular written updates, and I communicate fluently in English over Slack, Microsoft Teams, Jira, or email, whichever your team already uses.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I hire you for a web scraping or automation project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can hire me directly through my Upwork profile at upwork.com/freelancers/phanvuong2, or send a message via the contact form on this page. I respond within 24 hours with a detailed project scope and quote. I am a Top Rated Plus freelancer with 7,200+ hours and a 5.0 rating on Upwork.',
            },
          },
        ],
      }),
    },
  ],
})
</script>
