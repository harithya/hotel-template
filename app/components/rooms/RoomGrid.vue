<template>
  <section class="rooms-section pb-100">
    <div class="auto-container">
      <div class="row">
        <!-- room-block -->
        <div
          v-for="(room, i) in rooms"
          :key="room.slug"
          class="room-block"
          :class="room.col"
        >
          <div class="inner-box wow fadeIn" :class="{ 'large-style': room.large }" :data-wow-delay="room.delay">
            <div class="image-box">
              <figure class="image-2 overlay-anim"><NuxtLink :to="detailUrl(room)"><img :src="room.image" alt=""></NuxtLink></figure>
            </div>
            <div class="content-box">
              <h6 class="title"><NuxtLink :to="detailUrl(room)">{{ room.name }}</NuxtLink></h6>
              <span class="price">{{ room.priceLabel }}</span>
            </div>
            <div class="box-caption">
              <NuxtLink :to="detailUrl(room)" class="book-btn">Pesan Sekarang</NuxtLink>
              <ul class="bx-links">
                <li><NuxtLink :to="detailUrl(room)"><i class="fa fa-wifi"></i></NuxtLink></li>
                <li><NuxtLink :to="detailUrl(room)"><i class="fa fa-bed"></i></NuxtLink></li>
                <li><NuxtLink :to="detailUrl(room)"><i class="fa fa-bath"></i></NuxtLink></li>
                <li><NuxtLink :to="detailUrl(room)"><i class="fa fa-shower"></i></NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { rooms, type Room } from '~/data/rooms'

function detailUrl(room: Room): string {
  return `/room-details/${room.slug}`
}
</script>
