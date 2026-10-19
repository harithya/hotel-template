<template>
  <div>
    <PageTitle title="Member Area" crumb="Dashboard" />
    <div class="member-page">
      <div class="auto-container">
        <div class="row member-row">
          <MemberSidebar />
          <main class="col-lg-8 col-xl-9 member-content">
            <div class="member-topbar">
              <div>
                <h3>Dashboard</h3>
                <p class="text-muted mb-0">Ringkasan aktivitas member Anda.</p>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-4 mb-3">
                <div class="stat-card">
                  <small>Total Reservasi</small>
                  <h4>2</h4>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="stat-card">
                  <small>Status Aktif</small>
                  <h4>1</h4>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="stat-card">
                  <small>Selesai</small>
                  <h4>1</h4>
                </div>
              </div>
            </div>

            <!-- Reservasi Mendatang -->
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
              <div class="card-header bg-white border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
                <h5 class="m-0 fw-semibold">Reservasi Mendatang</h5>
                <span class="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-medium">Dikonfirmasi</span>
              </div>
              <div class="card-body p-4">
                <div class="row align-items-center g-4">
                  <div class="col-md-3">
                    <img src="/images/resource/room-1.jpg" alt="Junior Suite" class="img-fluid rounded-3 w-100" style="height: 120px; object-fit: cover;" />
                  </div>
                  <div class="col-md-6">
                    <span class="text-muted small">Kode Booking: <strong>HTL-2026-0012</strong></span>
                    <h5 class="mt-1 mb-2">Junior Suite</h5>
                    <div class="row text-secondary small pt-2 border-top">
                      <div class="col-6 mb-2">
                        <div class="text-muted">Check In</div>
                        <strong>12 Okt 2026</strong> (14:00)
                      </div>
                      <div class="col-6 mb-2">
                        <div class="text-muted">Check Out</div>
                        <strong>14 Okt 2026</strong> (12:00)
                      </div>
                      <div class="col-6">
                        <div class="text-muted">Durasi</div>
                        <strong>2 Malam</strong>
                      </div>
                      <div class="col-6">
                        <div class="text-muted">Tamu</div>
                        <strong>2 Dewasa</strong>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 text-md-end d-flex flex-column justify-content-between align-items-md-end h-100">
                    <div>
                      <span class="text-muted small d-block">Total Pembayaran</span>
                      <h5 class="text-success m-0 fw-bold">Rp 1.700.000</h5>
                    </div>
                    <NuxtLink to="/member-area/reservations" class="btn btn-outline-success rounded-pill px-4 mt-3">Lihat Detail</NuxtLink>
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

useHead({
  title: 'Hoteler - Dashboard Member',
  meta: [{ name: 'description', content: 'Dashboard Member Area Hoteler' }],
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
.stat-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;
}
.stat-card small {
  color: #777;
  font-size: 13px;
}
.stat-card h4 {
  margin: 4px 0 0;
  font-size: 24px;
  font-weight: 700;
  color: #1b2d2a;
}
@media (max-width: 991.98px) {
  .member-content {
    padding-left: 0;
  }
}
</style>
