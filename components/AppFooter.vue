<template>
  <!-- Hallmark · footer: Ft5 Statement
       knobs: sentence 38ch · wordmark under sentence · hairline rule above meta
       Previous footer was Ft3 (four link columns + social row + tiny
       copyright), banned for modern-minimal as the AI footer fingerprint.
       Every unique internal destination it carried is preserved below; the six
       duplicate links that all pointed at #services are consolidated into one. -->
  <footer class="foot" role="contentinfo">
    <div class="shell">
      <!-- The statement -->
      <p class="foot__statement">
        Tell me the sites and the fields.<br>
        I send you the data.
      </p>

      <div class="flex flex-wrap items-center gap-md mt-lg">
        <a
          href="https://www.upwork.com/freelancers/phanvuong2"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-upwork"
        >
          <IconUpwork class="w-4 h-4" />
          Hire on Upwork
        </a>
        <NuxtLink to="/#contact" class="foot__cta">
          Send a project brief
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <hr class="foot__rule">

      <!-- Meta -->
      <div class="foot__meta">
        <div class="foot__brand">
          <div class="flex items-center gap-2xs">
            <BrandMark class="w-5 h-5 text-accent-hi" />
            <span class="font-display font-bold tracking-[-0.03em] text-[1.0625rem]" style="color: var(--color-on-deep)">
              Vuong Phan
            </span>
          </div>
          <p class="foot__bio">
            Vuong Phan is an independent freelance Python developer specializing in web scraping,
            browser automation, API integration, full-stack development, and voice AI. Top Rated Plus
            on Upwork with 7,200+ hours and a 5.0 rating, and available for direct engagements
            through the contact form on this site.
          </p>
        </div>

        <nav class="foot__links" aria-label="Footer">
          <NuxtLink to="/web-scraping-service">Web Scraping Service</NuxtLink>
          <NuxtLink to="/hire-web-scraping-developer">Hire a Web Scraping Developer</NuxtLink>
          <a href="/#services">All Services</a>
          <a href="/#why-us">Why Choose Me</a>
          <a href="/#how-it-works">How It Works</a>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <a href="/#contact">Contact</a>
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
          >Upwork Profile ↗</a>
          <a
            href="https://github.com/hienvuong2810"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub ↗</a>
        </nav>
      </div>

      <div class="foot__base">
        <p>© {{ new Date().getFullYear() }} Vuong Phan. All rights reserved.</p>
        <p class="foot__disciplines">
          Python Web Scraping · Browser Automation · API Integration · Full-Stack Developer · Voice AI
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.foot {
  background: var(--color-ink-deep);
  color: var(--color-on-deep-mute);
  padding-block: var(--space-2xl) var(--space-lg);
}

@media (min-width: 768px) {
  .foot {
    padding-block: var(--space-3xl) var(--space-lg);
  }
}

.foot__statement {
  font-family: var(--font-display);
  font-weight: 700;
  font-style: normal;
  font-size: var(--text-display-s);
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 38ch;
  color: var(--color-on-deep);
  overflow-wrap: anywhere;
}

.foot__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3xs);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent-hi);
  white-space: nowrap;
  transition: color var(--dur-short) var(--ease-out);
}

.foot__cta:hover {
  color: var(--color-on-deep);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.foot__rule {
  margin-block: var(--space-2xl) var(--space-lg);
  border: 0;
  border-top: 1px solid var(--color-deep-rule);
}

.foot__meta {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 900px) {
  .foot__meta {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-2xl);
  }
}

.foot__bio {
  margin-top: var(--space-xs);
  font-size: var(--text-sm);
  line-height: 1.65;
  max-width: 52ch;
}

/* One flowing line of links, not four columns. Same destinations, no grid. */
.foot__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs) var(--space-md);
  align-content: flex-start;
  font-size: var(--text-sm);
}

.foot__links a {
  color: var(--color-on-deep-mute);
  white-space: nowrap;
  transition: color var(--dur-short) var(--ease-out);
}

.foot__links a:hover {
  color: var(--color-on-deep);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.foot__base {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs) var(--space-md);
  justify-content: space-between;
  margin-top: var(--space-2xl);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-deep-rule);
  font-size: var(--text-xs);
}

.foot__disciplines {
  color: var(--color-neutral);
}
</style>
