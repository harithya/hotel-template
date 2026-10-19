<template>
  <div>
    <PageTitle title="Detail Berita" crumb="Berita" />
    <section class="blog-details pt-120 pb-120">
      <div class="container">
        <div class="row">
          <NewsDetailArticle />
          <NewsDetailSidebar />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Hoteler - Detail Berita',
  meta: [
    { name: 'description', content: 'Detail berita dan artikel Hoteler' }
  ]
})
</script>
