import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'
import { z } from 'astro/zod'

// Markdown collections: one file per entry in src/content/<name>/.
const blogs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    stack: z.array(z.string()).default([]),
    url: z.url().optional(),
    repo: z.url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
})

// Data collections: a single JSON list, edited by hand.
const books = defineCollection({
  loader: file('./src/data/collections/books.json'),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(['reading', 'finished', 'want-to-read']),
    note: z.string().optional(),
    url: z.url().optional(),
  }),
})

const tools = defineCollection({
  loader: file('./src/data/collections/tools.json'),
  schema: z.object({
    name: z.string(),
    kind: z.enum(['hardware', 'software']),
    note: z.string().optional(),
    url: z.url().optional(),
  }),
})

export const collections = { blogs, projects, books, tools }
