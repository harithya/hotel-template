<template>
  <div>
    <PageTitle title="Berita" crumb="Berita" />
    <NewsGrid />
  </div>
</template>

<script setup>
useHead({
  title: 'Hoteler - Berita',
  meta: [
    { name: 'description', content: 'Berita dan artikel terbaru Hoteler' }
  ]
})
</script>
