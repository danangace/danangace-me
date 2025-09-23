<script setup lang="ts">
import { ref } from 'vue'

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

const slideEnterActive = ref(false)

const activateSlideEnter = () => {
  slideEnterActive.value = true
}

setTimeout(() => {
  activateSlideEnter()
}, 100)
</script>

<template>
  <section>
    <h1
      class="slide-enter-top text-2xl font-bold mb-6 md:mb-8 md:text-4xl"
      :class="{ active: slideEnterActive }"
    >
      Danang Putra Bahari
    </h1>
    <p
      class="leading-[2] slide-enter-top"
      :class="{ active: slideEnterActive }"
    >
      Hey I'm Danang Putra Bahari, work as Frontend Developer. Learning about
      web technology including design, database, backend, and DevOps.
    </p>
    <section
      class="slide-enter-top content-wrapper py-6 flex flex-col gap-y-2"
      :class="{ active: slideEnterActive }"
    >
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
    <p
      class="leading-[2] slide-enter-top mb-6"
      :class="{ active: slideEnterActive }"
    >
      Dreaming up cool ideas and making them come true is where my passion lies.
      I am enthusiastic about building tools that help myself and others to be
      more productive and enjoy the process of crafting.
    </p>
    <p
      class="leading-[2] slide-enter-top mb-6"
      :class="{ active: slideEnterActive }"
    >
      Outside of programming, I enjoy doing games and sports. I also spent my
      time with my family (wife and son). I am trying to
      <a class="porse" href="/">list my book</a> that interesting for me. Also,
      in case you are interested, here are the
      <a class="porse" href="/">hardware/software</a> I use.
    </p>
    <div class="py-12 slide-enter-top" :class="{ active: slideEnterActive }">
      <p>Find me on</p>
      <div class="flex flex-wrap gap-x-2 py-4">
        <a class="porse" href="/">Twitter</a>
        <a class="porse" href="/">Instagram</a>
        <a class="porse" href="/">Github</a>
        <a class="porse" href="/">LinkedIn</a>
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

<style scoped>
.slide-enter-top {
  transform: translateY(-100%);
  opacity: 0;
  transition:
    transform 1s ease-in-out,
    opacity 1s ease-in-out;
}

.slide-enter-top.active {
  transform: translateY(0);
  opacity: 1;
}

.porse {
  font-weight: inherit;
  text-decoration: none;
  border-bottom: 1px solid #b9b9b9;
  transition: border 0.3s ease-in-out;
}
</style>
