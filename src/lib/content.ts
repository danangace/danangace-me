import { getCollection } from 'astro:content'

// Drafts show up in dev only, so unfinished writing never reaches production.
const published = ({ data }: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !data.draft

export async function getBlogs() {
  const entries = await getCollection('blogs', published)
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export async function getProjects() {
  const entries = await getCollection('projects', published)
  return entries.sort((a, b) => b.data.year - a.data.year)
}
