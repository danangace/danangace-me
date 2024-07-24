<script lang="ts" setup>
useHead({
  title: 'Danang Putra Bahari - Frontend Developer',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://danangace.me/' },
    { property: 'og:title', content: 'Danang Putra Bahari - Frontend Developer' },
    { property: 'og:image', content: '' },
    { property: 'og:description', content: '' }
  ]
})
</script>
<template>
  <div
    id="base-page"
    class="pt-36 pb-20 lg:pt-64 lg:pb-28">
    <!-- HERO -->
    <section>
      <p class="mb-2 text-base lg:text-xl text-teal-100 flex items-center" style="color: #64FFDA;">
        Hi, my name is
        <img src="../public/love-you-gesture.png" alt="love-you-gesture" class="w-6 h-6 lg:w-10 lg:h-10 ml-2">
      </p>
      <h1 class="text-4xl lg:text-7xl font-semibold" style="color: #CCD6F6;">Danang Putra Bahari</h1>
      <div class="mt-2 lg:mt-4 text-base lg:text-xl" style="color: #8892B0;">
        I'm a <span class="font-extrabold">Software Engineer</span> that love build arround web technology.
      </div>
    </section>
  </div>
</template>