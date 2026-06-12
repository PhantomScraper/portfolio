import { queryCollection } from '#imports'

// Feed published blog posts into the sitemap (@nuxtjs/sitemap source)
export default defineSitemapEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog')
    .where('draft', '=', false)
    .all()

  return posts.map(post => ({
    loc: post.path,
    lastmod: post.updated ?? post.date,
    changefreq: 'monthly' as const,
    priority: 0.7,
  }))
})
