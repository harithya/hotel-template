<template>
  <div class="page-wrapper">
    <div class="preloader"></div>

    <Header />

    <slot />

    <Footer />

    <div class="scroll-to-top scroll-to-target" data-target="html">
      <span class="fa fa-arrow-up"></span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'

const route = useRoute()

function hidePreloader() {
  if (typeof window !== 'undefined') {
    if (window.$) {
      const $preloader = window.$('.preloader')
      if ($preloader.length) {
        $preloader.fadeOut(300)
      }
    } else if (typeof document !== 'undefined') {
      const el = document.querySelector('.preloader')
      if (el) {
        el.style.display = 'none'
      }
    }
  }
}

onMounted(() => {
  hidePreloader()
})

watch(() => route.path, async () => {
  await nextTick()
  hidePreloader()
  if (typeof window !== 'undefined') {
    if (window.WOW) {
      try {
        new window.WOW().init()
      } catch (e) {}
    }
  }
})

useHead({
  link: [
    { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/css/flatpickr.min.css' },
    { rel: 'stylesheet', href: '/css/style.css' },
    { rel: 'stylesheet', href: '/css/slick-theme.css' },
    { rel: 'stylesheet', href: '/css/slick.css' },
  ],
  script: [
    { src: '/js/jquery.js', body: true },
    { src: '/js/popper.min.js', body: true },
    { src: '/js/bootstrap.min.js', body: true },
    { src: '/js/slick.min.js', body: true },
    { src: '/js/slick-animation.min.js', body: true },
    { src: '/js/jquery.fancybox.js', body: true },
    { src: '/js/wow.js', body: true },
    { src: '/js/appear.js', body: true },
    { src: '/js/mixitup.js', body: true },
    { src: '/js/flatpickr.js', body: true },
    { src: '/js/swiper.min.js', body: true },
    { src: '/js/gsap.min.js', body: true },
    { src: '/js/ScrollTrigger.min.js', body: true },
    { src: '/js/SplitText.min.js', body: true },
    { src: '/js/splitType.js', body: true },
    { src: '/js/script.js', body: true },
    { src: '/js/script-gsap.js', body: true },
  ]
})
</script>
