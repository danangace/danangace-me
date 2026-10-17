// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // Static output keeps hosting portable (Vercel today, Cloudflare later).
  output: 'static',
  site: 'https://danangace.me',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
