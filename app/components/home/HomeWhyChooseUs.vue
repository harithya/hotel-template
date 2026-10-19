<template>
<section class="why-choose-us">
  <div class="auto-container">
    <div class="row">
      <div class="content-column col-lg-6">
        <div class="sec-title wow fadeInUp">
          <span class="sub-title">Mengapa Memilih Kami</span>
          <h2>Reservasi Mudah & Nyaman</h2>
          <div class="text">Kami berkomitmen memberikan pengalaman menginap bintang lima dengan kemudahan reservasi, fasilitas mewah, serta pelayanan ramah 24 jam untuk menjamin kenyamanan liburan Anda.</div>
        </div>
      </div>
      <div class="faqs-column col-lg-6">
        <div class="inner-column">
          <ul class="accordion-box wow fadeInLeft">
            <li
              v-for="(faq, i) in faqs"
              :key="i"
              class="accordion block"
              :class="{ 'active-block': i === openIndex }"
            >
              <div
                class="acc-btn"
                :class="{ active: i === openIndex }"
                @click="toggle(i)"
              >{{ faq.q }}
                <div class="icon fa fa-plus"></div>
              </div>
              <div class="acc-content" :class="{ current: i === openIndex }">
                <div class="content">
                  <div class="text">{{ faq.a }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref(0)

function toggle(i: number) {
  if (i === openIndex.value) return
  openIndex.value = i
}

const faqs = [
  { q: 'Bagaimana cara memesan kamar secara online?', a: 'Pilih tipe kamar yang diinginkan, tentukan tanggal check-in dan check-out, lalu isi formulir reservasi. Konfirmasi reservasi akan langsung dikirimkan ke email Anda.' },
  { q: 'Jam berapa waktu check-in dan check-out?', a: 'Waktu check-in dimulai pukul 14.00 WIB dan check-out maksimal pukul 12.00 WIB. Permintaan early check-in atau late check-out dapat dikonfirmasikan ke resepsionis.' },
  { q: 'Apakah sarapan pagi sudah termasuk dalam harga?', a: 'Beberapa opsi tipe kamar sudah termasuk sarapan prasmanan. Anda juga dapat memilih opsi sarapan tambahan saat melakukan pengisian reservasi.' },
  { q: 'Apakah terdapat fasilitas Wi-Fi dan parkir gratis?', a: 'Ya, seluruh tamu mendapatkan akses Wi-Fi berkecepatan tinggi gratis di kamar dan seluruh area hotel, serta fasilitas parkir yang luas dan aman 24 jam.' },
  { q: 'Bagaimana kebijakan pembatalan reservasi?', a: 'Pembatalan gratis dapat dilakukan hingga 24 jam sebelum jadwal check-in. Silakan hubungi tim customer service kami untuk proses pembatalan atau perubahan tanggal.' },
]
</script>

<style scoped>
.why-choose-us {
  margin-top: 120px;
  padding-bottom: 60px;
}
.why-choose-us .accordion-box .block:last-child {
  margin-bottom: 0;
}
.why-choose-us:before {
  height: 100%;
}
.why-choose-us .sec-title h2 {
  margin-bottom: 25px;
}
.why-choose-us .sec-title {
  margin-bottom: 0;
}
</style>
