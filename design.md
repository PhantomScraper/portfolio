# Design — Vuong Phan

A locked design system for this site. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

Produced by `hallmark redesign` (multi-page flow), run #1.

## Genre

**modern-minimal.**

The brief fires the genre's signals throughout: SaaS, API, platform, developer
tool, B2B, data pipeline, dev experience. The register is the polished dev-tool
page: confident sans display, generous whitespace, one restrained accent,
monochrome elsewhere.

Not editorial (this sells a service, it does not narrate). Not atmospheric (the
product is reliability, not mood). Not playful (the buyer is a business).

## Macrostructure family

Pages within a family share the family's shape; they vary only in component
archetypes.

- **Marketing pages** (`/`, `/web-scraping-service`, `/hire-web-scraping-developer`):
  **15 · Split Studio.** Diptych. Every major content block divides the screen:
  claim in the narrow half, proof in the wide one, separated by a hairline.
  Varies by route: the hero's proof column (code sample / terms sheet / vetting
  checklist) and the section-head numbering sequence.

  **Deviation, recorded deliberately.** Split Studio's canonical form alternates
  the diptych's direction down the page. That was built and then removed. At the
  row heights this content produces, the zigzag broke the numbered index column
  (`01`, `02`, `03` stopped lining up) and read as a layout bug rather than a
  rhythm. Row direction is fixed. The split and the hairlines carry the
  macrostructure on their own.
- **Content pages** (`/blog`): **13 · Index-First.** The page IS a list of links.
  Hairline rules between rows, no hero image, no card boxes.
- **Content pages** (`/blog/[slug]`): **02 · Long Document.** Single column,
  65ch measure, section heads emerging from the flow. No reveals.

Split Studio was chosen because the site's actual defect is rhythm, not colour:
before this redesign every section on all three marketing pages ran
`centred badge → gradient heading → centred subtitle → uniform card grid`.
The left-aligned diptych makes that rhythm impossible to fall back into.

## Theme

**Cobalt, light drop** (modern-minimal cluster). Pale-blue paper, one deep
azure signal accent, ruler-drawn hairlines, tight radii.

Anchor hue: **248** (azure). Amended from Cobalt's stock 258, which leans
violet; 248 is a cleaner, more technical blue.

- `--color-paper`      oklch(98.5% 0.008 248)  `#f6fbff`
- `--color-paper-2`    oklch(96.5% 0.020 248)  `#e9f5ff`
- `--color-paper-3`    oklch(93.5% 0.030 248)
- `--color-rule`       oklch(90%   0.032 248)  `#cee0f3`
- `--color-rule-strong` oklch(82%  0.042 248)
- `--color-neutral`    oklch(54%   0.030 248)
- `--color-muted`      oklch(46%   0.036 248)
- `--color-ink`        oklch(23%   0.040 248)  `#0c1e2f`
- `--color-ink-deep`   oklch(16%   0.045 248)
- `--color-accent`     oklch(48%   0.19  248)  `#005dc1`
- `--color-accent-hi`  oklch(60%   0.18  248)
- `--color-accent-ink` oklch(98.5% 0.008 248)
- `--color-accent-wash` oklch(94%  0.050 248)
- `--color-focus`      oklch(60%   0.19  248)

**Amendment 1 · the light drop.** The paleness lives in *surface chroma*, not in
lightness. Every surface token kept its L value and multiplied its chroma three
to five times, so the paper and rules read visibly pale-blue instead of
cool-grey while every contrast ratio stayed exactly where it was.

**The accent is the one value that is not lightened.** It sits at L=48% and
clears 4.5:1 against paper as link text. A pale accent would land near 2:1 and
make every link and CTA label unreadable. Paleness belongs to the paper; the
accent's job is contrast. **The accent covers 3% or less of any viewport.** It
marks links, focus rings, the active nav item, the on-site CTA fill, and the
small square anchor beside a section number. Nothing else.

### Amendment 2 · Upwork green, the second accent

The system carries **two** accents, which is the documented ceiling. The second
is permitted only because it carries a *rule* rather than a decoration:

> **Green means the action leaves this site for Upwork. Azure means the action
> happens here.**

So "Hire on Upwork" is green, "Get a free quote" and "Send message" are azure.
Nothing else is ever green.

| Token | Value | Measured | Allowed on |
| --- | --- | --- | --- |
| `--color-upwork` | `#14A800` | 3.04:1 on paper | glyphs, borders. **Never label text**: white on it is 3.17:1 |
| `--color-upwork-deep` | `#0F8200` | 4.98:1 with white | button fills carrying a white label |
| `--color-upwork-press` | `#0D7200` | 6.13:1 with white | hover only |

Hover on the Upwork button goes **darker**, never toward the brand value.
Brightening to `#14A800` on hover would drop the label to 3.17:1 mid-interaction.

`#108A00` was measured at 4.51:1 and rejected: it passes on paper but leaves no
margin for antialiasing or lighter font weights.

### Banned in this system

- Gradient text (`background-clip: text` with a gradient fill). The previous
  `.gradient-text` helper is deleted, not restyled.
- Blurred decorative blobs, `mix-blend-multiply` colour fields, glassmorphism.
- Re-drawn UI chrome: fake browser bars, traffic-light dots, fake title bars,
  fake device frames. Code samples sit in a plain `<figure>` with a hairline
  border and a real caption.
- Pure `#000` and pure `#fff` as surfaces. Everything is tinted toward hue 258.
- Purple, violet, or any third chromatic hue. Azure and Upwork green are the
  only two, and green is bound to the rule above.

## Typography

Three families. That is the ceiling (display + body + one outlier).

- **Display:** Space Grotesk, weights 500 / 700, style normal. Also the wordmark.
- **Body:** Geist, weights 400 / 500 / 600 (600 for `<strong>` only).
- **Outlier (mono):** JetBrains Mono, weights 400 / 500.
- Display tracking: `-0.03em`. Label tracking: `0.10em` uppercase.
- Type scale anchor: 1.25 (major third).
- `--text-display: clamp(2.5rem, 4.4vw + 0.75rem, 4.5rem)`

**Inter was removed.** It is on the banned-defaults list in the skill's
typography reference (the font every LLM reaches for first) and it was doing the
display job here as well as the body job. Geist replaces it as body; Space
Grotesk takes the display and wordmark register the site never had. JetBrains
Mono was already loaded and stays.

### The outlier's two slots

Mono is a *register*, not a third body font. It appears in exactly two roles:

1. **Code and data samples** (`<pre>`, inline `<code>`).
2. **Eyebrow labels** — the `01 / SERVICES` section numbers and small caps tags.

Stat figures use Space Grotesk with `font-variant-numeric: tabular-nums`, not
mono. Reaching for mono in a third slot means it has become a body font, which
is slop.

### Headings

- All display type is roman. `font-style: normal`. No italic headers, ever.
- Heading weight contrasts body by at least 300 units: body 400, headings 700.
- Line-height 1.05–1.15 on display, 1.6 on body.
- Semantic order is never skipped: h1 → h2 → h3.

## Spacing

4-point named scale, exposed as CSS custom properties and mirrored into
Tailwind's `spacing` so utilities and raw CSS agree.

`--space-3xs .25rem · 2xs .5rem · xs .75rem · sm 1rem · md 1.5rem · lg 2rem ·
xl 3rem · 2xl 4.5rem · 3xl 7rem`

Minimum `--space-3xl` between major sections. Sections are not subdivided into
sub-ruled rows; the section break is the rhythm.

## Motion

**Reveal pattern: none.** The page is composed, not assembled on scroll.

`@vueuse/motion` and `@vueuse/core` are in `package.json` but are imported
nowhere and are not registered in `nuxt.config.ts` modules. The project was
already motion-cut; this system makes that deliberate rather than accidental.

What remains:

- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`, `--dur-short: 160ms`, `--dur-mid: 240ms`.
- Hover and focus transitions on interactive elements only: colour, border-colour,
  background. Never transform-based bounce, never overshoot easings.
- `prefers-reduced-motion: reduce` collapses every transition to 0.01ms.

Banned: scroll-triggered fade-ins, parallax, counters that tick up, pulsing dots,
the typing/cycling text effect, `animate-pulse` as decoration.

## Microinteractions stance

- Silent success. Form success is a hairline-bordered status line, not a toast.
- Hover state on a card is a border-colour change plus a 1px accent rule, not a
  shadow lift and not a scale transform.
- Focus is always visible: `2px solid var(--color-focus)` with a 2px offset.
  Never `outline: none` without a `:focus-visible` replacement.
- Links underline on hover with `text-underline-offset: 0.2em`.

## CTA voice

- **Primary:** filled `--color-accent`, `--radius-sm` (6px), Geist 500, no shadow,
  no scale-on-press. One per view. Copy is an imperative naming the outcome
  ("Get a free quote in 24 hours"), never "Learn more".
- **Secondary:** 1px `--color-rule` border, transparent fill, same geometry.
- **Tertiary:** typographic link with an arrow (`→`), 1px underline on hover.

Pill radii are not used. Cobalt's controls are tight-radius and bordered.

## Per-page allowances

- Marketing pages MAY use enrichment, but only real material: real code, real
  output samples, real numbers, real tables. **No invented metrics, no invented
  testimonials, no invented logo walls.** Every number on this site traces to the
  Upwork profile.
- Content pages: typography only. No enrichment, no illustration.
- No page may fake a screenshot, a device, or a browser window.

## What pages MUST share

- The wordmark (Space Grotesk 700, `-0.03em`) and the spider mark SVG.
- The accent colour and its placement discipline (3% or less per viewport).
- The display + body + mono font stack.
- The CTA voice: geometry, radius, padding rhythm, and imperative copy pattern.
- The section-head rhythm: mono eyebrow `NN / LABEL` in the left margin, display
  heading beneath, left-aligned. **Never centred.**
- The nav (N1b) and footer (Ft5) archetypes.

## What pages MAY differ on

- Macrostructure within the page-type family.
- The hero's proof column content per marketing route.
- The section-head numbering sequence.

## Component archetypes in use

Picked from the cookbook. Within one page, no two sections share an archetype.

| Role | Archetype | Knobs |
| --- | --- | --- |
| Nav | **N1b** Canonical SaaS three-section | centre links 5, dropdowns 1, frost-on-scroll |
| Hero (marketing) | **H2** Split diptych | ratio 6/6, right side = proof column, divider = hairline |
| Section head | **S1** Left-margin numbered | `NN / LABEL`, mono, accent square anchor |
| Features | Split Studio rows (alternating) | direction alternates per row |
| Spec / comparison | **F3** Tabular spec sheet | 3 columns, hairline every row, tabular nums |
| Process | **F4** Step sequence | numbering `01/02/03`, vertical stack, connector = line |
| Proof (numbers) | **T4** Numbered stat strip | 4-up, display weight, qualifier under |
| Proof (quotes) | **T1** Pull quote with marginalia | roman large, attribution margin-aligned |
| CTA | **C1** Outlined chip + **C3** Typographic link | rectangular, compact, arrow |
| Footer | **Ft5** Statement | sentence 38ch, wordmark under, hairline rule above meta |

**Previous nav: N1a** (wordmark + inline link row + button-right), the most
recognised AI nav fingerprint. **This build: N1b**, because the site has seven
genuine destinations and N1a is only correct at two.

**Previous footer: Ft3** (index columns + social row + tiny copyright), which is
banned for modern-minimal as the AI footer fingerprint. **This build: Ft5**,
which closes the page with a statement and carries every existing internal link
in a single meta line. Link count is unchanged; only the presentation is.

## Non-negotiables inherited from the skill

- **Mobile verified at 320 / 375 / 414 / 768 px.** No horizontal scroll.
  `overflow-x: clip` on `html` and `body`, never `hidden`. No two-line clickable
  text. Image-bearing grid tracks use `minmax(0, 1fr)`, never bare `1fr`.
  Display headers wrap inside long words (`overflow-wrap: anywhere; min-width: 0`).
  Section heads collapse to one column on mobile.
- **Locked tokens.** Every colour and every `font-family` in the codebase
  references a named token. No inline hex, no `oklch()` literal outside the token
  block, no bare `font-family: "Some Font"`.
- **Honest copy.** No fabricated metrics, testimonials, or client logos.
- **Contrast.** Body text 4.5:1 minimum against its surface; 7:1 targeted.

## Content and SEO boundary

This redesign changed the visual layer only. It did not change, and future runs
must not change without being asked:

- Any copy, heading text, or FAQ answer.
- Any route, canonical URL, or internal link target.
- Any JSON-LD block, `useSeoMeta` call, sitemap source, or OG image path.
- The EmailJS contact form's field `name` attributes (`from_name`, `reply_to`,
  `service`, `message`) or the Google Ads conversion call.

## Exports

### tokens.css

The live token block is [`assets/css/main.css`](assets/css/main.css). It is the
single source of truth; this section mirrors it for portability.

```css
:root {
  --color-paper:       oklch(98.5% 0.003 258);
  --color-paper-2:     oklch(96.5% 0.005 258);
  --color-paper-3:     oklch(93.5% 0.007 258);
  --color-rule:        oklch(89%   0.008 258);
  --color-neutral:     oklch(56%   0.010 258);
  --color-muted:       oklch(46%   0.012 258);
  --color-ink:         oklch(21%   0.015 258);
  --color-ink-deep:    oklch(14%   0.018 258);
  --color-accent:      oklch(48%   0.20  258);
  --color-accent-hi:   oklch(58%   0.19  258);
  --color-accent-ink:  oklch(98.5% 0.003 258);
  --color-accent-wash: oklch(95.5% 0.028 258);
  --color-focus:       oklch(58%   0.20  258);

  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body:    "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "JetBrains Mono", ui-monospace, monospace;

  --space-3xs: 0.25rem;  --space-2xs: 0.5rem;  --space-xs: 0.75rem;
  --space-sm:  1rem;     --space-md:  1.5rem;  --space-lg: 2rem;
  --space-xl:  3rem;     --space-2xl: 4.5rem;  --space-3xl: 7rem;

  --text-xs: 0.75rem;  --text-sm: 0.875rem; --text-base: 1rem;
  --text-md: 1.25rem;  --text-lg: 1.5625rem; --text-xl: 1.9531rem;
  --text-2xl: 2.4414rem; --text-3xl: 3.0518rem;
  --text-display:   clamp(2.5rem, 4.4vw + 0.75rem, 4.5rem);
  --text-display-s: clamp(2rem, 3vw + 0.75rem, 3.25rem);

  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1);
  --dur-short: 160ms;
  --dur-mid:   240ms;

  --radius-sm: 6px;
  --radius-md: 8px;
}
```

### Tailwind v3 bridge

`tailwind.config.ts` maps these tokens into `theme.extend` so utilities
(`text-ink`, `bg-paper-2`, `border-rule`, `font-display`) resolve to the same
custom properties. Never hard-code a colour in a utility class; if a value is
needed that has no token, lift it into the token block first and reference it.
