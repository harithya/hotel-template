<template>
  <div class="login-page">
    <div class="row g-0 login-split">
      <div class="col-lg-6 login-visual">
        <div class="login-overlay">
          <NuxtLink to="/" class="login-logo"><img src="/logo-ver.png" alt="Hoteler" /></NuxtLink>
          <h2>Liburan Mewah Mulai Di Sini</h2>
          <p>Masuk sebagai member untuk reservasi lebih cepat, promo eksklusif, dan riwayat pesanan.</p>
          <ul class="login-perks">
            <li><i class="fa fa-circle-check"></i> Check-in lebih cepat</li>
            <li><i class="fa fa-circle-check"></i> Promo member eksklusif</li>
            <li><i class="fa fa-circle-check"></i> Riwayat &amp; e-tiket tersimpan</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 login-form-col">
        <div class="login-box text-center">
          <span class="login-badge">Member Area</span>
          <h3 class="login-title mb-2">Selamat Datang Kembali</h3>
          <p class="text-muted mb-30">Masuk satu klik dengan akun Google Anda.</p>
          <NuxtLink to="/member-area" class="google-btn w-100 text-decoration-none">
            <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.7-.4-3.9z"/></svg>
            <span>Masuk dengan Google</span>
          </NuxtLink>
          <p class="secure-note">Aman. Kami tidak menyimpan kata sandi Google Anda.</p>
          <NuxtLink to="/" class="back-home">← Kembali ke Beranda</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

useHead({
  title: 'Hoteler - Member Area',
  meta: [
    { name: 'description', content: 'Masuk ke member area Hoteler' }
  ],
  link: [
    { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/css/style.css' },
  ]
})
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f8faf7;
}
.login-split {
  min-height: 100vh;
}
.login-visual {
  background: url(/images/resource/room-1.jpg) center/cover no-repeat;
  position: relative;
  min-height: 320px;
}
.login-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(18,18,18,0.82), rgba(94,187,71,0.75));
  color: #fff;
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.login-logo img {
  height: 44px;
  margin-bottom: 24px;
}
.login-overlay h2 {
  color: #fff;
  font-size: 34px;
  margin-bottom: 10px;
}
.login-overlay p {
  color: rgba(255,255,255,0.85);
  max-width: 420px;
}
.login-perks {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  gap: 8px;
}
.login-perks i {
  color: #fff;
  margin-right: 8px;
}
.login-form-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
}
.login-box {
  width: 100%;
  max-width: 420px;
  border: 1px solid rgba(94, 187, 71, 0.3);
  border-radius: 16px;
  padding: 40px 36px;
  background: #fff;
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}
.login-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #5ebb47;
  background: #e6f6e2;
  border-radius: 20px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.login-title {
  font-size: 28px !important;
  line-height: 1.3;
  font-weight: 600;
}
.google-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 52px;
  border: 1px solid #dadce0;
  border-radius: 10px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  color: #3c4043;
  cursor: pointer;
  transition: all 0.2s ease;
}
.google-btn:hover {
  background: #f8faf7;
  border-color: #5ebb47;
  transform: translateY(-1px);
}
.secure-note {
  font-size: 13px;
  color: #999;
  margin: 18px 0 12px;
}
.back-home {
  font-size: 14px;
  font-weight: 600;
  color: #5ebb47;
}
</style>
