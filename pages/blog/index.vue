<template>
  <main id="main-content" class="pt-16">
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="badge mx-auto mb-4">Blog</div>
        <h1 class="section-title text-4xl md:text-5xl">
          Web Scraping &amp;
          <span class="gradient-text">Automation Guides</span>
        </h1>
        <p class="section-subtitle mx-auto text-center">
          Practical, hands-on guides on web scraping, anti-bot bypass, proxies, and automation — from real client projects.
        </p>
      </div>

      <!-- Post list -->
      <div class="space-y-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="card block hover:border-primary-200 group"
        >
          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span v-if="post.readingTime" aria-hidden="true">•</span>
            <span v-if="post.readingTime">{{ post.readingTime }}</span>
          </div>
          <h2 class="text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors mb-2">
            {{ post.title }}
          </h2>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ post.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs text-slate-500"
            >
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all(),
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const siteUrl = 'https://www.vuongphan.dev'

useSeoMeta({
  title: 'Web Scraping & Automation Blog',
  description: 'Practical guides on web scraping, anti-bot bypass, rotating proxies, Cloudflare, and automation from real client projects by Vuong Phan.',
  ogType: 'website',
  ogUrl: `${siteUrl}/blog`,
  ogTitle: 'Web Scraping & Automation Blog | Vuong Phan',
  ogDescription: 'Practical guides on web scraping, anti-bot bypass, rotating proxies, and automation.',
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/blog` }],
})
</script>
