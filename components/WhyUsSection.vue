<template>
  <!-- Hallmark · T4 numbered stat strip (4-up) + a hairline benefit list.
       Every figure traces to the public Upwork profile. No invented metrics. -->
  <section id="why-us" class="band band--tint" aria-label="Why choose me">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">02 / Why me</p>
        <div>
          <h2 class="section-head__title">Why Hire Me as Your Web Scraping Expert</h2>
          <p class="section-head__lede">
            As a dedicated full-time freelance Python developer, I bring 7+ years of hands-on
            expertise to every scraping, automation, and full-stack project. No middlemen, no
            delays, just clean code, on-time delivery, and transparent communication.
          </p>
        </div>
      </div>

      <!-- T4 · Numbered stat strip -->
      <dl class="strip">
        <div v-for="stat in stats" :key="stat.label" class="strip__cell">
          <dt class="strip__label">{{ stat.label }}</dt>
          <dd class="strip__figure tnum">{{ stat.value }}</dd>
          <dd class="strip__sub">{{ stat.sub }}</dd>
        </div>
      </dl>

      <ul class="benefits">
        <li v-for="benefit in benefits" :key="benefit.title" class="benefit">
          <h3 class="benefit__title">{{ benefit.title }}</h3>
          <p class="benefit__text">{{ benefit.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '50+', label: 'Projects Completed', sub: 'Across 15+ countries' },
  { value: '5.0', label: 'Upwork Rating', sub: 'Top Rated Plus on Upwork' },
  { value: '100%', label: 'Job Success Rate', sub: 'On-time delivery' },
  { value: '7+', label: 'Years Experience', sub: 'Automation & scraping' },
]

const benefits = [
  {
    title: 'Clean, Maintainable Code',
    description: 'Well-structured code with documentation, easy to extend and maintain long-term.',
  },
  {
    title: 'On-Time Delivery',
    description: 'Consistent track record of meeting deadlines without cutting corners on quality.',
  },
  {
    title: 'Clear Communication',
    description: 'Daily updates, fast responses, and transparent progress reporting throughout the project.',
  },
  {
    title: 'Post-Delivery Support',
    description: 'I stay available after delivery to handle adjustments, bugs, and new requirements.',
  },
]
</script>

<style scoped>
.strip {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin: 0;
  border-top: 1px solid var(--color-rule);
  border-left: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .strip {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.strip__cell {
  padding: var(--space-md);
  border-right: 1px solid var(--color-rule);
  border-bottom: 1px solid var(--color-rule);
  background: var(--color-paper);
}

.strip__label {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.strip__figure {
  margin: var(--space-2xs) 0 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-xl);
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--color-ink);
}

.strip__sub {
  margin: var(--space-3xs) 0 0;
  font-size: var(--text-xs);
  color: var(--color-neutral);
}

.benefits {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0;
  list-style: none;
  margin: var(--space-2xl) 0 0;
  padding: 0;
}

@media (min-width: 768px) {
  .benefits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--space-2xl);
  }
}

.benefit {
  padding-block: var(--space-md);
  border-top: 1px solid var(--color-rule);
}

.benefit__title {
  font-size: var(--text-base);
  letter-spacing: -0.02em;
}

.benefit__text {
  margin-top: var(--space-3xs);
  font-size: var(--text-sm);
  color: var(--color-muted);
  max-width: 48ch;
}
</style>
