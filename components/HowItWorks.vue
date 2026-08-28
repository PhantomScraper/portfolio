<template>
  <!-- Hallmark · F4 step sequence
       knobs: numbering 01/02/03 · vertical stack · connector = line -->
  <section id="how-it-works" class="band" aria-label="How it works">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">03 / Process</p>
        <div>
          <h2 class="section-head__title">Hire a Developer, Simple Process</h2>
          <p class="section-head__lede">
            A straightforward 3-step process to get your web scraping, automation, or development
            project built fast, clearly, and stress-free.
          </p>
        </div>
      </div>

      <ol class="steps">
        <li v-for="(step, i) in steps" :key="step.title" class="step">
          <div class="step__marker">
            <span class="step__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <div class="step__body">
            <div class="step__headline">
              <h3 class="step__title">{{ step.title }}</h3>
              <span class="tag">{{ step.duration }}</span>
            </div>
            <p class="step__text">{{ step.description }}</p>
          </div>
        </li>
      </ol>

      <p class="mt-xl">
        <a href="#contact" class="btn btn-primary">Start your project</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discuss Your Requirements',
    description: 'Tell me about your project, what data you need, what you want automated, or what app you want to build. I\'ll provide a clear scope and estimate within 24 hours.',
    duration: 'Within 24h',
  },
  {
    title: 'Build & Iterate',
    description: 'I start development immediately with daily progress updates. Milestones are tested and shared with you for feedback throughout the build.',
    duration: 'Ongoing updates',
  },
  {
    title: 'Deliver & Support',
    description: 'Clean handover with full documentation and source code. I stay available post-delivery for questions, tweaks, and future enhancements.',
    duration: 'On schedule',
  },
]
</script>

<style scoped>
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
}

.step {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: var(--space-md);
  padding-bottom: var(--space-xl);
}

.step:last-child {
  padding-bottom: 0;
}

/* The connector is a single line drawn through the marker column. */
.step__marker {
  position: relative;
  display: flex;
  justify-content: center;
}

.step__marker::before {
  content: "";
  position: absolute;
  top: 1.75rem;
  bottom: calc(var(--space-xl) * -1);
  left: 50%;
  width: 1px;
  background: var(--color-rule);
}

.step:last-child .step__marker::before {
  display: none;
}

.step__num {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--color-rule-strong);
  border-radius: var(--radius-sm);
  background: var(--color-paper);
  font-family: var(--font-outlier);
  font-size: var(--text-sm);
  color: var(--color-accent);
}

.step__headline {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2xs) var(--space-sm);
}

.step__title {
  font-size: var(--text-md);
  letter-spacing: -0.02em;
}

.step__text {
  margin-top: var(--space-2xs);
  color: var(--color-muted);
  max-width: 62ch;
}
</style>
