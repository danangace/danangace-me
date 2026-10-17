<script setup lang="ts"></script>
<template>
  <NavBar />
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.porse {
  font-weight: inherit;
  text-decoration: none;
  border-bottom: 1px solid #b9b9b9;
  transition: border 0.4s ease-in-out;
}

.page-enter-active {
  opacity: 1;
  transition:
    transform 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
}

.page-leave-active {
  opacity: 0;
  transition:
    transform 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
}

.page-leave-to {
  opacity: 0;
}
</style>
