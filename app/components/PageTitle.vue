<template>
  <section class="page-title" style="background-image: url(/images/background/page-title-bg.png);">
    <div class="auto-container">
      <div class="title-outer text-center">
        <h1 class="title">{{ title }}</h1>
        <ul class="page-breadcrumb">
          <li><NuxtLink to="/">Beranda</NuxtLink></li>
          <li>{{ crumb || title }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  crumb: { type: String, default: '' }
})
</script>
