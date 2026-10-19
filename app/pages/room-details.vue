<template>
  <NuxtPage />
</template>

<script setup>
const route = useRoute()

if (!route.params.slug) {
  await navigateTo('/rooms', { redirectCode: 301 })
}
</script>
