<template>
  <aside class="col-lg-4 col-xl-3 member-col">
    <div class="member-sidebar">
      <div class="member-profile text-center">
        <img src="/images/resource/testi2-thumb1.png" alt="Member" />
        <h5 class="mt-2 mb-0">Nama Member</h5>
        <small>member@email.com</small>
      </div>
      <ul class="member-menu">
        <li :class="{ active: route.path === '/member-area' || route.path === '/member-area/' }">
          <NuxtLink to="/member-area"><i class="ph ph-compass"></i> Dashboard</NuxtLink>
        </li>
        <li :class="{ active: route.path.startsWith('/member-area/reservations') }">
          <NuxtLink to="/member-area/reservations"><i class="ph ph-bed"></i> Reservasi Saya</NuxtLink>
        </li>
        <li :class="{ active: route.path.startsWith('/member-area/transactions') }">
          <NuxtLink to="/member-area/transactions"><i class="ph ph-receipt"></i> Riwayat Transaksi</NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/" class="member-logout"><i class="ph ph-sign-out"></i> Keluar</NuxtLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.member-col {
  display: flex;
}
.member-sidebar {
  background: #101c13;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px 20px 22px;
  margin-bottom: 24px;
  color: #ecefe9;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 640px;
  position: sticky;
  top: 24px;
  align-self: stretch;
}
.member-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 18px;
}
.member-profile img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(214, 186, 127, 0.7);
}
.member-profile h5 {
  margin: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 17px;
  letter-spacing: 0.3px;
  color: #fff;
}
.member-profile small {
  color: rgba(255, 255, 255, 0.65);
}
.member-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 6px;
  align-content: start;
}
.member-menu a {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: all 0.2s ease;
}
.member-menu a .ph {
  font-size: 19px;
  font-weight: 400;
  color: #d6ba7f;
}
.member-menu li.active a,
.member-menu a:hover,
.member-menu a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(214, 186, 127, 0.45);
  color: #fff;
}
.member-logout {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: auto;
  padding: 16px 14px 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: #e8b4a6;
  font-size: 14px;
  font-weight: 600;
}
.member-logout .ph {
  font-size: 18px;
}
</style>
