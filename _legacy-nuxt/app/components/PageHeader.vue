<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="slide-enter-top text-2xl font-bold mb-6 md:mb-8 md:text-4xl">
    {{ title }}
  </h1>
</template>
