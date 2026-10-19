<template>
<section class="banner-section12">
  <div class="outer-box">      
    <div class="banner-slider banner-slider-home3">
      <div class="banner-slide">
        <div class="inner-slide">
          <div class="bg bg-image overflow-hidden" style="background-image: url(/images/banner/banner2-2.jpg);"></div>
          <div class="inner-container">            
            <div class="row">
              <!-- Content Column -->
              <div class="content-column col-xl-5 col-lg-12">
                <div class="inner-column">
                  <div class="offer-text">HOTEL MEWAH & TEMPAT EKSKLUSIF</div>
                  <h1 class="title">Menginap Nyaman <br />Bersama Kami</h1>
                  <div class="btn-box">
                    <NuxtLink to="/rooms" class="theme-btn btn-style-two"><span class="btn-title">Lihat Kamar</span></NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-slide">
        <div class="inner-slide">
          <div class="bg bg-image overflow-hidden" style="background-image: url(/images/banner/banner2-2.jpg);"></div>
          <div class="inner-container">            
            <div class="row">
              <!-- Content Column -->
              <div class="content-column col-xl-5 col-lg-12">
                <div class="inner-column">
                  <div class="offer-text">FASILITAS BINTANG LIMA</div>
                  <h1 class="title">Pengalaman Tak Terlupakan <br />Untuk Liburan Anda</h1>
                  <div class="btn-box">
                    <NuxtLink to="/tour-virtual" class="theme-btn btn-style-two"><span class="btn-title">Tour Virtual</span></NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-slide">
        <div class="inner-slide">
          <div class="bg bg-image overflow-hidden" style="background-image: url(/images/banner/banner2-2.jpg);"></div>
          <div class="inner-container">            
            <div class="row">
              <!-- Content Column -->
              <div class="content-column col-xl-5 col-lg-12">
                <div class="inner-column">
                  <div class="offer-text">SUASANA TENANG & NYAMAN</div>
                  <h1 class="title">Pelayanan Terbaik 24 Jam <br />Setiap Hari</h1>
                  <div class="btn-box">
                    <NuxtLink to="/contact" class="theme-btn btn-style-two"><span class="btn-title">Hubungi Kami</span></NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'

function initSlick() {
  if (typeof window === 'undefined' || !(window as any).$) return
  const $ = (window as any).$
  const $slider = $('.banner-slider-home3')
  if (!$slider.length) return

  if ($slider.hasClass('slick-initialized')) {
    try {
      $slider.slick('unslick')
    } catch (e) {}
  }

  if (typeof $slider.slick === 'function') {
    const s = $slider.slick({
      autoplay: true,
      speed: 800,
      lazyLoad: 'progressive',
      arrows: true,
      dots: true,
    })
    if (typeof (s as any).slickAnimation === 'function') {
      ;(s as any).slickAnimation()
    }
  }

  if (typeof (window as any).WOW === 'function') {
    try {
      new (window as any).WOW().init()
    } catch (e) {}
  }
}

onMounted(async () => {
  await nextTick()
  initSlick()
})

onUnmounted(() => {
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    const $slider = $('.banner-slider-home3')
    if ($slider.length && $slider.hasClass('slick-initialized')) {
      try {
        $slider.slick('unslick')
      } catch (e) {}
    }
  }
})
</script>
