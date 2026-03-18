<template>
  <footer class="bg-slate-900 text-slate-400" role="contentinfo">
    <!-- Main footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
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
            <span class="font-bold text-white text-lg">Vuong Phan</span>
          </div>
          <p class="text-sm leading-relaxed mb-6">
            Full-stack engineer specializing in web scraping, automation, and voice AI.
            Building reliable systems that scale.
          </p>
          <!-- Social links -->
          <div class="flex items-center gap-3">
            <a
              href="https://www.upwork.com/freelancers/phanvuong2"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              aria-label="Upwork profile"
            >
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.546-1.14-2.546-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
              </svg>
            </a>
            <a
              href="https://github.com/hienvuong2810"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              aria-label="GitHub profile"
            >
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-semibold text-sm mb-4">Services</h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="service in footerServices" :key="service">
              <a href="#services" class="hover:text-white transition-colors">{{ service }}</a>
            </li>
          </ul>
        </div>

        <!-- Quick links -->
        <div>
          <h3 class="text-white font-semibold text-sm mb-4">Quick Links</h3>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#why-us" class="hover:text-white transition-colors">Why Choose Me</a></li>
            <li><a href="#how-it-works" class="hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#testimonials" class="hover:text-white transition-colors">Client Reviews</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
            <li>
              <a
                href="https://www.upwork.com/freelancers/phanvuong2"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >
                Upwork Profile ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm">
          © {{ new Date().getFullYear() }} Vuong Phan. All rights reserved.
        </p>
        <p class="text-xs text-slate-600">
          Web Scraping Expert · Automation Engineer · Full-Stack Developer
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerServices = [
  'Web Scraping & Data Extraction',
  'Anti-Bot Bypass & Stealth',
  'API Integration',
  'Full-Stack Development',
  'AI & Document Intelligence',
  'Voice AI with LiveKit',
]
</script>
