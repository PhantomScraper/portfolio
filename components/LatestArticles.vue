<template>
  <section
    id="blog"
    class="py-24 bg-slate-50"
    aria-label="Latest articles"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="badge mx-auto mb-4">Blog</div>
        <h2 class="section-title">
          Web Scraping &amp;
          <span class="gradient-text">Automation Guides</span>
        </h2>
        <p class="section-subtitle mx-auto text-center">
          Practical, hands-on guides from real client projects on scraping, anti-bot bypass, proxies, and automation.
        </p>
      </div>

      <!-- Latest posts -->
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="card flex flex-col hover:border-primary-200 group"
        >
          <div class="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span v-if="post.readingTime" aria-hidden="true">•</span>
            <span v-if="post.readingTime">{{ post.readingTime }}</span>
          </div>
          <h3 class="font-bold text-slate-900 group-hover:text-primary-700 transition-colors mb-2 leading-snug">
            {{ post.title }}
          </h3>
          <p class="text-slate-500 text-sm leading-relaxed line-clamp-3">{{ post.description }}</p>
        </NuxtLink>
      </div>

      <!-- View all -->
      <div class="text-center mt-12">
        <NuxtLink to="/blog" class="btn-outline">
          View all articles
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('home-latest-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all(),
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
