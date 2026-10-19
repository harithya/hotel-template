<template>
  <ul class="navigation clearfix">
    <li :class="{ current: isActive('/') }"><NuxtLink to="/">Home</NuxtLink></li>
    <li :class="{ current: isActive('/rooms') || isActive('/room-details') }"><NuxtLink to="/rooms">Kamar Fasilitas</NuxtLink></li>
    <li :class="{ current: isActive('/about') }"><NuxtLink to="/about">Tentang Kami</NuxtLink></li>
    <li :class="{ current: isActive('/news') || isActive('/news-details') }"><NuxtLink to="/news">Berita</NuxtLink></li>
    <li :class="{ current: isActive('/tour-virtual') }"><NuxtLink to="/tour-virtual">Tour Virtual</NuxtLink></li>
    <li :class="{ current: isActive('/contact') }"><NuxtLink to="/contact">Kontak Kami</NuxtLink></li>
  </ul>
</template>

<script setup>
const route = useRoute()

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(path + '/')
}
</script>
