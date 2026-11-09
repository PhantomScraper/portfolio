// Nuxt inlines each page's component CSS into <head>, then still emits
// render-blocking <link rel="stylesheet"> tags for the same /_nuxt/*.css files
// (every rule verified duplicated inline on all 25 pages, 2026-11-09). Load
// those links without blocking first paint; they still arrive for later
// client-side navigation.
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    // Nothing inlined (e.g. an error render): keep the links blocking.
    if (!html.head.some(chunk => chunk.includes('<style'))) return
    html.head = html.head.map(chunk => chunk.replace(
      /<link rel="stylesheet" href="\/_nuxt\/[^"]+\.css"[^>]*>/g,
      tag => tag.replace(/>$/, ` media="print" onload="this.media='all'">`),
    ))
  })
})
