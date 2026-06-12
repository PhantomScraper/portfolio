// Generate a branded Open Graph image (1200x630 PNG) for each blog article.
// Reads the title from each content/blog/*.md frontmatter, renders an SVG,
// and rasterizes it with sharp into public/og/blog/<slug>.png.
//
// Run locally after adding or renaming an article:  npm run og
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import sharp from 'sharp'

const BLOG_DIR = join(process.cwd(), 'content', 'blog')
const OUT_DIR = join(process.cwd(), 'public', 'og', 'blog')

mkdirSync(OUT_DIR, { recursive: true })

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Greedy word wrap by approximate character budget per line.
function wrap(text, maxChars) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    if ((line + ' ' + word).trim().length > maxChars && line) {
      lines.push(line.trim())
      line = word
    } else {
      line = (line + ' ' + word).trim()
    }
  }
  if (line) lines.push(line.trim())
  return lines
}

function buildSvg(title) {
  // Scale font down when the title is long so it always fits.
  const fontSize = title.length > 80 ? 52 : title.length > 55 ? 60 : 68
  const maxChars = Math.floor(1060 / (fontSize * 0.52))
  const lines = wrap(title, maxChars)
  const lineHeight = fontSize * 1.16
  // Vertically center the title block in the middle band.
  const blockHeight = lines.length * lineHeight
  let y = 315 - blockHeight / 2 + fontSize * 0.8

  const titleTspans = lines
    .map((l) => {
      const tspan = `<text x="70" y="${Math.round(y)}" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="800" fill="#ffffff" letter-spacing="-1">${escapeXml(l)}</text>`
      y += lineHeight
      return tspan
    })
    .join('\n  ')

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1e1b4b"/>
      <stop offset="0.55" stop-color="#4338ca"/>
      <stop offset="1" stop-color="#6d28d9"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Brand -->
  <rect x="70" y="64" width="52" height="52" rx="14" fill="#6366f1"/>
  <text x="96" y="100" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">VP</text>
  <text x="138" y="100" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#ffffff">Vuong Phan</text>

  <!-- Title -->
  ${titleTspans}

  <!-- Footer -->
  <rect x="70" y="500" width="540" height="52" rx="26" fill="rgba(255,255,255,0.15)"/>
  <text x="92" y="534" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="600" fill="#ffffff">Web Scraping &amp; Automation Guides</text>
  <text x="640" y="534" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.7)">vuongphan.dev</text>
</svg>`
}

const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
let count = 0

for (const file of files) {
  const raw = readFileSync(join(BLOG_DIR, file), 'utf8')
  const match = raw.match(/^title:\s*["'](.+?)["']\s*$/m)
  if (!match) {
    console.warn(`Skipping ${file}: no title found`)
    continue
  }
  const title = match[1]
  const slug = basename(file, '.md')
  const svg = buildSvg(title)
  const outPath = join(OUT_DIR, `${slug}.png`)
  await sharp(Buffer.from(svg)).png().toFile(outPath)
  count++
  console.log(`  ${slug}.png`)
}

console.log(`Generated ${count} OG image(s) in public/og/blog/`)
