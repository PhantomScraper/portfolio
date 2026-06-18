<template>
  <section
    id="contact"
    class="py-24 bg-white"
    aria-label="Contact"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: info -->
        <div>
          <div class="badge mb-4">Get In Touch</div>
          <h2 class="section-title mb-6">
            Hire a Python &amp; Automation
            <span class="gradient-text"> Developer Today</span>
          </h2>
          <p class="text-slate-500 leading-relaxed mb-10">
            Need a web scraping expert, full-stack developer, or voice AI engineer? Tell me about
            your project and I'll respond within 24 hours with a detailed scope and quote.
            No commitment required.
          </p>

          <!-- Contact options -->
          <div class="space-y-4">
            <a
              href="https://www.upwork.com/freelancers/phanvuong2"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/40 transition-colors group"
            >
              <div class="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.546-1.14-2.546-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-slate-900 text-sm">Hire on Upwork</div>
                <div class="text-slate-500 text-xs">upwork.com/freelancers/phanvuong2</div>
              </div>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-primary-500 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>

          </div>
        </div>

        <!-- Right: form -->
        <div class="card border-slate-200">
          <form ref="formRef" novalidate @submit.prevent="handleSubmit">
            <div class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label for="contact-name" class="block text-sm font-medium text-slate-700 mb-1.5">
                    Your Name <span class="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    name="from_name"
                    type="text"
                    autocomplete="name"
                    required
                    placeholder="John Smith"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                  >
                </div>
                <div>
                  <label for="contact-email" class="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address <span class="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    name="reply_to"
                    type="email"
                    autocomplete="email"
                    required
                    placeholder="you@company.com"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                  >
                </div>
              </div>

              <div>
                <label for="contact-service" class="block text-sm font-medium text-slate-700 mb-1.5">
                  Service Needed
                </label>
                <select
                  id="contact-service"
                  v-model="form.service"
                  name="service"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                >
                  <option value="" disabled>Select a service...</option>
                  <option>Web Scraping & Data Extraction</option>
                  <option>Anti-Bot Bypass & Stealth Automation</option>
                  <option>API Integration & Reverse Engineering</option>
                  <option>Full-Stack Web Development</option>
                  <option>Automation Tools & Desktop Apps</option>
                  <option>AI & LLM Integration</option>
                  <option>Voice AI & Conversational Bots</option>
                  <option>Other / Consultation</option>
                </select>
              </div>

              <div>
                <label for="contact-message" class="block text-sm font-medium text-slate-700 mb-1.5">
                  Project Details <span class="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Describe your project: what data you need, what you want automated, your timeline and budget..."
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none"
                />
              </div>

              <!-- Status messages -->
              <transition name="fade">
                <div
                  v-if="status"
                  class="text-sm px-4 py-3 rounded-xl flex items-center gap-2"
                  :class="status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'"
                  role="alert"
                >
                  <svg v-if="status === 'success'" class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <svg v-else class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ statusMessage }}
                </div>
              </transition>

              <button
                type="submit"
                class="btn-primary w-full justify-center"
                :disabled="loading"
              >
                <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {{ loading ? 'Sending...' : 'Send Message' }}
              </button>

              <p class="text-xs text-slate-400 text-center">
                I'll reply within 24 hours. No spam, ever.
              </p>
            </div>
          </form>
        </div>
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
    statusMessage.value = 'Message sent! I\'ll get back to you within 24 hours.'
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
