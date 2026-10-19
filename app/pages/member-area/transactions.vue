<template>
  <div>
    <PageTitle title="Member Area" crumb="Riwayat Transaksi" />
    <div class="member-page">
      <div class="auto-container">
        <div class="row member-row">
          <MemberSidebar />
          <main class="col-lg-8 col-xl-9 member-content">
            <div class="member-topbar">
              <div>
                <h3>Riwayat Transaksi</h3>
                <p class="text-muted mb-0">Catatan pembayaran dan histori transaksi reservasi Anda.</p>
              </div>
            </div>

            <!-- Transaksi List -->
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div class="card-header bg-white border-bottom py-3 px-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h5 class="m-0 fw-semibold">Daftar Transaksi</h5>
                <select v-model="filterStatus" class="form-select form-select-sm rounded-pill px-3" style="width: auto;">
                  <option value="all">Semua Status</option>
                  <option value="Lunas">Lunas</option>
                  <option value="Menunggu">Menunggu</option>
                </select>
              </div>
              <div class="table-responsive">
                <table class="table table-hover align-middle mb-0">
                  <thead class="bg-light text-secondary small text-uppercase">
                    <tr>
                      <th class="ps-4">No. Transaksi</th>
                      <th>Detail Kamar</th>
                      <th>Pembayaran</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody class="border-top-0">
                    <tr v-for="tx in filteredTransactions" :key="tx.id">
                      <td class="ps-4 py-3">
                        <span class="fw-semibold text-dark d-block">{{ tx.id }}</span>
                        <small class="text-muted">{{ tx.date }} • {{ tx.time }}</small>
                      </td>
                      <td>
                        <strong class="d-block text-dark small">{{ tx.room }}</strong>
                        <small class="text-muted">{{ tx.nights }}</small>
                      </td>
                      <td>
                        <strong class="text-dark d-block">{{ formatRupiah(tx.amount) }}</strong>
                        <small class="text-muted">{{ tx.method }}</small>
                      </td>
                      <td>
                        <span :class="['badge px-3 py-2 rounded-pill fw-medium', tx.statusClass]">{{ tx.status }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MemberSidebar from '~/components/member/MemberSidebar.vue'

const filterStatus = ref('all')

const transactions = [
  {
    id: 'TRX-98231',
    bookingCode: 'HTL-2026-0012',
    date: '10 Okt 2026',
    time: '14:32 WIB',
    room: 'Junior Suite',
    image: '/images/resource/room-1.jpg',
    nights: '2 Malam (12-14 Okt)',
    method: 'BCA VA',
    payLogo: 'https://assets.tripay.co.id/upload/payment-icon/ytBKvaleGy1605201833.png',
    amount: 1700000,
    status: 'Lunas',
    statusClass: 'bg-success-subtle text-success',
  },
  {
    id: 'TRX-77120',
    bookingCode: 'HTL-2026-0004',
    date: '30 Agu 2026',
    time: '09:15 WIB',
    room: 'Deluxe Room',
    image: '/images/resource/room-5.jpg',
    nights: '2 Malam (01-03 Sep)',
    method: 'QRIS',
    payLogo: 'https://assets.tripay.co.id/upload/payment-icon/8ewGzP6SWe1649667701.png',
    amount: 4200000,
    status: 'Lunas',
    statusClass: 'bg-success-subtle text-success',
  },
]

const filteredTransactions = computed(() => {
  if (filterStatus.value === 'all') return transactions
  return transactions.filter((t) => t.status === filterStatus.value)
})

function formatRupiah(val: number): string {
  return 'Rp ' + val.toLocaleString('id-ID')
}

useHead({
  title: 'Hoteler - Riwayat Transaksi',
  meta: [{ name: 'description', content: 'Riwayat Transaksi Member Hoteler' }],
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
