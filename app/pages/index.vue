<script setup lang="ts">
const content = [
  {
    title: 'Working at',
    tags: [
      {
        name: 'Sekolah.mu',
        noname: true,
        url: 'https://www.sekolah.mu/',
        logo: 'https://cdn.sekolah.mu/assets/home/sekolahmu_logo.svg',
      },
    ],
  },
  {
    title: 'Current Tech Stack',
    tags: [
      {
        name: 'Vue',
        noname: false,
        url: 'https://vuejs.org/',
        logo: 'https://vuejs.org/logo.svg',
      },
      {
        name: 'Nuxt',
        noname: false,
        url: 'https://nuxt.com/',
        logo: 'https://nuxt.com/assets/design-kit/icon-green.svg',
      },
      {
        name: 'Vite',
        noname: false,
        url: 'https://vitejs.dev/',
        logo: 'https://vitejs.dev/logo.svg',
      },
      {
        name: 'Vitest',
        noname: false,
        url: 'https://vitest.dev/',
        logo: 'https://github.com/vitest-dev.png',
      },
      {
        name: 'VueUse',
        noname: false,
        url: 'https://vueuse.org/',
        logo: 'https://github.com/vueuse.png',
      },
    ],
  },
  {
    title: 'Languages',
    tags: [
      {
        name: 'JavaScript',
        noname: false,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        logo: 'https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/javascript/javascript.png',
      },
      {
        name: 'TypeScript',
        noname: false,
        url: 'https://www.typescriptlang.org/',
        logo: 'https://www.typescriptlang.org/icons/icon-48x48.png',
      },
    ],
  },
]
</script>

<template>
  <section>
    <PageHeader title="Danang Putra Bahari" />
    <p class="leading-[2] slide-enter-top">
      Hey I'm Danang Putra Bahari, work as Frontend Developer. Learning about
      web technology including design, database, backend, and DevOps.
    </p>
    <section class="content-wrapper py-6 flex flex-col gap-y-2">
      <div v-for="(item, index) in content" :key="index">
        <div class="flex items-center gap-x-2">
          <p class="flex flex-wrap gap-1 items-center">
            <span>{{ item.title }}</span>
            <a
              class="tag px-2 py-1 rounded-sm bg-gray-200 text-sm flex gap-x-1 items-center"
              v-for="(tag, tagIndex) in item.tags"
              :key="`tag_${tagIndex}`"
              :href="tag.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="tag.logo" alt="tag-content-logo" class="h-[14px]" />
              <p v-if="!tag.noname">{{ tag.name }}</p>
            </a>
          </p>
        </div>
      </div>
    </section>
    <p class="leading-[2] mb-6">
      Dreaming up cool ideas and making them come true is where my passion lies.
      I am enthusiastic about building tools that help myself and others to be
      more productive and enjoy the process of crafting.
    </p>
    <p class="leading-[2] mb-6">
      Outside of programming, I enjoy doing games and sports. I also spent my
      time with my family (wife and son). I am trying to
      <a class="porse" href="/books">list my book</a> that interesting for me.
      Also, in case you are interested, here are the
      <a class="porse" href="/tools">hardware/software</a> I use.
    </p>
    <div class="py-12 slide-enter-top">
      <p>Find me on</p>
      <div class="flex flex-wrap gap-x-2 py-4">
        <a class="porse" href="/">Twitter</a>
        <a
          class="porse"
          href="https://www.instagram.com/danangace/"
          target="_blank"
          rel="noopener noreferrer"
          >Instagram</a
        >
        <a
          class="porse"
          href="https://github.com/danangace"
          target="_blank"
          rel="noopener noreferrer"
          >Github</a
        >
        <a
          class="porse"
          href="https://www.linkedin.com/in/danangbahari/"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn</a
        >
      </div>
      <p>
        Or mail me to
        <a class="porse" href="mailto:danangbahari89@gmail.com"
          >danangbahari89@gmail.com</a
        >
      </p>
    </div>
  </section>
</template>
