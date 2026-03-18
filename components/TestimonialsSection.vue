<template>
  <section
    id="testimonials"
    class="py-24 bg-slate-50"
    aria-label="Client testimonials"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="badge mx-auto mb-4">Client Reviews</div>
        <h2 class="section-title">
          What Clients Say
          <span class="gradient-text"> on Upwork</span>
        </h2>
        <p class="section-subtitle mx-auto text-center">
          Real feedback from real clients. Every review is verified on Upwork.
        </p>
      </div>

      <!-- Rating bar -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <div class="flex items-center gap-2">
          <div class="flex">
            <svg v-for="i in 5" :key="i" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">5.0</span>
        </div>
        <div class="text-slate-400 hidden sm:block">•</div>
        <div class="text-slate-500 text-sm">
          <a
            href="https://www.upwork.com/freelancers/phanvuong2"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary-600 hover:text-primary-700 font-medium hover:underline"
          >
            View all reviews on Upwork
          </a>
        </div>
      </div>

      <!-- Testimonials grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <blockquote
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="card flex flex-col hover:border-primary-200 transition-colors"
        >
          <!-- Stars -->
          <div class="flex mb-4" aria-label="5 out of 5 stars">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
            "{{ testimonial.text }}"
          </p>

          <!-- Author -->
          <footer class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <span class="text-primary-700 font-bold text-sm">{{ testimonial.initials }}</span>
            </div>
            <div>
              <cite class="not-italic font-semibold text-slate-900 text-sm">{{ testimonial.name }}</cite>
              <div class="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.546-1.14-2.546-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                Upwork Client
              </div>
            </div>
          </footer>
        </blockquote>
      </div>

      <!-- Upwork CTA -->
      <div class="text-center mt-12">
        <a
          href="https://www.upwork.com/freelancers/phanvuong2"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline"
        >
          See More Reviews on Upwork
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    text: "Vuong was an exceptional hire for our firm. He works very hard, is talented and effective, and would make a great addition to any team. Would 100% recommend him to join any team!",
    name: 'Upwork Client',
    initials: 'UC',
  },
  {
    id: 2,
    text: "Vuong was very helpful and professional. He completed my web scraping project successfully. I'm very satisfied with the quality of his work. Thank you Vuong!",
    name: 'Upwork Client',
    initials: 'UC',
  },
  {
    id: 3,
    text: "Vuong did a great job. Excellent service, knowledge, communication and expertise. We will definitely hire him for future projects.",
    name: 'Upwork Client',
    initials: 'UC',
  },
]
</script>
