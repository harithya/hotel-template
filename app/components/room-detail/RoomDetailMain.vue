<template>
<div class="col-xl-8 col-lg-7 product-details rd-page">
      <div class="room-details__left">
        <div class="room-heading">
          <h3 class="title mb-4">{{ room.name }}</h3>
          <div class="text">{{ room.tagline }}</div>
          <ul class="kodelisting-room-basic-info g-3">
            <li><i class="fa-classic fat fa-users"></i> <span class="csrbi-text">{{ room.guests }}</span></li>
            <li><i class="fa-classic fa-thin fa-bed-front fa-fw"></i> <span class="csrbi-text">{{ room.beds }}</span></li>
            <li><i class="fa-classic fa-thin fa-bath fa-fw"></i> <span class="csrbi-text">{{ room.baths }}</span></li>
          </ul>
        </div>
      </div>
	<div class="room-gallery">
		<div class="slider-content">
			<figure class="image-box"><a :href="room.images[active]" class="lightbox-image" data-fancybox="gallery"><img :src="room.images[active]" alt=""></a></figure>
			<div class="slider-pager">
				<ul class="thumb-box">
					<li v-for="(img, i) in room.images" :key="i" class="mb-0"><a href="#" :class="{ active: i === active }" @click.prevent="active = i"><figure><img :src="img" alt=""></figure></a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="room-details__left">
		<div class="wrapper">
			<h3>Deskripsi Kamar</h3>
			<p class="text">{{ room.description[0] }}</p>
			<div class="row justify-content-center">
				<div class="col-xl-12">
					<div class="room-details__content-right mb-40 mt-20">
						<div class="room-details__details-box">
							<div class="row">
								<div v-for="(spec, i) in room.specs" :key="i" class="col-6 col-md-3">
									<p class="text mb-0">{{ spec.label }}</p>
									<h6>{{ spec.value }}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="text">{{ room.description[1] }}</p>
		</div>
		<div class="mt-40">
			<h3 class="mb-4">Fasilitas Kamar</h3>
			<div class="row room-facility-list mb-40">
				<div v-for="(facility, i) in room.facilities" :key="i" class="col-sm-6 col-xl-4">
					<div class="list-one d-flex align-items-center me-sm-4" :class="{ 'mb-3': i < room.facilities.length - 1 }">
						<div class="icon text-theme-color1 mr-10 flex-shrink-0"><i :class="facility.icon"></i></div>
						<h6 class="title m-0">{{ facility.title }}</h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Room } from '~/data/rooms'

const props = defineProps<{
  room: Room
}>()

const active = ref(0)

watch(() => props.room.slug, () => {
  active.value = 0
})
</script>

<style scoped>
.room-gallery {
  margin-bottom: 30px;
}
.room-gallery .thumb-box::after {
  content: "";
  display: table;
  clear: both;
}
.room-gallery .image-box {
  position: relative;
  display: block;
  margin-right: 0;
  margin-bottom: 15px;
}
.room-gallery .image-box img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  border-radius: 8px;
}
.room-gallery .thumb-box {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.room-gallery .thumb-box li {
  position: relative;
  display: block;
  margin: 0 !important;
  width: 110px;
  height: 80px;
}
.room-gallery .thumb-box li a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.room-gallery .thumb-box li figure {
  margin: 0;
  width: 100%;
  height: 100%;
}
.room-gallery .thumb-box li figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.room-gallery .thumb-box li a.active {
  outline: 3px solid #5ebb47;
  outline-offset: -1px;
}
.room-gallery .thumb-box li a:hover {
  opacity: 0.85;
}
</style>
