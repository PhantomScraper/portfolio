import type { Config } from 'tailwindcss'

/* Hallmark · design-system: design.md · designed-as-app
 *
 * Every colour and font here resolves to a custom property declared in
 * assets/css/main.css. That token block is the source of truth; this file is
 * only the bridge that lets Tailwind utilities reach it. Never hard-code a
 * colour in a utility class. If a value is needed that has no token, lift it
 * into main.css first, then reference it here.
 */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-body)'],
        mono: ['var(--font-outlier)'],
      },
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          2: 'var(--color-paper-2)',
          3: 'var(--color-paper-3)',
        },
        rule: {
          DEFAULT: 'var(--color-rule)',
          strong: 'var(--color-rule-strong)',
        },
        neutral: 'var(--color-neutral)',
        muted: 'var(--color-muted)',
        ink: {
          DEFAULT: 'var(--color-ink)',
          deep: 'var(--color-ink-deep)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hi: 'var(--color-accent-hi)',
          ink: 'var(--color-accent-ink)',
          wash: 'var(--color-accent-wash)',
        },
        focus: 'var(--color-focus)',
        upwork: {
          DEFAULT: 'var(--color-upwork)',
          deep: 'var(--color-upwork-deep)',
          press: 'var(--color-upwork-press)',
        },
        positive: {
          DEFAULT: 'var(--color-positive)',
          wash: 'var(--color-positive-wash)',
        },
        critical: {
          DEFAULT: 'var(--color-critical)',
          wash: 'var(--color-critical-wash)',
        },
      },
      // Named 4-point scale alongside Tailwind's numeric one, so `gap-md` and
      // `gap-6` can coexist while new code reaches for the named token.
      spacing: {
        '3xs': 'var(--space-3xs)',
        '2xs': 'var(--space-2xs)',
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
      },
      maxWidth: {
        measure: 'var(--measure)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
    },
  },
  plugins: [],
} satisfies Config
