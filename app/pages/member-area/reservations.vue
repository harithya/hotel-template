<template>
  <div>
    <PageTitle title="Member Area" crumb="Reservasi Saya" />
    <div class="member-page">
      <div class="auto-container">
        <div class="row member-row">
          <MemberSidebar />
          <main class="col-lg-8 col-xl-9 member-content">
            <div class="member-topbar">
              <div>
                <h3>Reservasi Saya</h3>
                <p class="text-muted mb-0">Daftar pemesanan kamar aktif &amp; riwayat menginap Anda.</p>
              </div>
            </div>

            <div class="row">
              <div v-for="res in reservations" :key="res.id" class="col-12 mb-4">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div class="card-header bg-white border-bottom py-3 px-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <span class="text-muted small">Kode Booking: </span>
                      <strong class="text-dark">{{ res.code }}</strong>
                    </div>
                    <span :class="['badge px-3 py-2 rounded-pill fw-medium', res.statusClass]">{{ res.status }}</span>
                  </div>
                  <div class="card-body p-4">
                    <div class="row align-items-center g-4">
                      <div class="col-md-3">
                        <img :src="res.image" :alt="res.roomName" class="img-fluid rounded-3 w-100" style="height: 120px; object-fit: cover;" />
                      </div>
                      <div class="col-md-6">
                        <h5 class="mb-2">{{ res.roomName }}</h5>
                        <div class="row text-secondary small pt-2 border-top">
                          <div class="col-6 mb-2">
                            <div class="text-muted">Check In</div>
                            <strong>{{ res.checkIn }}</strong>
                          </div>
                          <div class="col-6 mb-2">
                            <div class="text-muted">Check Out</div>
                            <strong>{{ res.checkOut }}</strong>
                          </div>
                          <div class="col-6">
                            <div class="text-muted">Durasi</div>
                            <strong>{{ res.duration }}</strong>
                          </div>
                          <div class="col-6">
                            <div class="text-muted">Tamu</div>
                            <strong>{{ res.guests }}</strong>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 text-md-end d-flex flex-column justify-content-between align-items-md-end h-100">
                        <div>
                          <span class="text-muted small d-block">Total Bayar</span>
                          <h5 class="text-success m-0 fw-bold">{{ formatRupiah(res.total) }}</h5>
                        </div>
                        <button class="btn btn-outline-success rounded-pill px-4 mt-3">Detail E-Tiket</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MemberSidebar from '~/components/member/MemberSidebar.vue'

const reservations = [
  {
    id: 1,
    code: 'HTL-2026-0012',
    roomName: 'Junior Suite',
    image: '/images/resource/room-1.jpg',
    checkIn: '12 Okt 2026 (14:00)',
    checkOut: '14 Okt 2026 (12:00)',
    duration: '2 Malam',
    guests: '2 Dewasa',
    total: 1700000,
    status: 'Mendatang',
    statusClass: 'bg-primary-subtle text-primary',
  },
  {
    id: 2,
    code: 'HTL-2026-0004',
    roomName: 'Deluxe Room',
    image: '/images/resource/room-5.jpg',
    checkIn: '01 Sep 2026 (14:00)',
    checkOut: '03 Sep 2026 (12:00)',
    duration: '2 Malam',
    guests: '2 Dewasa, 1 Anak',
    total: 4200000,
    status: 'Selesai',
    statusClass: 'bg-success-subtle text-success',
  },
]

function formatRupiah(val: number): string {
  return 'Rp ' + val.toLocaleString('id-ID')
}

useHead({
  title: 'Hoteler - Reservasi Saya',
  meta: [{ name: 'description', content: 'Daftar Reservasi Member Hoteler' }],
  script: [{ src: 'https://unpkg.com/@phosphor-icons/web' }]
})
</script>

<style scoped>
.member-page {
  background: #f6f4ec;
  padding: 60px 0;
}
.member-row {
  --bs-gutter-x: 24px;
  align-items: stretch;
}
.member-topbar h3 {
  font-family: "Playfair Display", Georgia, serif;
  letter-spacing: 0.3px;
}
.member-content {
  padding-left: 24px;
}
.member-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
@media (max-width: 991.98px) {
  .member-content {
    padding-left: 0;
  }
}
</style>
