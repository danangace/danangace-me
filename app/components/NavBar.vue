<script setup lang="ts">
const spanClass = 'text-gray-400 hover:text-neutral-700'
</script>

<template>
  <header
    class="bg-neutral-50 z-10 grid grid-cols-[auto_1fr] p-4 sticky top-0 bg-white md:p-8"
  >
    <NuxtLink to="/">
      <AppLogo />
    </NuxtLink>
    <nav class="flex gap-x-4 justify-end items-center">
      <NuxtLink to="/blogs">
        <span :class="spanClass">Blog</span>
      </NuxtLink>
      <NuxtLink to="/projects">
        <span :class="spanClass">Projects</span>
      </NuxtLink>
      <NuxtLink
        to="https://github.com/danangace"
        noreferrer
        target="_blank"
        external
      >
        <Icon
          name="grommet-icons:github"
          style="width: 24px"
          :class="spanClass"
        />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/danangbahari/"
        noreferrer
        target="_blank"
        external
      >
        <Icon
          name="grommet-icons:linkedin"
          style="width: 24px"
          :class="spanClass"
        />
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped></style>
