// Single source of truth for the content on the home page.
// Text is taken from the existing Nuxt site (_legacy-nuxt/app/pages/index.vue).

export const profile = {
  name: 'Danang Putra Bahari',
  role: 'Frontend Developer',
  email: 'danangbahari89@gmail.com',
  intro:
    'Frontend developer learning web technology end to end: design, database, backend and DevOps.',
  passion:
    'Dreaming up cool ideas and making them come true is where my passion lies. I am enthusiastic about building tools that help myself and others to be more productive and enjoy the process of crafting.',
  offline:
    'Outside of programming, I enjoy games and sports. I also spend my time with my family: my wife and son.',
  work: { name: 'Sekolah.mu', url: 'https://www.sekolah.mu/' },
  stack: [
    { name: 'Vue', url: 'https://vuejs.org/' },
    { name: 'Nuxt', url: 'https://nuxt.com/' },
    { name: 'Vite', url: 'https://vitejs.dev/' },
    { name: 'Vitest', url: 'https://vitest.dev/' },
    { name: 'VueUse', url: 'https://vueuse.org/' },
  ],
  languages: [
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  ],
  nav: [
    { label: 'Blog', href: '/blogs' },
    { label: 'Projects', href: '/projects' },
  ],
  links: {
    books: '/books',
    tools: '/tools',
  },
  socials: [
    { label: 'GitHub', url: 'https://github.com/danangace' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danangbahari/' },
    { label: 'X', url: 'https://x.com/danangace' },
    { label: 'Instagram', url: 'https://www.instagram.com/danangace/' },
  ],
}
