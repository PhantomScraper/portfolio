// Google Ads conversion tracking (gtag.js).
//
// Stays dormant until NUXT_PUBLIC_GTAG_ADS_ID is set (e.g. in Vercel), so the
// code can ship before the Google Ads account is ready. Once the env vars are
// in place it loads gtag.js and fires:
//   - a conversion on successful contact-form submit (see ContactSection.vue)
//   - a conversion on any click of the Upwork profile link (delegated below,
//     so we don't have to wire a handler into every component that links out)
export default defineNuxtPlugin(() => {
  const cfg = useRuntimeConfig().public.gtag as {
    adsId: string
    formLabel: string
    upworkLabel: string
  }
  const adsId = cfg?.adsId

  // Always provide a safe tracker so component calls never crash, even before a
  // Conversion ID is configured.
  const trackConversion = (label: string, params: Record<string, unknown> = {}) => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (!adsId || !label || typeof window === 'undefined' || !w.gtag) return
    w.gtag('event', 'conversion', {
      send_to: `${adsId}/${label}`,
      ...params,
    })
  }

  // Without a Conversion ID, do not load Google's tag at all.
  if (!adsId) {
    return { provide: { trackConversion } }
  }

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`
  document.head.appendChild(s)

  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void }
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', adsId)

  // Auto-track clicks on the Upwork profile link wherever it appears.
  if (cfg.upworkLabel) {
    document.addEventListener(
      'click',
      (e) => {
        const target = e.target as HTMLElement | null
        if (target?.closest?.('a[href*="upwork.com/freelancers"]')) {
          trackConversion(cfg.upworkLabel)
        }
      },
      { capture: true },
    )
  }

  return { provide: { trackConversion } }
})
