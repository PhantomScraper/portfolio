<template>
  <!-- Hallmark · macrostructure: 13 Index-First
       The page IS the list. Hairline rules between rows, no hero image, no
       card boxes, no centred badge header. -->
  <main id="main-content" class="pt-16">
    <section class="shell band band--lead">
      <header class="head">
        <p class="eyebrow">Writing</p>
        <h1 class="head__title">Web Scraping &amp; Automation Guides</h1>
        <p class="head__lede">
          Practical, hands-on guides on web scraping, anti-bot bypass, proxies, and automation, from real client projects.
        </p>
      </header>

      <ol class="index">
        <li v-for="(post, i) in posts" :key="post.path" class="index__row">
          <NuxtLink :to="post.path" class="index__link">
            <span class="index__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="index__main">
              <span class="index__meta">
                <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                <span v-if="post.readingTime">{{ post.readingTime }}</span>
              </span>
              <h2 class="index__title">{{ post.title }}</h2>
              <p class="index__desc">{{ post.description }}</p>
              <div v-if="post.tags?.length" class="index__tags">
                <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ol>
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

<style scoped>
.head {
  max-width: 34ch;
  margin-bottom: var(--space-2xl);
}

.head__title {
  margin-top: var(--space-sm);
  font-size: var(--text-display-s);
  line-height: 1.06;
}

.head__lede {
  margin-top: var(--space-md);
  color: var(--color-muted);
  font-size: var(--text-md);
  max-width: 56ch;
}

.index {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

.index__row {
  border-bottom: 1px solid var(--color-rule);
}

.index__link {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: var(--space-sm);
  padding-block: var(--space-lg);
}

.index__num {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-accent);
  padding-top: 0.35rem;
}

.index__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs) var(--space-sm);
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.index__title {
  margin-top: var(--space-2xs);
  font-size: var(--text-md);
  line-height: 1.2;
  transition: color var(--dur-short) var(--ease-out);
}

@media (min-width: 768px) {
  .index__title {
    font-size: var(--text-lg);
  }
}

.index__link:hover .index__title {
  color: var(--color-accent);
}

.index__desc {
  margin-top: var(--space-2xs);
  color: var(--color-muted);
  max-width: 72ch;
}

.index__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3xs);
  margin-top: var(--space-sm);
}
</style>
