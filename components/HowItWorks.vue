<template>
  <section
    id="how-it-works"
    class="py-24 bg-slate-50"
    aria-label="How it works"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="badge mx-auto mb-4">Simple Process</div>
        <h2 class="section-title">
          Hire a Developer,
          <span class="gradient-text"> Simple Process</span>
        </h2>
        <p class="section-subtitle mx-auto text-center">
          A straightforward 3-step process to get your web scraping, automation, or development
          project built fast, clearly, and stress-free.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connector line (desktop) -->
        <div
          class="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent"
          aria-hidden="true"
        />

        <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="relative flex flex-col items-center text-center"
          >
            <!-- Step number -->
            <div class="relative mb-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                   :class="step.bg">
                {{ i + 1 }}
              </div>
              <!-- Icon overlay -->
              <div class="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                <component :is="step.icon" class="w-4 h-4" :class="step.iconColor" aria-hidden="true" />
              </div>
            </div>

            <h3 class="text-lg font-bold text-slate-900 mb-3">{{ step.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">{{ step.description }}</p>

            <!-- Duration badge -->
            <div class="mt-4 text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {{ step.duration }}
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <a href="#contact" class="btn-primary">
          Start Your Project Today
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const IconMsg = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' }),
  ]),
})
const IconCode = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' }),
  ]),
})
const IconCheck = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }),
  ]),
})

const steps = [
  {
    title: 'Discuss Your Requirements',
    description: 'Tell me about your project, what data you need, what you want automated, or what app you want to build. I\'ll provide a clear scope and estimate within 24 hours.',
    bg: 'bg-primary-600',
    icon: IconMsg,
    iconColor: 'text-primary-600',
    duration: 'Within 24h',
  },
  {
    title: 'Build & Iterate',
    description: 'I start development immediately with daily progress updates. Milestones are tested and shared with you for feedback throughout the build.',
    bg: 'bg-violet-600',
    icon: IconCode,
    iconColor: 'text-violet-600',
    duration: 'Ongoing updates',
  },
  {
    title: 'Deliver & Support',
    description: 'Clean handover with full documentation and source code. I stay available post-delivery for questions, tweaks, and future enhancements.',
    bg: 'bg-green-600',
    icon: IconCheck,
    iconColor: 'text-green-600',
    duration: 'On schedule',
  },
]
</script>
