<template>
  <section class="room-service-section pt-120 pb-60">
    <div class="auto-container">
      <div class="row">
        <div
          v-for="(scene, i) in tourScenes"
          :key="scene.id"
          class="room-service-block-one col-lg-4 col-sm-6 wow fadeInUp"
          :data-wow-delay="i === 0 ? null : `${i * 200}ms`"
        >
          <div class="inner-box">
            <div class="image-box">
              <figure class="image mb-0"><NuxtLink :to="`/tour-virtual/${scene.id}`"><img :src="scene.thumb" :alt="scene.name"></NuxtLink></figure>
            </div>
            <div class="content-box">
              <div class="inner-box">
                <h4 class="title"><NuxtLink :to="`/tour-virtual/${scene.id}`">{{ scene.name }}</NuxtLink></h4>
                <p class="text">{{ scene.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { tourScenes } from '~/data/tour'
</script>

<style scoped>
.room-service-block-one .content-box .inner-box {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.room-service-block-one .content-box .text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.room-service-block-one .image-box .image img {
  width: 100%;
  max-width: 100%;
  min-height: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
