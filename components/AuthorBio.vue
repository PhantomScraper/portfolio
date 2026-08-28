<template>
  <!-- Hallmark · Ft1-flavoured author band. Hairline rule above, no card,
       no rounded avatar disc. E-E-A-T signals unchanged. -->
  <aside class="bio" aria-label="About the author">
    <p class="eyebrow">Written by</p>

    <div class="bio__body">
      <div class="bio__head">
        <span class="bio__name">Vuong Phan</span>
        <span class="tag">Top Rated Plus on Upwork</span>
      </div>
      <p class="bio__text">
        Web scraping and automation engineer with 7,200+ hours and a 5.0 rating on Upwork across
        50+ projects. I build production scrapers, anti-bot bypass systems, proxy and CAPTCHA
        integration, API pipelines, and full-stack apps. Everything I write here comes from real
        client work.
      </p>
      <nav class="bio__links" aria-label="Author links">
        <a
          href="https://www.upwork.com/freelancers/phanvuong2"
          target="_blank"
          rel="noopener noreferrer"
        >Hire on Upwork ↗</a>
        <a
          href="https://github.com/hienvuong2810"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub ↗</a>
        <NuxtLink to="/web-scraping-service">Web Scraping Service</NuxtLink>
        <NuxtLink to="/#contact">Contact</NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
// Static author box for E-E-A-T signals on every article.
</script>

<style scoped>
.bio {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-2xl);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .bio {
    grid-template-columns: 8rem minmax(0, 1fr);
    gap: var(--space-lg);
    align-items: start;
  }

  .bio .eyebrow {
    padding-top: 0.35rem;
  }
}

.bio__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2xs);
}

.bio__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-md);
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.bio__text {
  margin-top: var(--space-2xs);
  font-size: var(--text-sm);
  color: var(--color-muted);
  max-width: 62ch;
}

.bio__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs) var(--space-md);
  margin-top: var(--space-sm);
  font-size: var(--text-sm);
}

.bio__links a {
  color: var(--color-accent);
  white-space: nowrap;
}

.bio__links a:hover {
  color: var(--color-accent-hi);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>
