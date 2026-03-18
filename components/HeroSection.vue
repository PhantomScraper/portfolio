<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-16 hero-gradient grid-pattern overflow-hidden"
    aria-label="Hero"
  >
    <!-- Decorative blobs -->
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" aria-hidden="true" />
    <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: text -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="badge w-fit">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            Available for new projects
          </div>

          <!-- H1 -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Automate.
            <span class="gradient-text block">Scrape.</span>
            Scale.
          </h1>

          <!-- Subtext -->
          <p class="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg">
            Python &amp; full-stack engineer specializing in <strong class="text-slate-700">web scraping</strong>,
            <strong class="text-slate-700">browser automation</strong>,
            <strong class="text-slate-700">API integration</strong>, and
            <strong class="text-slate-700">voice AI</strong>.
            Delivering clean, scalable <strong class="text-slate-700">data pipelines</strong> and web applications.
          </p>

          <!-- Typing indicator -->
          <div class="flex items-center gap-3 font-mono text-sm text-slate-400">
            <span class="text-primary-500">&gt;</span>
            <span>{{ currentService }}</span>
            <span class="w-0.5 h-4 bg-primary-500 animate-pulse" aria-hidden="true" />
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#contact" class="btn-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Get a Free Quote
            </a>
            <a
              href="https://www.upwork.com/freelancers/phanvuong2"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline"
            >
              View Upwork Profile
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <!-- Trust indicators -->
          <div class="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-500">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span><strong class="text-slate-700">5.0</strong> on Upwork</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Top Rated Freelancer</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>

        <!-- Right: code card -->
        <div class="hidden lg:block relative">
          <div class="bg-slate-900 rounded-2xl shadow-2xl shadow-slate-200 border border-slate-800 overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div class="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
              <div class="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
              <div class="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
              <span class="ml-2 text-xs text-slate-400 font-mono">scraper.py</span>
            </div>
            <div class="p-6 font-mono text-sm leading-relaxed">
              <pre class="text-slate-300 overflow-x-auto"><span class="text-violet-400">import</span> <span class="text-green-400">playwright</span>
<span class="text-violet-400">from</span> <span class="text-green-400">anti_detect</span> <span class="text-violet-400">import</span> bypass

<span class="text-slate-500"># Bypass anti-bot systems</span>
<span class="text-blue-400">async def</span> <span class="text-yellow-300">scrape_data</span>(url: <span class="text-green-400">str</span>) -> <span class="text-green-400">dict</span>:
    browser = <span class="text-violet-400">await</span> bypass.<span class="text-yellow-300">launch</span>()
    page = <span class="text-violet-400">await</span> browser.<span class="text-yellow-300">new_page</span>()

    <span class="text-slate-500"># Stealth navigation</span>
    <span class="text-violet-400">await</span> page.<span class="text-yellow-300">goto</span>(url)
    data = <span class="text-violet-400">await</span> page.<span class="text-yellow-300">extract</span>()

    <span class="text-violet-400">return</span> {
        <span class="text-orange-300">"status"</span>: <span class="text-orange-300">"success"</span>,
        <span class="text-orange-300">"records"</span>: <span class="text-green-400">len</span>(data),
        <span class="text-orange-300">"data"</span>: data
    }
</pre>
              <!-- Output simulation -->
              <div class="mt-4 pt-4 border-t border-slate-700">
                <div class="text-xs text-slate-500 mb-2">Output:</div>
                <div class="text-green-400 text-xs">
                  ✓ Anti-bot bypassed<br>
                  ✓ 1,247 records extracted<br>
                  ✓ Exported to CSV / JSON
                </div>
              </div>
            </div>
          </div>

          <!-- Floating stat cards -->
          <div class="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100">
            <div class="text-2xl font-bold text-primary-600">50+</div>
            <div class="text-xs text-slate-500">Projects done</div>
          </div>
          <div class="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span class="text-xs text-slate-600 font-medium">Available now</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400" aria-hidden="true">
      <div class="text-xs font-medium tracking-widest uppercase">Scroll</div>
      <div class="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  'Web Scraping & Data Extraction...',
  'Anti-Bot Bypass & Stealth Automation...',
  'API Integration & Reverse Engineering...',
  'Full-Stack Web Development...',
  'Voice AI with LiveKit...',
  'AI Integration & Automation...',
]

const currentService = ref(services[0])
let idx = 0

onMounted(() => {
  const interval = setInterval(() => {
    idx = (idx + 1) % services.length
    currentService.value = services[idx]
  }, 2800)
  onUnmounted(() => clearInterval(interval))
})
</script>
