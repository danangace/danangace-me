# danangace.me

Personal website of Danang Putra Bahari, built with [Astro](https://astro.build) and Tailwind CSS v4.

## Stack

- Astro 7 (static output, view transitions via `<ClientRouter />`)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `astro-icon` with Lucide icons
- pnpm, Node 24 (see `.nvmrc`)

## Commands

| Command        | Action                           |
| -------------- | -------------------------------- |
| `pnpm dev`     | Start the dev server             |
| `pnpm build`   | Build the static site to `dist/` |
| `pnpm preview` | Preview the production build     |
| `pnpm check`   | Type-check Astro and TS files    |
| `pnpm lint`    | Run ESLint                       |
| `pnpm format`  | Format with Prettier             |

## Content

- Blog posts: `src/content/blogs/*.md`
- Projects: `src/content/projects/*.md`
- Books: `src/data/collections/books.json`
- Tools: `src/data/collections/tools.json`

Entries with `draft: true` show in `pnpm dev` and are left out of production.
Schemas live in `src/content.config.ts`. Home page text lives in `src/data/profile.ts`.

## Structure

- `src/layouts/BaseLayout.astro`: head, SEO meta, nav, footer
- `src/styles/global.css`: design tokens (light and dark)
- `src/components/`: nav, footer, page header, list, empty state, logo mark
- `src/pages/`: home, blogs, projects, books, tools, 404, `rss.xml`

## Deploy

Static output, so it runs on Vercel or Cloudflare Pages. Use Node 24 and `pnpm build`.
