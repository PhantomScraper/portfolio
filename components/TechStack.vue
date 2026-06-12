<template>
  <section
    id="tech-stack"
    class="py-20 bg-white border-y border-slate-100"
    aria-label="Technology stack"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="badge mx-auto mb-4">Tech Stack</div>
        <h2 class="section-title">
          Scraping & Automation
          <span class="gradient-text"> Tech Stack</span>
        </h2>
      </div>

      <div class="space-y-8">
        <div
          v-for="category in categories"
          :key="category.name"
        >
          <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4 text-center">
            {{ category.name }}
          </h3>
          <div class="flex flex-wrap justify-center gap-3">
            <div
              v-for="tech in category.techs"
              :key="tech.name"
              class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-colors group cursor-default"
            >
              <img
                v-if="tech.icon"
                :src="`/icons/tech/${tech.icon}.svg`"
                :alt="`${tech.name} logo`"
                class="w-5 h-5 object-contain"
                width="20"
                height="20"
                loading="lazy"
              >
              <span v-else class="text-xl" aria-hidden="true">{{ tech.emoji }}</span>
              <span class="text-sm font-medium text-slate-700 group-hover:text-primary-700">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Brand logos self-hosted in /public/icons/tech (Simple Icons + Devicon).
// `emoji` is the fallback for techs without an official logo in those sets.
const categories = [
  {
    name: 'Scraping & Automation',
    techs: [
      { name: 'Python', icon: 'python' },
      { name: 'Playwright', icon: 'playwright' },
      { name: 'Puppeteer', icon: 'puppeteer' },
      { name: 'Scrapy', icon: 'scrapy' },
      { name: 'Selenium', icon: 'selenium' },
      { name: 'BeautifulSoup', emoji: '🍲' },
    ],
  },
  {
    name: 'Backend & APIs',
    techs: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Django', icon: 'django' },
      { name: 'Flask', icon: 'flask' },
      { name: 'GraphQL', icon: 'graphql' },
    ],
  },
  {
    name: 'Frontend',
    techs: [
      { name: 'NuxtJS', icon: 'nuxt' },
      { name: 'Vue.js', icon: 'vue' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    name: 'AI & Voice',
    techs: [
      { name: 'OpenAI', icon: 'openai' },
      { name: 'Claude API', icon: 'claude' },
      { name: 'LiveKit', icon: 'livekit' },
      { name: 'Dialogflow', icon: 'dialogflow' },
      { name: 'Voximplant', emoji: '📞' },
      { name: 'LangChain', icon: 'langchain' },
    ],
  },
  {
    name: 'Database & Cloud',
    techs: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'DynamoDB', icon: 'dynamodb' },
      { name: 'AWS', icon: 'aws' },
      { name: 'GCP', icon: 'googlecloud' },
    ],
  },
]
</script>
