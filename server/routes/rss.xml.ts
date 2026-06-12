import { queryCollection } from '#imports'

const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.vuongphan.dev'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}${post.path}`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Vuong Phan - Web Scraping &amp; Automation Guides</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical guides on web scraping, anti-bot bypass, proxies, and automation.</description>
    <language>en-US</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  setHeader(event, 'content-type', 'application/rss+xml; charset=UTF-8')
  return xml
})
