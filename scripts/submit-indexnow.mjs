// Submit URLs to IndexNow (picked up by Bing, which also powers ChatGPT search).
// Usage:
//   node scripts/submit-indexnow.mjs                 -> submits every URL in the live sitemap
//   node scripts/submit-indexnow.mjs <url> [url...]  -> submits only the given URLs
// Run after each deploy that adds or meaningfully updates pages.

const SITE = 'https://www.vuongphan.dev'
const HOST = 'www.vuongphan.dev'
const KEY = '099cd706aebb3a7f6971afd51a7916f6'

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
}

const args = process.argv.slice(2)
const urlList = args.length ? args : await sitemapUrls()

if (!urlList.length) {
  console.error('No URLs to submit.')
  process.exit(1)
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
})

// 200 = submitted, 202 = accepted (key not yet verified). Both are success.
console.log(`IndexNow response: ${res.status} ${res.statusText}`)
console.log(`Submitted ${urlList.length} URLs:`)
for (const u of urlList) console.log(`  ${u}`)
if (res.status >= 400) {
  console.error(await res.text())
  process.exit(1)
}
