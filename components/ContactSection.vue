<template>
  <!-- Hallmark · C2 inline form as CTA, in the Split Studio diptych.
       The EmailJS field names (from_name / reply_to / service / message), the
       submit handler, and the Google Ads conversion call are untouched. -->
  <section id="contact" class="band" aria-label="Contact">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">08 / Contact</p>
        <div>
          <h2 class="section-head__title">Hire a Python &amp; Automation Developer Today</h2>
          <p class="section-head__lede">
            Need a web scraping expert, full-stack developer, or voice AI engineer? Tell me about
            your project and I'll respond within 24 hours with a detailed scope and quote.
            No commitment required.
          </p>
        </div>
      </div>

      <div class="contact">
        <!-- Direct channel -->
        <div class="contact__aside">
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="channel"
          >
            <IconUpwork class="channel__icon" />
            <span>
              <span class="channel__title">Hire on Upwork</span>
              <span class="channel__sub">upwork.com/freelancers/phanvuong2</span>
            </span>
            <span class="channel__arrow" aria-hidden="true">↗</span>
          </a>

          <dl class="terms">
            <div>
              <dt>Response time</dt>
              <dd>Within 24 hours</dd>
            </div>
            <div>
              <dt>First deliverable</dt>
              <dd>Fixed scope and quote</dd>
            </div>
            <div>
              <dt>Sample extraction</dt>
              <dd>Free, before you commit</dd>
            </div>
          </dl>
        </div>

        <!-- Form -->
        <form ref="formRef" class="form" novalidate @submit.prevent="handleSubmit">
          <div class="form__pair">
            <div>
              <label for="contact-name" class="field-label">
                Your name <span aria-hidden="true" style="color: var(--color-critical)">*</span>
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                name="from_name"
                type="text"
                autocomplete="name"
                required
                placeholder="John Smith"
                class="field"
              >
            </div>
            <div>
              <label for="contact-email" class="field-label">
                Email address <span aria-hidden="true" style="color: var(--color-critical)">*</span>
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                name="reply_to"
                type="email"
                autocomplete="email"
                required
                placeholder="you@company.com"
                class="field"
              >
            </div>
          </div>

          <div>
            <label for="contact-service" class="field-label">Service needed</label>
            <select
              id="contact-service"
              v-model="form.service"
              name="service"
              class="field"
            >
              <option value="" disabled>Select a service...</option>
              <option>Web Scraping &amp; Data Extraction</option>
              <option>Anti-Bot Bypass &amp; Stealth Automation</option>
              <option>API Integration &amp; Reverse Engineering</option>
              <option>Full-Stack Web Development</option>
              <option>Automation Tools &amp; Desktop Apps</option>
              <option>AI &amp; LLM Integration</option>
              <option>Voice AI &amp; Conversational Bots</option>
              <option>Other / Consultation</option>
            </select>
          </div>

          <div>
            <label for="contact-message" class="field-label">
              Project details <span aria-hidden="true" style="color: var(--color-critical)">*</span>
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              required
              rows="6"
              placeholder="Describe your project: what data you need, what you want automated, your timeline and budget..."
              class="field"
              style="resize: vertical"
            />
          </div>

          <!-- Silent success. A hairline status line, never a toast. -->
          <p
            v-if="status"
            class="status"
            :class="status === 'success' ? 'status--ok' : 'status--bad'"
            role="alert"
          >
            {{ statusMessage }}
          </p>

          <div class="form__submit">
            <button type="submit" class="btn btn-primary" :disabled="loading">
              {{ loading ? 'Sending' : 'Send message' }}
            </button>
            <span class="form__note">I'll reply within 24 hours. No spam, ever.</span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()
const { $trackConversion } = useNuxtApp()
const formRef = ref<HTMLFormElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  service: '',
  message: '',
})

const loading = ref(false)
const status = ref<'success' | 'error' | null>(null)
const statusMessage = ref('')

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return

  loading.value = true
  status.value = null

  try {
    await emailjs.sendForm(
      config.public.emailjsServiceId as string,
      config.public.emailjsTemplateId as string,
      formRef.value!,
      { publicKey: config.public.emailjsPublicKey as string },
    )
    status.value = 'success'
    statusMessage.value = 'Message sent. I\'ll get back to you within 24 hours.'
    // Google Ads: primary conversion (no-op until a Conversion ID is configured)
    $trackConversion((config.public.gtag as { formLabel: string })?.formLabel)
    form.name = ''
    form.email = ''
    form.service = ''
    form.message = ''
  }
  catch {
    status.value = 'error'
    statusMessage.value = 'Something went wrong. Please reach out directly on Upwork.'
  }
  finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-xl);
}

@media (min-width: 900px) {
  .contact {
    grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
    gap: var(--space-2xl);
    align-items: start;
  }
}

.channel {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  transition: border-color var(--dur-short) var(--ease-out);
}

.channel:hover {
  border-color: var(--color-upwork);
}

.channel__icon {
  width: 1.25rem;
  height: 1.25rem;
  flex: none;
  color: var(--color-upwork);
}

.channel__title {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink);
}

.channel__sub {
  display: block;
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-neutral);
  overflow-wrap: anywhere;
}

.channel__arrow {
  margin-left: auto;
  color: var(--color-neutral);
}

.terms {
  margin: var(--space-md) 0 0;
  border-top: 1px solid var(--color-rule);
}

.terms > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2xs);
  padding-block: var(--space-2xs);
  border-bottom: 1px solid var(--color-rule);
}

.terms dt {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.terms dd {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.form {
  display: grid;
  gap: var(--space-md);
  padding: var(--space-md);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  background: var(--color-paper-2);
}

@media (min-width: 640px) {
  .form {
    padding: var(--space-lg);
  }
}

.form__pair {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-md);
}

@media (min-width: 560px) {
  .form__pair {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.form__submit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2xs) var(--space-sm);
}

.form__note {
  font-size: var(--text-xs);
  color: var(--color-neutral);
}

.status {
  padding: var(--space-2xs) var(--space-xs);
  border: 1px solid;
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
}

.status--ok {
  border-color: var(--color-positive);
  background: var(--color-positive-wash);
  color: var(--color-positive);
}

.status--bad {
  border-color: var(--color-critical);
  background: var(--color-critical-wash);
  color: var(--color-critical);
}
</style>
