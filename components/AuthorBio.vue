<template>
  <aside class="mt-12 card flex flex-col sm:flex-row gap-5 items-start" aria-label="About the author">
    <!-- Avatar -->
    <div class="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
      <span class="text-white font-bold text-xl">VP</span>
    </div>

    <div class="flex-1">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="font-bold text-slate-900">Vuong Phan</span>
        <span class="badge">Top Rated on Upwork</span>
      </div>
      <p class="text-sm text-slate-500 leading-relaxed mt-2">
        Web scraping and automation engineer with 6,300+ hours and a 5.0 rating on Upwork across
        50+ projects. I build production scrapers, anti-bot bypass systems, proxy and CAPTCHA
        integration, API pipelines, and full-stack apps. Everything I write here comes from real
        client work.
      </p>
      <div class="flex items-center gap-4 mt-3 text-sm">
        <a
          href="https://www.upwork.com/freelancers/phanvuong2"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary-600 font-medium hover:text-primary-700 hover:underline"
        >
          Hire on Upwork
        </a>
        <a
          href="https://github.com/hienvuong2810"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary-600 font-medium hover:text-primary-700 hover:underline"
        >
          GitHub
        </a>
        <NuxtLink to="/#contact" class="text-primary-600 font-medium hover:text-primary-700 hover:underline">
          Contact
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
// Static author box for E-E-A-T signals on every article.
// To use a real photo later, swap the initials avatar for an <img src="/author.jpg">.
</script>
