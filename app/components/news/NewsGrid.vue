<template>
  <section class="news-section">
    <div class="auto-container">
      <div class="row">
        <!-- News Block -->
        <div
          v-for="(post, i) in posts"
          :key="i"
          class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
          :data-wow-delay="post.delay"
        >
          <div class="inner-box wow fadeInLeft" :data-wow-delay="post.innerDelay">
            <div class="image-box">
              <figure class="image overlay-anim"><NuxtLink to="/news-details"><img :src="post.image" alt=""></NuxtLink></figure>
              <span class="date">DES<br /><small>20</small></span>
            </div>
            <div class="content-box">
              <ul class="post-info">
                <li><i class="fa fa-user"></i>{{ post.author }}</li>
                <li><i class="fa fa-comments"></i>{{ post.meta }}</li>
              </ul>
              <h4 class="title"><NuxtLink to="/news-details" v-html="post.title"></NuxtLink></h4>
              <NuxtLink to="/news-details" class="read-more">Selengkapnya<i class="fa-solid fa-arrow-right"></i></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  { image: '/images/resource/news-1.jpg', author: 'Admin', meta: '19 Oktober 2025', title: 'Desain Pencahayaan Baru <br />di Hotel Kami', delay: null, innerDelay: null },
  { image: '/images/resource/news-2.jpg', author: 'Admin', meta: '0 komentar', title: 'Manfaat Berenang <br />untuk Kesehatan Anda', delay: '100ms', innerDelay: '200ms' },
  { image: '/images/resource/news-3.jpg', author: 'Redaksi', meta: '19 Oktober 2025', title: 'Health Club Tersedia <br />untuk Kebugaran Anda', delay: '200ms', innerDelay: '300ms' },
  { image: '/images/resource/news-1.jpg', author: 'Admin', meta: '19 Oktober 2025', title: 'Desain Pencahayaan Baru <br />di Hotel Kami', delay: '300ms', innerDelay: null },
  { image: '/images/resource/news-2.jpg', author: 'Admin', meta: '0 komentar', title: 'Manfaat Berenang <br />untuk Kesehatan Anda', delay: '400ms', innerDelay: '200ms' },
  { image: '/images/resource/news-3.jpg', author: 'Redaksi', meta: '19 Oktober 2025', title: 'Health Club Tersedia <br />untuk Kebugaran Anda', delay: '500ms', innerDelay: '300ms' },
]
</script>
