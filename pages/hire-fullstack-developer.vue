<template>
  <!-- Hallmark · macrostructure: Split Studio · design-system: design.md
       Same page grammar as /hire-web-scraping-developer. The hero proof column
       is a candidate-vetting checklist, mirroring the scraping hire page. -->
  <main id="main-content">
    <!-- Hero -->
    <section class="shell band band--lead" aria-label="Hire a full stack developer">
      <div class="hero__grid">
        <div>
          <p class="eyebrow">Available for new projects</p>

          <h1 class="hero__title">
            Hire a Full Stack Developer for Data-Heavy Web Apps
          </h1>

          <p class="hero__lede">
            Dashboards, SaaS products, and internal tools built end to end on
            <strong>Vue, Nuxt, React, FastAPI, and Node.js</strong>. I am a
            <strong>Top Rated Plus freelance developer with a 5.0 rating and 7,200+
            hours on Upwork</strong>, and the same person builds your data layer and
            the application on top of it.
          </p>

          <div class="hero__actions">
            <a
              href="https://www.upwork.com/freelancers/phanvuong2"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-upwork"
            >
              Hire me on Upwork
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" class="btn btn-outline">Get a fixed quote in 24 hours</a>
          </div>

          <dl class="terms">
            <div>
              <dt>Upwork rating</dt>
              <dd>5.0, Top Rated Plus</dd>
            </div>
            <div>
              <dt>Hours worked</dt>
              <dd>7,200+</dd>
            </div>
            <div>
              <dt>Projects delivered</dt>
              <dd>50+</dd>
            </div>
          </dl>
        </div>

        <!-- Hero proof column: vetting checklist -->
        <div class="vet">
          <p class="vet__head">Five questions to ask any full stack candidate</p>
          <ol class="vet__list">
            <li v-for="(check, i) in vetting" :key="check.title">
              <span class="vet__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
              <span>
                <span class="vet__title">{{ check.title }}</span>
                <span class="vet__text">{{ check.text }}</span>
              </span>
            </li>
          </ol>
          <p class="vet__note">
            Ask these of every candidate, including me. This site is one of my answers:
            a Nuxt 3 build I designed, wrote, and deployed alone.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick answer -->
    <section class="band band--tint" aria-label="Quick answer">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">Quick answer</p>
          <div>
            <h2 class="section-head__title">Hiring a Full Stack Developer in 2026</h2>
            <p class="dateline">Published August 31, 2026</p>
          </div>
        </div>

        <dl class="qa">
          <div v-for="fact in quickAnswers" :key="fact.label">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>

        <p class="qa__note">
          Vuong Phan is a Top Rated Plus freelance full stack developer on Upwork with a
          5.0 rating across 7,200+ hours, building dashboards, SaaS applications, and
          internal tools on Vue, Nuxt, React, FastAPI, and Node.js, with a fixed scope
          and price quoted within 24 hours of your first message.
        </p>
      </div>
    </section>

    <!-- What I build -->
    <section class="band" aria-label="What you can hire me to build">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">01 / Skills</p>
          <div>
            <h2 class="section-head__title">What You Can Hire Me to Build</h2>
            <p class="section-head__lede">
              Most of my full stack work sits on top of data: scraped, integrated, or
              synced from other systems. One developer owns the pipeline, the API, and the UI.
            </p>
          </div>
        </div>

        <ol class="rows">
          <li v-for="(skill, i) in skills" :key="skill.title" class="row">
            <div class="row__lead">
              <span class="row__index tnum">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="row__title">{{ skill.title }}</h3>
            </div>
            <p class="row__text">{{ skill.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Hire by stack -->
    <section class="band band--tint" aria-label="Hire by technology stack">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">02 / By stack</p>
          <div>
            <h2 class="section-head__title">Hire by Stack</h2>
            <p class="section-head__lede">
              Already know your stack? These are the technologies I ship with daily,
              with the depth to take over an existing codebase rather than rewrite it.
            </p>
          </div>
        </div>

        <dl class="cases">
          <div v-for="stack in stacks" :key="stack.title" class="cases__row">
            <dt>{{ stack.title }}</dt>
            <dd>
              {{ stack.text }}
              <NuxtLink v-if="stack.link" :to="stack.link" class="cases__link">{{ stack.linkText }} →</NuxtLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Rates -->
    <section class="band" aria-label="Full stack developer rates">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">03 / Rates</p>
          <div>
            <h2 class="section-head__title">What It Costs to Hire a Full Stack Developer</h2>
            <p class="section-head__lede">
              Market ranges for 2026, so you can sanity-check any quote, including mine.
              Every project I take gets a fixed price up front.
            </p>
          </div>
        </div>

        <div class="tablewrap">
          <table class="spec">
            <thead>
              <tr>
                <th scope="col">Engagement</th>
                <th scope="col" class="spec__mine">Senior freelancer</th>
                <th scope="col">Development agency</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rates" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td class="spec__mine">{{ row.freelancer }}</td>
                <td>{{ row.company }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="footnote">
          Recent build in this category:
          <NuxtLink to="/staffing-data-integration">ATS and VMS data sync for staffing agencies</NuxtLink>,
          an integration layer with a reporting UI on top.
        </p>
      </div>
    </section>

    <!-- How to hire -->
    <section class="band band--tint" aria-label="Ways to hire">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">04 / Engagement</p>
          <div>
            <h2 class="section-head__title">Three Ways to Work Together</h2>
          </div>
        </div>

        <ol class="steps">
          <li v-for="(opt, i) in hireOptions" :key="opt.title" class="step">
            <span class="step__num tnum">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="step__title">{{ opt.title }}</h3>
            <p class="step__text">{{ opt.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- FAQ -->
    <section class="band" aria-label="Hiring FAQ">
      <div class="shell">
        <div class="section-head">
          <p class="eyebrow">05 / FAQ</p>
          <div>
            <h2 class="section-head__title">Questions About Hiring a Full Stack Developer</h2>
          </div>
        </div>

        <div class="faq">
          <details v-for="faq in faqs" :key="faq.question" class="faq__item">
            <summary class="faq__q">
              <span>{{ faq.question }}</span>
              <span class="faq__mark" aria-hidden="true" />
            </summary>
            <p class="faq__a">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
const siteUrl = 'https://www.vuongphan.dev'
const pageUrl = `${siteUrl}/hire-fullstack-developer`

const vetting = [
  {
    title: 'What did you ship alone, end to end?',
    text: 'Ask for a live URL or repository, not a team credit. Full stack means one person carried the data model, the API, the UI, and the deploy.',
  },
  {
    title: 'Where does the data come from?',
    text: 'Most real apps live on external data: APIs, scraped sources, synced systems. A developer who can build that layer saves you a second hire.',
  },
  {
    title: 'Who deploys it, and how?',
    text: 'The answer should include Docker, environments, CI, and a hosting bill in their name at some point. "The client handles hosting" is a warning sign.',
  },
  {
    title: 'What happens when it breaks at 2am?',
    text: 'Logging, error alerts, and a stated response time. Software that nobody watches is software that fails silently.',
  },
  {
    title: 'Can they say no to features?',
    text: 'Scope discipline is what ships an MVP in weeks instead of quarters. A good developer pushes back on the feature list before writing code.',
  },
]

const quickAnswers = [
  { label: 'Hourly rate', value: 'From $25 per hour. Senior freelance full stack developers typically charge $30 to $80 per hour in 2026' },
  { label: 'Internal tool', value: '$1,500 to $6,000 fixed for a dashboard or internal tool, first version' },
  { label: 'SaaS MVP', value: '$3,000 to $15,000 fixed for a working v1, typically 2 to 6 weeks' },
  { label: 'Quote', value: 'Fixed scope and price within 24 hours of your first message' },
  { label: 'Stack', value: 'Nuxt, Vue, React on the front; FastAPI, Node.js, PostgreSQL, MongoDB behind; Docker, AWS, Vercel' },
  { label: 'Track record', value: '5.0 rating, Top Rated Plus, 7,200+ hours and 50+ projects on Upwork' },
]

const skills = [
  {
    title: 'SaaS applications and MVPs',
    text: 'A working first version in weeks: authentication, roles, the core workflow, and a deploy pipeline. Scope-first process so the v1 is small enough to ship and solid enough to grow.',
  },
  {
    title: 'Dashboards and admin panels',
    text: 'Analytics and operations UIs on top of your database, third-party APIs, or scraped data: charts, filters, search, exports, and role-based access.',
  },
  {
    title: 'Internal tools',
    text: 'The app that replaces the shared spreadsheet: CRUD screens, approvals, audit trails, imports and exports, built fast and shaped around how your team already works.',
  },
  {
    title: 'REST and GraphQL APIs',
    text: 'FastAPI and Node.js backends that are documented, versioned, and tested, with background jobs, queues, and webhooks where the work is asynchronous.',
  },
  {
    title: 'Data-heavy backends',
    text: 'Pipelines, schedulers, and queue-based processing feeding the UI, with PostgreSQL schemas designed for the queries the product actually makes.',
  },
  {
    title: 'AI features',
    text: 'LLM-powered parsing, search over your own data, chat interfaces, and real-time voice agents on LiveKit, integrated into the product rather than bolted on.',
  },
]

const stacks = [
  {
    title: 'Hire a Nuxt or Vue.js developer',
    text: 'Production Vue 3 and Nuxt 3: SSR, SEO-critical marketing sites, dashboards, and component libraries. This site is a live example, designed, built, and deployed solo.',
    link: '/',
    linkText: 'See a live Nuxt 3 build',
  },
  {
    title: 'Hire a React developer',
    text: 'SPAs and admin interfaces with React, TypeScript, and modern state patterns. Comfortable dropping into an existing component codebase and matching its conventions.',
  },
  {
    title: 'Hire a FastAPI developer',
    text: 'Async Python APIs with Pydantic models, SQLAlchemy, background workers, and OpenAPI docs. The backend tier I reach for on data-heavy products.',
    link: '/blog/scaling-amazon-scraper-10-million-products-per-day',
    linkText: 'A backend at 10M pages a day',
  },
  {
    title: 'Hire a Node.js developer',
    text: 'Express and Fastify services, WebSocket servers, and realtime features: live feeds, notifications, and event-driven integrations.',
    link: '/blog/reverse-engineering-private-apis',
    linkText: 'WebSocket and private API work',
  },
  {
    title: 'Hire a database and integration developer',
    text: 'PostgreSQL and MongoDB schema design, Redis queues, ETL between systems, and two-way sync with third-party platforms such as ATS and VMS tools.',
    link: '/staffing-data-integration',
    linkText: 'ATS and VMS sync service',
  },
  {
    title: 'Hire a scraping-plus-app developer',
    text: 'When the product is built on data that has to be collected first: one developer for the crawler, the pipeline, and the application. This combination is my core specialty.',
    link: '/hire-web-scraping-developer',
    linkText: 'Hire a web scraping developer',
  },
]

const rates = [
  { label: 'Hourly rate', freelancer: '$30 - $80 / hour for senior full stack developers', company: '$100 - $250 / hour blended agency rate' },
  { label: 'Internal tool or dashboard, v1', freelancer: '$1,500 - $6,000 fixed', company: '$10,000+ minimum engagement' },
  { label: 'SaaS MVP', freelancer: '$3,000 - $15,000 fixed', company: '$25,000 - $100,000' },
  { label: 'Ongoing development', freelancer: '$500 - $3,000 / month part-time', company: 'Dedicated team retainers' },
  { label: 'Kickoff', freelancer: 'Days, quote within 24 hours', company: 'Weeks of discovery and onboarding' },
]

const hireOptions = [
  {
    title: '1. Hire through Upwork',
    text: 'Hourly or fixed price with escrow protection, verified work history, and a public 5.0 rated track record. The safest option for a first project together.',
  },
  {
    title: '2. Fixed-scope build',
    text: 'Describe the product through the contact form and get a fixed scope, price, and timeline within 24 hours. Milestone-based delivery so you see working software early.',
  },
  {
    title: '3. Ongoing development',
    text: 'A part-time monthly arrangement after the v1 ships: new features, fixes, and infrastructure kept healthy by the person who built it.',
  },
]

const faqs = [
  {
    question: 'How much does it cost to hire a full stack developer?',
    answer: 'Senior freelance full stack developers charge $30 to $80 per hour in 2026. Typical fixed prices: $1,500 to $6,000 for an internal tool or dashboard, and $3,000 to $15,000 for a SaaS MVP, depending on scope. Development agencies charge $100 to $250 per hour blended and usually start at $25,000 for an MVP. My own hourly rate starts at $25 per hour, and I quote every project as a fixed price within 24 hours.',
  },
  {
    question: 'What stack do you build with?',
    answer: 'Nuxt, Vue 3, or React with TypeScript on the frontend; FastAPI or Node.js on the backend; PostgreSQL or MongoDB for storage; Redis for queues; Docker for packaging; and deployment on AWS, Vercel, or your own server. I pick the smallest stack that serves the product, and I am comfortable joining an existing codebase instead of proposing a rewrite.',
  },
  {
    question: 'Can you build the app and the data pipeline behind it?',
    answer: 'Yes, and this is the main reason clients pick me over a generalist. Around half of my full stack projects involve data that must be scraped, integrated, or synced from other systems first. Hiring one developer for the crawler, the pipeline, and the application removes an integration handoff and keeps accountability in one place.',
  },
  {
    question: 'Can you take over an existing codebase?',
    answer: 'Yes. I start with a short paid audit: run it locally, map the architecture, list the risks, and propose the smallest set of changes that unblocks you. Most inherited codebases need maintenance and focused fixes, not the rewrite a new agency will try to sell you.',
  },
  {
    question: 'How long does an MVP take?',
    answer: 'A focused MVP ships in 2 to 6 weeks. The variable is scope, not typing speed, so the first thing I do is cut the feature list to the workflow that proves the product. You see a deployed, clickable version within the first two weeks and working software at every milestone after that.',
  },
  {
    question: 'Do you do frontend-only or backend-only work?',
    answer: 'Yes to both. Common engagements: building a Vue or React UI against your existing API, or building a FastAPI or Node.js backend for a team that owns its own frontend. Full stack means I am equally at home on either side, not that I only take end-to-end builds.',
  },
  {
    question: 'Can you add AI features to an existing product?',
    answer: 'Yes. Recent work includes LLM document parsing pipelines, retrieval and search over internal data, chat interfaces on OpenAI and Claude APIs, and real-time voice agents built on LiveKit. I integrate AI as a feature with error handling and cost controls, not as a demo.',
  },
  {
    question: 'What do you need from me to give a quote?',
    answer: 'Three things: what the app should do, who will use it, and the two or three features it cannot launch without. From that I return a fixed scope, price, and timeline within 24 hours. You do not need a specification document; a plain-language description is enough.',
  },
]

useSeoMeta({
  title: 'Hire a Full Stack Developer | Vue, Nuxt, FastAPI, Node',
  description: 'Hire a freelance full stack developer for dashboards, SaaS apps, and internal tools. Vue, Nuxt, React, FastAPI, Node.js. Fixed quote in 24 hours.',
  ogType: 'website',
  ogUrl: pageUrl,
  ogTitle: 'Hire a Full Stack Developer | Vue, Nuxt, FastAPI, Node',
  ogDescription: 'Hire a freelance full stack developer for dashboards, SaaS apps, and internal tools. Vue, Nuxt, React, FastAPI, Node.js. Fixed quote in 24 hours.',
  ogImage: `${siteUrl}/og/pages/hire-fullstack-developer.png`,
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og/pages/hire-fullstack-developer.png`,
})

useHead({
  titleTemplate: '%s',
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Phan Vuong',
            url: siteUrl,
            jobTitle: 'Freelance Full-Stack Developer | Web Scraping and Automation Engineer',
            description: 'Top Rated Plus freelance developer on Upwork with a 5.0 rating and 7,200+ hours: full-stack development, web scraping, automation, and API integration.',
            sameAs: [
              'https://www.upwork.com/freelancers/phanvuong2',
              'https://github.com/hienvuong2810',
            ],
            knowsAbout: [
              'Full-Stack Development',
              'Vue.js',
              'NuxtJS',
              'React',
              'TypeScript',
              'FastAPI',
              'Node.js',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'AWS',
              'SaaS Development',
              'Internal Tools',
              'Dashboards',
              'AI Integration',
              'Web Scraping',
            ],
          },
          {
            '@type': 'Service',
            '@id': `${pageUrl}#service`,
            name: 'Freelance Full Stack Developer for Hire',
            serviceType: 'Full-Stack Web Development',
            description: 'Hire a Top Rated Plus freelance full stack developer: dashboards, SaaS applications, internal tools, and APIs on Vue, Nuxt, React, FastAPI, and Node.js. 5.0 rating and 7,200+ hours on Upwork.',
            provider: { '@id': `${siteUrl}/#person` },
            areaServed: 'Worldwide',
            url: pageUrl,
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '1500',
              description: 'Internal tools and dashboards from $1,500 fixed. SaaS MVPs from $3,000. Ongoing development from $500 per month. Fixed quote within 24 hours.',
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${pageUrl}#webpage`,
            url: pageUrl,
            name: 'Hire a Full Stack Developer | Vue, Nuxt, FastAPI, Node',
            description: 'Hire a freelance full stack developer for dashboards, SaaS apps, and internal tools. Vue, Nuxt, React, FastAPI, Node.js. Fixed quote in 24 hours.',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#person` },
            inLanguage: 'en-US',
            datePublished: '2026-08-31',
            dateModified: '2026-08-31',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'Hire a Full Stack Developer', item: pageUrl },
              ],
            },
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ],
      }),
    },
  ],
})
</script>

<style scoped>
.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-xl);
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
    gap: var(--space-2xl);
    align-items: start;
  }
}

.hero__title {
  margin-top: var(--space-md);
  font-size: var(--text-display-s);
  line-height: 1.06;
  max-width: 18ch;
}

.hero__lede {
  margin-top: var(--space-md);
  font-size: var(--text-md);
  color: var(--color-muted);
  max-width: 54ch;
}

.hero__lede strong {
  font-weight: 500;
  color: var(--color-ink);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs);
  margin-top: var(--space-lg);
}

.terms {
  margin: var(--space-xl) 0 0;
  border-top: 1px solid var(--color-rule);
}

.terms > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2xs) var(--space-md);
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
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

/* Hero proof column */
.vet {
  padding: var(--space-md);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  background: var(--color-paper-2);
}

.vet__head {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.vet__list {
  list-style: none;
  margin: var(--space-sm) 0 0;
  padding: 0;
}

.vet__list > li {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: var(--space-2xs);
  padding-block: var(--space-2xs);
  border-top: 1px solid var(--color-rule);
}

.vet__num {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-accent);
  padding-top: 0.2rem;
}

.vet__title {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: -0.01em;
  color: var(--color-ink);
}

.vet__text {
  display: block;
  margin-top: 0.1rem;
  font-size: var(--text-sm);
  color: var(--color-muted);
}

.vet__note {
  margin-top: var(--space-sm);
  padding-top: var(--space-2xs);
  border-top: 1px solid var(--color-rule);
  font-size: var(--text-xs);
  color: var(--color-neutral);
}

/* Quick answer fact list */
.dateline {
  margin-top: var(--space-3xs);
  font-size: var(--text-xs);
  color: var(--color-neutral);
}

.qa {
  margin: 0;
  border-top: 1px solid var(--color-rule);
}

.qa > div {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-3xs) var(--space-lg);
  padding-block: var(--space-2xs);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .qa > div {
    grid-template-columns: 12rem minmax(0, 1fr);
  }
}

.qa dt {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
  padding-top: 0.15rem;
}

.qa dd {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.qa__note {
  margin-top: var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-muted);
  max-width: 72ch;
}

/* Split Studio rows */
.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

.row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-2xs);
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 900px) {
  .row {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: var(--space-2xl);
    align-items: start;
  }
}

.row__lead {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
}

.row__index {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-accent);
  flex: none;
}

.row__title {
  font-size: var(--text-base);
  line-height: 1.25;
}

.row__text {
  color: var(--color-muted);
  font-size: var(--text-sm);
  max-width: 66ch;
}

/* Catalogue rows */
.cases {
  margin: 0;
  border-top: 1px solid var(--color-rule);
}

.cases__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-3xs);
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .cases__row {
    grid-template-columns: 16rem minmax(0, 1fr);
    gap: var(--space-lg);
    align-items: baseline;
  }
}

.cases dt {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.cases dd {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-muted);
  max-width: 66ch;
}

.cases__link {
  display: inline-block;
  margin-left: var(--space-3xs);
  color: var(--color-accent);
  white-space: nowrap;
}

.cases__link:hover {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

/* F3 · rates table */
.tablewrap {
  overflow-x: auto;
}

.spec {
  width: 100%;
  min-width: 38rem;
  border-collapse: collapse;
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
}

.spec thead th {
  text-align: left;
  padding: var(--space-2xs) var(--space-xs);
  border-bottom: 1px solid var(--color-rule-strong);
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.spec tbody th {
  text-align: left;
  padding: var(--space-xs);
  border-bottom: 1px solid var(--color-rule);
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--color-ink);
  vertical-align: top;
}

.spec td {
  padding: var(--space-xs);
  border-bottom: 1px solid var(--color-rule);
  vertical-align: top;
  color: var(--color-muted);
}

.spec__mine {
  background: var(--color-accent-wash);
  color: var(--color-ink);
}

thead .spec__mine {
  color: var(--color-accent);
}

.footnote {
  margin-top: var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-neutral);
}

.footnote a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

/* F4 · engagement options */
.steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-rule);
}

@media (min-width: 900px) {
  .steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--space-2xl);
  }
}

.step {
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--color-rule);
}

.step__num {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  color: var(--color-accent);
}

.step__title {
  margin-top: var(--space-2xs);
  font-size: var(--text-base);
  line-height: 1.25;
}

.step__text {
  margin-top: var(--space-2xs);
  font-size: var(--text-sm);
  color: var(--color-muted);
}

/* Disclosure list */
.faq {
  border-top: 1px solid var(--color-rule);
  max-width: 72ch;
}

.faq__item {
  border-bottom: 1px solid var(--color-rule);
}

.faq__q {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-md);
  padding-block: var(--space-md);
  cursor: pointer;
  list-style: none;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: -0.02em;
  line-height: 1.35;
  color: var(--color-ink);
  transition: color var(--dur-short) var(--ease-out);
}

.faq__q::-webkit-details-marker {
  display: none;
}

.faq__q:hover {
  color: var(--color-accent);
}

.faq__mark {
  position: relative;
  flex: none;
  width: 0.75rem;
  height: 0.75rem;
  margin-top: 0.3rem;
}

.faq__mark::before,
.faq__mark::after {
  content: "";
  position: absolute;
  inset: 50% 0 auto 0;
  height: 1px;
  background: var(--color-neutral);
}

.faq__mark::after {
  transform: rotate(90deg);
  transition: opacity var(--dur-short) var(--ease-out);
}

.faq__item[open] .faq__mark::after {
  opacity: 0;
}

.faq__a {
  padding-bottom: var(--space-md);
  color: var(--color-muted);
  max-width: 68ch;
}
</style>
