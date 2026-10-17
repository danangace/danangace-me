import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getBlogs } from '../lib/content'
import { profile } from '../data/profile'

export async function GET(context: APIContext) {
  const posts = await getBlogs()
  return rss({
    title: `${profile.name} - Blog`,
    description: "Notes on frontend development and what I'm learning.",
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blogs/${p.id}/`,
    })),
  })
}
