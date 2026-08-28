<template>
  <!-- Hallmark · nav: N1b canonical SaaS three-section
       knobs: centre links 4 (1 with dropdown) · scroll: frost-on-scroll
       Previous nav was N1a (wordmark + inline link row + button-right), the
       most-recognised AI nav fingerprint. N1b is correct here because the site
       has seven genuine destinations; N1a is only correct at two. -->
  <header
    class="bar"
    :class="[scrolled && !mobileOpen ? 'bar--frosted' : '', mobileOpen ? 'bar--solid' : '']"
  >
    <nav class="shell" aria-label="Main navigation">
      <div class="flex items-center justify-between h-16 gap-md">
        <!-- Wordmark -->
        <NuxtLink to="/" class="flex items-center gap-2xs shrink-0" aria-label="Vuong Phan, home">
          <BrandMark class="w-5 h-5 text-accent" />
          <span class="font-display font-bold text-ink tracking-[-0.03em] text-[1.0625rem]">
            Vuong Phan
          </span>
        </NuxtLink>

        <!-- Centre cluster -->
        <div ref="clusterRef" class="hidden lg:flex items-center gap-3xs">
          <!-- Dropdown: groups the four service destinations -->
          <div class="relative">
            <button
              type="button"
              class="nav-link inline-flex items-center gap-3xs"
              :class="{ 'text-ink': servicesOpen }"
              aria-haspopup="true"
              :aria-expanded="servicesOpen"
              @click="servicesOpen = !servicesOpen"
            >
              Services
              <svg
                class="w-3 h-3 transition-transform"
                :class="servicesOpen ? 'rotate-180' : ''"
                style="transition-duration: var(--dur-short)"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <div
              v-if="servicesOpen"
              class="dropdown panel p-3xs"
            >
              <NuxtLink
                v-for="item in serviceMenu"
                :key="item.href"
                :to="item.href"
                class="block rounded-sm px-2xs py-2xs hover:bg-paper-2"
                @click="servicesOpen = false"
              >
                <span class="block text-sm font-medium text-ink">{{ item.label }}</span>
                <span class="block text-xs text-neutral mt-[1px]">{{ item.hint }}</span>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            v-for="link in centreLinks"
            :key="link.href"
            :to="link.href"
            class="nav-link"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Right: CTA -->
        <div class="flex items-center gap-2xs shrink-0">
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-upwork hidden sm:inline-flex"
          >
            <IconUpwork class="w-4 h-4" />
            Hire on Upwork
          </a>

          <button
            type="button"
            class="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-sm border border-rule text-ink hover:bg-paper-2"
            :aria-expanded="mobileOpen"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <svg v-else class="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile panel: every destination, flattened -->
      <div v-if="mobileOpen" class="menu lg:hidden">
        <NuxtLink
          v-for="link in allLinks"
          :key="link.href"
          :to="link.href"
          class="block py-2xs text-sm text-muted hover:text-ink whitespace-nowrap"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          href="https://www.upwork.com/freelancers/phanvuong2"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-upwork w-full mt-sm sm:hidden"
        >
          <IconUpwork class="w-4 h-4" />
          Hire on Upwork
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)
const servicesOpen = ref(false)
const clusterRef = ref<HTMLElement | null>(null)

// All seven destinations from the previous nav are preserved. The dropdown
// groups the four that belong to the service story; the rest stay inline.
const serviceMenu = [
  { href: '/web-scraping-service', label: 'Web Scraping Service', hint: 'Done-for-you data extraction' },
  { href: '/staffing-data-integration', label: 'ATS & VMS Data Sync', hint: 'Integration for staffing agencies' },
  { href: '/#services', label: 'All Services', hint: 'Scraping, APIs, full-stack, voice AI' },
  { href: '/#why-us', label: 'Why Me', hint: 'Track record and working style' },
  { href: '/#how-it-works', label: 'Process', hint: 'From brief to delivered data' },
]

const centreLinks = [
  { href: '/hire-web-scraping-developer', label: 'Hire Me' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

const allLinks = [...serviceMenu, ...centreLinks]

const route = useRoute()
watch(() => route.fullPath, () => {
  mobileOpen.value = false
  servicesOpen.value = false
})

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 16 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const onPointerDown = (e: PointerEvent) => {
    if (servicesOpen.value && !clusterRef.value?.contains(e.target as Node))
      servicesOpen.value = false
  }
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      servicesOpen.value = false
      mobileOpen.value = false
    }
  }
  document.addEventListener('pointerdown', onPointerDown)
  document.addEventListener('keydown', onKeydown)

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('pointerdown', onPointerDown)
    document.removeEventListener('keydown', onKeydown)
  })
})
</script>

<style scoped>
.bar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  background: transparent;
  transition: background-color var(--dur-mid) var(--ease-out),
              border-color var(--dur-mid) var(--ease-out);
}

.bar--frosted {
  background: var(--color-paper);
  border-bottom-color: var(--color-rule);
}

@supports (backdrop-filter: blur(1px)) {
  .bar--frosted {
    background: var(--color-paper-veil);
    backdrop-filter: blur(10px) saturate(1.4);
  }
}

/* An open menu is fully opaque, not frosted. A translucent panel over a
   display headline is unreadable, and this panel is the only nav on mobile. */
.bar--solid {
  background: var(--color-paper);
  border-bottom-color: var(--color-rule);
  backdrop-filter: none;
}

.menu {
  padding-bottom: var(--space-md);
  border-top: 1px solid var(--color-rule);
}

.dropdown {
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: var(--space-2xs);
  width: 18rem;
  background: var(--color-paper);
  box-shadow: var(--shadow-pop);
}

.nav-link {
  padding: var(--space-3xs) var(--space-2xs);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-muted);
  white-space: nowrap;
  transition: color var(--dur-short) var(--ease-out),
              background-color var(--dur-short) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-ink);
  background: var(--color-paper-2);
}

.router-link-active.nav-link {
  color: var(--color-ink);
}
</style>
