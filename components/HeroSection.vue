<template>
  <!-- Hallmark · macrostructure: Split Studio · hero: H2 split diptych
       knobs: ratio 6/6 · right side = proof column · divider = hairline
       Removed from the previous build: the fake browser window (traffic-light
       dots + `scraper.py` title bar), the blurred colour blobs, the cycling
       typing effect, and the gradient headline. -->
  <section id="hero" class="hero" aria-label="Hero">
    <div class="shell">
      <div class="hero__grid">
        <!-- Claim -->
        <div class="hero__claim">
          <p class="eyebrow">Available for new projects</p>

          <h1 class="hero__title">
            Custom Web Scraping &amp; Data Extraction
          </h1>

          <p class="hero__lede">
            A <strong>website scraping service</strong> run by one freelance developer,
            not an agency. I build <strong>custom web scrapers</strong>,
            <strong>browser automation</strong>, and
            <strong>API integrations</strong>, and deliver clean
            <strong>web data extraction</strong> as CSV, JSON, or a live API.
          </p>

          <div class="hero__actions">
            <a href="#contact" class="btn btn-primary">Get a free quote</a>
            <a
              href="https://www.upwork.com/freelancers/phanvuong2"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
            >
              View Upwork profile
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <!-- Proof line. Every figure here is on the public Upwork profile. -->
          <dl class="hero__proof">
            <div>
              <dt>Upwork rating</dt>
              <dd class="tnum">5.0</dd>
            </div>
            <div>
              <dt>Hours worked</dt>
              <dd class="tnum">7,200+</dd>
            </div>
            <div>
              <dt>Projects delivered</dt>
              <dd class="tnum">50+</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Top Rated Plus</dd>
            </div>
          </dl>
        </div>

        <!-- Proof column. A real snippet in a hairline figure with a real
             caption. No re-drawn browser or editor chrome. -->
        <div class="hero__proof-col">
          <figure class="codefig">
            <figcaption class="codefig__caption">
              <span>scraper.py</span>
              <span>Playwright</span>
            </figcaption>
            <pre><code><span class="tok-key">async def</span> <span class="tok-fn">extract</span>(url: <span class="tok-key">str</span>) -&gt; <span class="tok-key">list</span>[<span class="tok-key">dict</span>]:
    browser = <span class="tok-key">await</span> pw.chromium.<span class="tok-fn">launch</span>(
        proxy={<span class="tok-str">"server"</span>: RESIDENTIAL},
    )
    ctx = <span class="tok-key">await</span> browser.<span class="tok-fn">new_context</span>(
        user_agent=UA, locale=<span class="tok-str">"en-US"</span>,
    )
    <span class="tok-key">await</span> stealth.<span class="tok-fn">apply</span>(ctx)   <span class="tok-dim"># fingerprint parity</span>

    page = <span class="tok-key">await</span> ctx.<span class="tok-fn">new_page</span>()
    <span class="tok-key">await</span> page.<span class="tok-fn">goto</span>(url, wait_until=<span class="tok-str">"networkidle"</span>)
    <span class="tok-key">await</span> page.<span class="tok-fn">wait_for_selector</span>(<span class="tok-str">"[data-row]"</span>)

    <span class="tok-key">return await</span> page.<span class="tok-fn">eval_on_selector_all</span>(
        <span class="tok-str">"[data-row]"</span>, ROW_PARSER,
    )</code></pre>
          </figure>

          <figure class="codefig mt-sm">
            <figcaption class="codefig__caption">
              <span>output.json</span>
              <span>delivered shape</span>
            </figcaption>
            <pre><code>{
  <span class="tok-str">"sku"</span>:        <span class="tok-str">"B0C7…"</span>,
  <span class="tok-str">"title"</span>:      <span class="tok-str">"…"</span>,
  <span class="tok-str">"price"</span>:      <span class="tok-str">"…"</span>,
  <span class="tok-str">"in_stock"</span>:   <span class="tok-key">true</span>,
  <span class="tok-str">"scraped_at"</span>: <span class="tok-str">"…"</span>
}</code></pre>
          </figure>

          <p class="hero__formats">
            Same pipeline delivers to CSV, Excel, PostgreSQL, MongoDB, Google Sheets,
            or a private REST endpoint.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  padding-block: calc(4rem + var(--space-2xl)) var(--space-2xl);
}

@media (min-width: 900px) {
  .hero {
    padding-block: calc(4rem + var(--space-3xl)) var(--space-3xl);
  }
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-xl);
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-2xl);
    align-items: start;
  }

  /* The divider is a hairline in the gutter, not a rule under a card. */
  .hero__proof-col {
    padding-left: var(--space-2xl);
    border-left: 1px solid var(--color-rule);
  }
}

.hero__title {
  margin-top: var(--space-md);
  font-size: var(--text-display);
  line-height: 1.04;
  max-width: 14ch;
}

.hero__lede {
  margin-top: var(--space-md);
  font-size: var(--text-md);
  line-height: 1.6;
  color: var(--color-muted);
  max-width: 46ch;
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

.hero__proof {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* Two explicit rows + subgrid keeps every figure on one baseline even when a
     label wraps to two lines. */
  grid-template-rows: auto auto;
  gap: var(--space-md);
  margin-top: var(--space-xl);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-rule);
}

.hero__proof > div {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
  align-content: start;
}

@media (min-width: 480px) {
  .hero__proof {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.hero__proof dt {
  font-family: var(--font-outlier);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-neutral);
}

.hero__proof dd {
  margin: var(--space-3xs) 0 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-md);
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.hero__formats {
  margin-top: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--color-neutral);
  max-width: 44ch;
}
</style>
