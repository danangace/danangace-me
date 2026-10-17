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

## Migration note

`_legacy-nuxt/` holds the previous Nuxt 4 source for reference while content is
ported. It is excluded from tooling and will be deleted at cutover.
