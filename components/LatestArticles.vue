<template>
  <!-- Hallmark · index rows. Three posts as hairline-ruled entries, not cards. -->
  <section id="blog" class="band band--tint" aria-label="Latest articles">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">06 / Writing</p>
        <div>
          <h2 class="section-head__title">Web Scraping &amp; Automation Guides</h2>
          <p class="section-head__lede">
            Practical, hands-on guides from real client projects on scraping, anti-bot bypass, proxies, and automation.
          </p>
        </div>
      </div>

      <ul class="entries">
        <li v-for="post in posts" :key="post.path">
          <NuxtLink :to="post.path" class="entry">
            <div class="entry__meta">
              <time :datetime="post.updated ?? post.date">{{ post.updated && post.updated !== post.date ? 'Updated ' : '' }}{{ formatDate(post.updated ?? post.date) }}</time>
              <span v-if="post.readingTime">{{ post.readingTime }}</span>
            </div>
            <div>
              <h3 class="entry__title">{{ post.title }}</h3>
              <p class="entry__desc">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <p class="mt-lg">
        <NuxtLink to="/blog" class="btn-text">
          All articles
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Newest by last activity (published or updated), so refreshed guides resurface
// on the homepage. Only the listed fields, not 18 article bodies, reach the payload.
const { data: posts } = await useAsyncData('home-latest-posts', async () => {
  const all = await queryCollection('blog')
    .where('draft', '=', false)
    .select('path', 'title', 'description', 'date', 'updated', 'readingTime')
    .all()
  return all
    .sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date))
    .slice(0, 3)
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.entries {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

.entries > li {
  border-bottom: 1px solid var(--color-rule);
}

.entry {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-2xs);
  padding-block: var(--space-md);
}

@media (min-width: 768px) {
  .entry {
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: var(--space-lg);
    align-items: baseline;
  }
}

.entry__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs);
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.entry__title {
  font-size: var(--text-md);
  letter-spacing: -0.02em;
  transition: color var(--dur-short) var(--ease-out);
}

.entry:hover .entry__title {
  color: var(--color-accent);
}

.entry__desc {
  margin-top: var(--space-3xs);
  font-size: var(--text-sm);
  color: var(--color-muted);
  max-width: 68ch;
}
</style>
