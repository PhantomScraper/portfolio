<template>
  <main id="main-content">
    <HeroSection />
    <ServicesSection />
    <WhyUsSection />
    <HowItWorks />
    <TechStack />
    <TestimonialsSection />
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
            '@id': 'https://vuongphan.dev/#person',
            name: 'Phan Vuong',
            url: 'https://vuongphan.dev',
            jobTitle: 'Web Scraping & Automation Engineer | Full-Stack Developer',
            description: 'Expert web scraping engineer and full-stack developer specializing in data extraction, anti-bot bypass, API integration, voice AI with LiveKit, and scalable automation systems.',
            sameAs: [
              'https://www.upwork.com/freelancers/phanvuong2',
            ],
            knowsAbout: [
              'Web Scraping',
              'Data Extraction',
              'Automation',
              'Anti-Bot Bypass',
              'API Integration',
              'Full-Stack Development',
              'Voice AI',
              'LiveKit',
              'Python',
              'Node.js',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': 'https://vuongphan.dev/#website',
            url: 'https://vuongphan.dev',
            name: 'Vuong Phan - Web Scraping & Automation Expert',
            description: 'Expert web scraping engineer & full-stack developer. Data extraction, anti-bot bypass, API integration, voice AI with LiveKit, and scalable automation systems.',
            author: { '@id': 'https://vuongphan.dev/#person' },
            inLanguage: 'en-US',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://vuongphan.dev/#person' },
            name: 'Web Scraping & Data Extraction',
            description: 'Large-scale web scraping solutions with anti-bot bypass, proxy management, and multi-format data export.',
            serviceType: 'Web Scraping',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://vuongphan.dev/#person' },
            name: 'Full-Stack Web Development',
            description: 'End-to-end web applications using NuxtJS, React, FastAPI, Node.js with cloud deployment.',
            serviceType: 'Web Development',
          },
          {
            '@type': 'Service',
            provider: { '@id': 'https://vuongphan.dev/#person' },
            name: 'Voice AI & Conversational Bots',
            description: 'Real-time voice assistants and IVR solutions using LiveKit, Dialogflow, and Voximplant.',
            serviceType: 'AI Development',
          },
        ],
      }),
    },
  ],
})
</script>
