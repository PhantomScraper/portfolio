<template>
  <!-- Hallmark · catalogue rows. Category label hangs in the left margin, the
       stack runs as a wrapped line beside it. No boxes, no hover tint cards. -->
  <section id="tech-stack" class="band band--tint" aria-label="Technology stack">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">04 / Stack</p>
        <div>
          <h2 class="section-head__title">Scraping &amp; Automation Tech Stack</h2>
        </div>
      </div>

      <dl class="stack">
        <div v-for="category in categories" :key="category.name" class="stack__row">
          <dt class="stack__cat">{{ category.name }}</dt>
          <dd class="stack__items">
            <span v-for="tech in category.techs" :key="tech.name" class="chip">
              <img
                v-if="tech.icon"
                :src="`/icons/tech/${tech.icon}.svg`"
                :alt="`${tech.name} logo`"
                class="chip__icon"
                width="16"
                height="16"
                loading="lazy"
              >
              <span v-else aria-hidden="true">{{ tech.emoji }}</span>
              {{ tech.name }}
            </span>
          </dd>
        </div>
      </dl>
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

<style scoped>
.stack {
  margin: 0;
  border-top: 1px solid var(--color-rule);
}

.stack__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-2xs);
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .stack__row {
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: var(--space-lg);
    align-items: baseline;
  }
}

.stack__cat {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.stack__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs) var(--space-md);
  margin: 0;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3xs);
  font-size: var(--text-sm);
  color: var(--color-ink);
  white-space: nowrap;
}

.chip__icon {
  width: 1rem;
  height: 1rem;
  object-fit: contain;
}
</style>
