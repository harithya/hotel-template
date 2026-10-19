<template>
<section class="testimonial-section-two">
  <div class="anim-icons">
    <img class="image-1" src="/images/icons/shape-5.png" alt="">
  </div>
  <div class="auto-container">
    <div class="row">
      <div class="testimonials overflow-hidden col-lg-12">
        <!-- Testimonial Slider -->
        <div class="swiper-container testimonial-slider-content">
          <div class="swiper-wrapper">
            <!-- Testimonial Block -->
            <div class="testimonial-block-two swiper-slide">
              <div class="inner-box">
                <div class="quote-icon"><img class="icon-img" src="/images/icons/testi-shape1.png" alt=""></div>
                <div class="text">Menginap di Hoteler adalah pengalaman tak terlupakan. Staf sangat ramah dan kamar bersih dengan pemandangan indah </div>
                <div class="info-box">
                  <h5 class="name">Ratna Sari</h5>
                  <span class="designation">Pebisnis</span>                    
                </div>
              </div>
            </div>
            <!-- Testimonial Block -->
            <div class="testimonial-block-two swiper-slide">
              <div class="inner-box">
                <div class="quote-icon"><img class="icon-img" src="/images/icons/testi-shape1.png" alt=""></div>
                <div class="text">Menginap di Hoteler adalah pengalaman tak terlupakan. Staf sangat ramah dan kamar bersih dengan pemandangan indah </div>
                <div class="info-box">
                  <h5 class="name">Budi Hartono</h5>
                  <span class="designation">Manajer Penjualan</span>                    
                </div>
              </div>
            </div>
            <!-- Testimonial Block -->
            <div class="testimonial-block-two swiper-slide">
              <div class="inner-box">
                <div class="quote-icon"><img class="icon-img" src="/images/icons/testi-shape1.png" alt=""></div>
                <div class="text">Menginap di Hoteler adalah pengalaman tak terlupakan. Staf sangat ramah dan kamar bersih dengan pemandangan indah </div>
                <div class="info-box">
                  <h5 class="name">Ratna Sari</h5>
                  <span class="designation">Pebisnis</span>                    
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <!-- Testimonial Thumb -->
        <div class="swiper-container testimonial-thumbs mx-auto">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/images/resource/testi2-thumb1.png" alt=""/></div>
            <div class="swiper-slide"><img src="/images/resource/testi2-thumb2.png" alt=""/></div>
            <div class="swiper-slide"><img src="/images/resource/testi2-thumb3.png" alt=""/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()
  if (typeof window !== 'undefined' && (window as any).Swiper && (window as any).$) {
    const $ = (window as any).$
    if ($('.testimonial-slider-content').length) {
      const Swiper = (window as any).Swiper
      const slider = new Swiper('.testimonial-slider-content', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: true,
        centeredSlides: true,
        loop: true,
        loopedSlides: 6,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      const thumbs = new Swiper('.testimonial-thumbs', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
      })
      if (slider.controller && thumbs.controller) {
        slider.controller.control = thumbs
        thumbs.controller.control = slider
      }
    }
  }
})
</script>
