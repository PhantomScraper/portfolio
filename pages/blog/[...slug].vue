<template>
  <main id="main-content" class="pt-16">
    <article v-if="post" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-1.5 text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
        <span aria-hidden="true">/</span>
        <NuxtLink to="/blog" class="hover:text-primary-600">Blog</NuxtLink>
        <span aria-hidden="true">/</span>
        <span class="text-slate-500 truncate">{{ post.title }}</span>
      </nav>

      <!-- Meta -->
      <div class="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span v-if="post.readingTime" aria-hidden="true">•</span>
        <span v-if="post.readingTime">{{ post.readingTime }}</span>
      </div>

      <!-- Key takeaways (TL;DR for readers and LLMs) -->
      <div
        v-if="post.takeaways?.length"
        class="mb-10 card bg-primary-50 border-primary-100"
      >
        <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Key takeaways</h2>
        <ul class="space-y-2">
          <li
            v-for="point in post.takeaways"
            :key="point"
            class="flex gap-2.5 text-sm text-slate-600 leading-relaxed"
          >
            <svg class="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>

      <!-- Rendered content -->
      <div class="prose-blog">
        <ContentRenderer :value="post" />
      </div>

      <!-- Tags -->
      <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-100">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs text-slate-500"
        >
          {{ tag }}
        </span>
      </div>

      <!-- CTA -->
      <div class="mt-12 card bg-primary-50 border-primary-100 text-center">
        <h2 class="text-xl font-bold text-slate-900 mb-2">Have a scraping or automation project?</h2>
        <p class="text-slate-500 text-sm mb-6 max-w-md mx-auto">
          I build production scraping systems with proxy integration, anti-bot bypass, and the reliability to run at scale.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            Hire me on Upwork
          </a>
          <NuxtLink to="/#contact" class="btn-outline">Contact form</NuxtLink>
        </div>
      </div>

      <!-- Author bio for E-E-A-T -->
      <AuthorBio />
    </article>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const siteUrl = 'https://www.vuongphan.dev'
const url = `${siteUrl}${route.path}`
// Per-article OG image, pre-generated into /public/og/blog/<slug>.png at build
const slug = route.path.split('/').pop()
const ogImage = `${siteUrl}/og/blog/${slug}.png`

useSeoMeta({
  title: () => post.value?.title ?? 'Article',
  description: () => post.value?.description,
  ogType: 'article',
  ogUrl: url,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.description,
  ogImage,
  twitterImage: ogImage,
  twitterCard: 'summary_large_image',
  articlePublishedTime: () => post.value?.date,
  articleModifiedTime: () => post.value?.updated ?? post.value?.date,
})

useHead({
  link: [{ rel: 'canonical', href: url }],
})

// Article + Breadcrumb structured data for SEO/GEO
useHead(() => ({
  script: post.value
    ? [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.value.title,
            description: post.value.description,
            datePublished: post.value.date,
            dateModified: post.value.updated ?? post.value.date,
            keywords: (post.value.tags ?? []).join(', '),
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            image: ogImage,
            author: {
              '@type': 'Person',
              '@id': `${siteUrl}/#person`,
              name: 'Phan Vuong',
              url: siteUrl,
              jobTitle: 'Web Scraping & Automation Engineer',
              sameAs: [
                'https://www.upwork.com/freelancers/phanvuong2',
                'https://github.com/hienvuong2810',
              ],
            },
            publisher: {
              '@type': 'Person',
              '@id': `${siteUrl}/#person`,
              name: 'Phan Vuong',
              url: siteUrl,
            },
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
              { '@type': 'ListItem', position: 3, name: post.value.title, item: url },
            ],
          }),
        },
      ]
    : [],
}))
</script>
