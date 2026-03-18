<template>
  <section
    id="why-us"
    class="py-24 bg-white"
    aria-label="Why choose me"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: text -->
        <div>
          <div class="badge mb-4">Why Choose Me</div>
          <h2 class="section-title mb-6">
            Why Hire Me as Your
            <span class="gradient-text"> Web Scraping Expert</span>
          </h2>
          <p class="text-slate-500 leading-relaxed mb-10">
            As a dedicated full-time freelance Python developer, I bring 7+ years of hands-on
            expertise to every scraping, automation, and full-stack project. No middlemen, no
            delays — just clean code, on-time delivery, and transparent communication.
          </p>

          <ul class="space-y-5">
            <li
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex items-start gap-4"
            >
              <div class="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <component :is="benefit.icon" class="w-5 h-5 text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 text-sm">{{ benefit.title }}</h3>
                <p class="text-slate-500 text-sm mt-0.5">{{ benefit.description }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: stats grid -->
        <div class="grid grid-cols-2 gap-5">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="card text-center group hover:border-primary-200 hover:bg-primary-50/30 transition-colors"
          >
            <div class="text-4xl font-extrabold text-primary-600 mb-2">{{ stat.value }}</div>
            <div class="text-slate-600 text-sm font-medium">{{ stat.label }}</div>
            <div class="text-slate-400 text-xs mt-1">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const IconCheck = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 13l4 4L19 7' }),
  ]),
})
const IconClock = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }),
  ]),
})
const IconChat = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' }),
  ]),
})
const IconRefresh = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }),
  ]),
})

const stats = [
  { value: '50+', label: 'Projects Completed', sub: 'Across 15+ countries' },
  { value: '5.0★', label: 'Upwork Rating', sub: 'Top Rated Freelancer' },
  { value: '100%', label: 'Job Success Rate', sub: 'On-time delivery' },
  { value: '7+', label: 'Years Experience', sub: 'Automation & scraping' },
]

const benefits = [
  {
    icon: IconCheck,
    title: 'Clean, Maintainable Code',
    description: 'Well-structured code with documentation, easy to extend and maintain long-term.',
  },
  {
    icon: IconClock,
    title: 'On-Time Delivery',
    description: 'Consistent track record of meeting deadlines without cutting corners on quality.',
  },
  {
    icon: IconChat,
    title: 'Clear Communication',
    description: 'Daily updates, fast responses, and transparent progress reporting throughout the project.',
  },
  {
    icon: IconRefresh,
    title: 'Post-Delivery Support',
    description: 'I stay available after delivery to handle adjustments, bugs, and new requirements.',
  },
]
</script>
