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
              <span class="text-xl" aria-hidden="true">{{ tech.emoji }}</span>
              <span class="text-sm font-medium text-slate-700 group-hover:text-primary-700">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'Scraping & Automation',
    techs: [
      { name: 'Python', emoji: '🐍' },        // snake = Python official logo
      { name: 'Playwright', emoji: '🎭' },     // theater masks = Playwright official logo
      { name: 'Puppeteer', emoji: '🐕' },      // dog character = Puppeteer mascot
      { name: 'Scrapy', emoji: '🕷️' },        // spider = Scrapy official logo
      { name: 'Selenium', emoji: '🔍' },       // inspect/search = web testing tool
      { name: 'BeautifulSoup', emoji: '🍲' },  // soup pot = BeautifulSoup (HTML soup)
    ],
  },
  {
    name: 'Backend & APIs',
    techs: [
      { name: 'FastAPI', emoji: '⚡' },        // lightning = FastAPI official logo
      { name: 'Node.js', emoji: '🟢' },        // green hexagon = Node.js brand
      { name: 'Express.js', emoji: '🖤' },     // black minimalist = Express wordmark
      { name: 'Django', emoji: '🌿' },         // green brand color
      { name: 'Flask', emoji: '🧪' },          // test tube = Flask name
      { name: 'GraphQL', emoji: '🌸' },        // pink #e535ab = official GraphQL brand color
    ],
  },
  {
    name: 'Frontend',
    techs: [
      { name: 'NuxtJS', emoji: '🏔️' },       // two green triangles/mountains = Nuxt official logo
      { name: 'Vue.js', emoji: '🔼' },         // green upward chevron/V = Vue official logo
      { name: 'React', emoji: '⚛️' },          // atom = React official logo
      { name: 'Tailwind CSS', emoji: '💨' },   // wind/breeze = Tailwind name & fan-shape logo
      { name: 'TypeScript', emoji: '🟦' },     // blue square with TS = TypeScript official logo
    ],
  },
  {
    name: 'AI & Voice',
    techs: [
      { name: 'OpenAI', emoji: '🌀' },         // concentric circle swirl = OpenAI official logo
      { name: 'Claude API', emoji: '🧠' },
      { name: 'LiveKit', emoji: '🎙️' },       // microphone = voice/audio
      { name: 'Dialogflow', emoji: '💬' },     // chat bubble = conversational AI
      { name: 'Voximplant', emoji: '📞' },     // phone = telephony platform
      { name: 'LangChain', emoji: '🔗' },      // chain link = LangChain name & logo
    ],
  },
  {
    name: 'Database & Cloud',
    techs: [
      { name: 'PostgreSQL', emoji: '🐘' },     // elephant = PostgreSQL official logo
      { name: 'MongoDB', emoji: '🍃' },        // green leaf = MongoDB official logo
      { name: 'MySQL', emoji: '🐬' },          // dolphin = MySQL official logo
      { name: 'DynamoDB', emoji: '🟠' },       // orange = AWS DynamoDB icon color
      { name: 'AWS', emoji: '☁️' },
      { name: 'GCP', emoji: '🌐' },
    ],
  },
]
</script>
