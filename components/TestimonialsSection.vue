<template>
  <!-- Hallmark · T1 pull quote with marginalia
       knobs: roman large · attribution margin-aligned · no marginalia timeline
       The reviews are anonymised on Upwork, so they stay "Upwork Client" here.
       Inventing names or companies would fail the honest-copy rule. -->
  <section id="testimonials" class="band" aria-label="Client testimonials">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">05 / Reviews</p>
        <div>
          <h2 class="section-head__title">What Clients Say on Upwork</h2>
          <p class="section-head__lede">
            Real feedback from real clients. Every review is verified on Upwork.
          </p>
        </div>
      </div>

      <ul class="quotes">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="quote">
          <div class="quote__margin">
            <span class="quote__rating tnum" aria-label="5 out of 5 stars">5.0</span>
            <span class="quote__source">
              <IconUpwork class="w-3 h-3 upwork-mark" />
              Upwork Client
            </span>
          </div>
          <blockquote class="quote__text">
            <p>{{ testimonial.text }}</p>
          </blockquote>
        </li>
      </ul>

      <p class="mt-lg">
        <a
          href="https://www.upwork.com/freelancers/phanvuong2"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-text"
        >
          Read every review on Upwork
          <span aria-hidden="true">↗</span>
        </a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    text: 'Vuong was an exceptional hire for our firm. He works very hard, is talented and effective, and would make a great addition to any team. Would 100% recommend him to join any team!',
  },
  {
    id: 2,
    text: 'Vuong was very helpful and professional. He completed my web scraping project successfully. I\'m very satisfied with the quality of his work. Thank you Vuong!',
  },
  {
    id: 3,
    text: 'Vuong did a great job. Excellent service, knowledge, communication and expertise. We will definitely hire him for future projects.',
  },
]
</script>

<style scoped>
.quotes {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

.quote {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-2xs);
  padding-block: var(--space-lg);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 900px) {
  .quote {
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: var(--space-lg);
    align-items: start;
  }
}

.quote__margin {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2xs) var(--space-sm);
}

@media (min-width: 900px) {
  .quote__margin {
    display: block;
  }
}

.quote__rating {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-md);
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.quote__source {
  display: flex;
  align-items: center;
  gap: var(--space-3xs);
  margin-top: var(--space-3xs);
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

/* Roman, not italic. Large enough to carry the section on its own. */
.quote__text {
  margin: 0;
  font-size: var(--text-md);
  line-height: 1.5;
  color: var(--color-ink);
  max-width: 58ch;
}

@media (min-width: 768px) {
  .quote__text {
    font-size: var(--text-lg);
    line-height: 1.4;
    letter-spacing: -0.01em;
  }
}

.quote__text p {
  margin: 0;
}

.quote__text p::before { content: "\201C"; }
.quote__text p::after  { content: "\201D"; }
</style>
