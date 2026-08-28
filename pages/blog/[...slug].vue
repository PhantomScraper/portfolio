<template>
  <!-- Hallmark · macrostructure: 02 Long Document
       Single column at a 65ch measure, section heads emerging from the flow,
       negative space as the divider, no reveals, typographic CTAs. -->
  <main id="main-content" class="pt-16">
    <article v-if="post" class="shell-narrow article">
      <nav class="crumbs" aria-label="Breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span aria-hidden="true">/</span>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>

      <p class="article__meta">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span v-if="post.readingTime">{{ post.readingTime }}</span>
      </p>

      <!-- Key takeaways (TL;DR for readers and LLMs) -->
      <section v-if="post.takeaways?.length" class="takeaways" aria-label="Key takeaways">
        <h2 class="takeaways__head">Key takeaways</h2>
        <ul>
          <li v-for="point in post.takeaways" :key="point">{{ point }}</li>
        </ul>
      </section>

      <!-- Rendered content -->
      <div class="prose-blog">
        <ContentRenderer :value="post" />
      </div>

      <!-- FAQ (visible source for the FAQPage schema below) -->
      <section v-if="post.faqs?.length" class="afaq">
        <h2 class="afaq__head">Frequently asked questions</h2>
        <dl>
          <div v-for="faq in post.faqs" :key="faq.question" class="afaq__item">
            <dt>{{ faq.question }}</dt>
            <dd>{{ faq.answer }}</dd>
          </div>
        </dl>
      </section>

      <!-- Tags -->
      <div v-if="post.tags?.length" class="article__tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <!-- CTA -->
      <section class="endcta">
        <h2 class="endcta__head">Have a scraping or automation project?</h2>
        <p class="endcta__text">
          I build production scraping systems with proxy integration, anti-bot bypass, and the reliability to run at scale.
        </p>
        <div class="endcta__actions">
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-upwork"
          >
            Hire me on Upwork
          </a>
          <NuxtLink to="/#contact" class="btn-text">
            Send a project brief
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </section>

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
        ...(post.value.faqs?.length
          ? [
              {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: post.value.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                  })),
                }),
              },
            ]
          : []),
      ]
    : [],
}))
</script>

<style scoped>
.article {
  padding-block: var(--space-2xl) var(--space-3xl);
}

.crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2xs);
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.crumbs a:hover {
  color: var(--color-accent);
}

.article__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs) var(--space-sm);
  margin-top: var(--space-md);
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

/* The takeaways box is the one framed element in the article. It earns the
   frame because it is a different kind of reading: a summary, not prose. */
.takeaways {
  margin-top: var(--space-lg);
  padding: var(--space-md);
  border: 1px solid var(--color-rule);
  border-left: 2px solid var(--color-accent);
  border-radius: var(--radius-sm);
  background: var(--color-paper-2);
}

.takeaways__head {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.takeaways ul {
  margin: var(--space-2xs) 0 0;
  padding-left: var(--space-md);
  list-style: disc;
}

.takeaways li {
  margin-block: var(--space-3xs);
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.takeaways li::marker {
  color: var(--color-accent);
}

.article .prose-blog {
  margin-top: var(--space-2xl);
}

.afaq {
  margin-top: var(--space-3xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-rule);
  max-width: var(--measure);
}

.afaq__head {
  font-size: var(--text-lg);
}

.afaq dl {
  margin: var(--space-md) 0 0;
}

.afaq__item {
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

.afaq__item:first-child {
  border-top: 1px solid var(--color-rule);
}

.afaq dt {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.afaq dd {
  margin: var(--space-2xs) 0 0;
  font-size: var(--text-sm);
  color: var(--color-muted);
}

.article__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3xs);
  margin-top: var(--space-2xl);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-rule);
}

.endcta {
  margin-top: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-rule);
}

.endcta__head {
  font-size: var(--text-lg);
  max-width: 24ch;
}

.endcta__text {
  margin-top: var(--space-2xs);
  color: var(--color-muted);
  max-width: 56ch;
}

.endcta__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}
</style>
