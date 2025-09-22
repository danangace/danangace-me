<script setup lang="ts">
const spanClass = 'text-gray-400 hover:text-neutral-700'
</script>

<template>
  <header class="grid grid-cols-[auto_1fr] p-8 sticky top-0 bg-white">
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
      <NuxtLink to="https://github.com/danangace">
        <Icon
          name="grommet-icons:github"
          style="width: 24px"
          :class="spanClass"
        />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/danangbahari/">
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
