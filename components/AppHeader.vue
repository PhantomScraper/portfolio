<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 group" aria-label="Vuong Phan - Home">
          <div class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center group-hover:bg-primary-700 transition-colors">
            <svg class="w-4 h-4 text-white" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="10" y1="0.5" x2="10" y2="4" stroke="currentColor" stroke-width="0.8"/>
              <circle cx="10" cy="6.2" r="2.2" fill="currentColor"/>
              <circle cx="9" cy="5.9" r="0.5" fill="white"/>
              <circle cx="11" cy="5.9" r="0.5" fill="white"/>
              <line x1="10" y1="8.4" x2="10" y2="9.6" stroke="currentColor" stroke-width="1.1"/>
              <ellipse cx="10" cy="13" rx="2.8" ry="3.2" fill="currentColor"/>
              <path d="M7.8 8.5 C6.2 7.8 4.8 7.2 3 6.5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              <path d="M7.5 10 C5.8 9.7 4.2 9.4 2.5 9" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              <path d="M7.5 11.8 C5.8 12.2 4.2 12.7 2.5 13.2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              <path d="M7.8 13.5 C6.2 14.5 4.8 15.3 3.5 16" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              <path d="M12.2 8.5 C13.8 7.8 15.2 7.2 17 6.5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              <path d="M12.5 10 C14.2 9.7 15.8 9.4 17.5 9" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              <path d="M12.5 11.8 C14.2 12.2 15.8 12.7 17.5 13.2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              <path d="M12.2 13.5 C13.8 14.5 15.2 15.3 16.5 16" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </div>
          <span class="font-bold text-slate-900 text-lg hidden sm:block">Vuong Phan</span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-150"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA -->
        <div class="flex items-center gap-3">
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-sm py-2 px-4"
            aria-label="Hire me on Upwork"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.546-1.14-2.546-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
            </svg>
            Hire on Upwork
          </a>

          <!-- Mobile menu button -->
          <button
            class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            :aria-expanded="mobileOpen"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileOpen" class="md:hidden pb-4 border-t border-slate-100 mt-2 pt-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#why-us', label: 'Why Me' },
  { href: '/#how-it-works', label: 'Process' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

onMounted(() => {
  const handler = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>
