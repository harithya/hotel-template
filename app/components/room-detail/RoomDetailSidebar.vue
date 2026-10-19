<template>
<div class="col-xl-4 col-lg-5">
	<div class="sidebar">
		<div class="kodelisting-room-booking mb-30">
          <div class="kodelisting-room-booking-wrap">
            <div class="room-booking-title d-flex flex-column flex-sm-row align-items-start align-items-sm-baseline justify-content-sm-between mb-30 gap-1 gap-sm-0">
              <h5 class="title">Reservasi</h5>
              <div class="booking-price-header text-start text-sm-end">
                <span class="price-start">Mulai</span>
                <span class="base-price">{{ formatRupiah(room.price) }}</span>
                <span class="price-period">/malam</span>
              </div>
            </div>
					<form class="reservation-form" id="contact_form2" name="contact_form" @submit.prevent="goCheckout">
						<div class="row">
							<div class="col-sm-12 mb-3">
                  <div class="form-floating">
                    <input v-model="checkIn" type="text" name="check_in" class="form-control date-pick" placeholder="Tanggal Masuk (Check In)" id="check_in" readonly />
                    <label for="check_in">Check In</label>
                  </div>
							</div>
                <div class="col-sm-12 mb-3">
                  <div class="form-floating">
                    <input v-model="checkOut" type="text" name="check_out" class="form-control date-pick" placeholder="Tanggal Keluar (Check Out)" id="check_out" readonly />
                    <label for="check_out">Check Out</label>
                  </div>
                </div>
							<div class="col-sm-12 mb-3">
					    <select class="form-select">
					      <option selected disabled value="">Jumlah Kamar</option>
					      <option>1 Kamar</option>
					      <option>2 Kamar</option>
					      <option>3 Kamar</option>
					      <option>Lainnya</option>
					    </select>
							</div>
                <div class="col-sm-6 mb-3">
                  <select class="form-select">
                    <option selected disabled value="">Dewasa</option>
                    <option>1 Orang</option>
                    <option>2 Orang</option>
                    <option>3 Orang</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div class="col-sm-6 mb-3">
                  <select class="form-select">
                    <option selected disabled value="">Anak-anak</option>
                    <option>Tanpa Anak</option>
                    <option>1 Anak</option>
                    <option>2 Anak</option>
                    <option>Lainnya</option>
                  </select>
                </div>
						</div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="room-booking-title mt-30">
                    <h5 class="title">Layanan Tambahan</h5>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="checkbox-row extra-card">
                    <label class="checkbox-label custom-checkbox">
                      <input type="checkbox" v-model="extraServices.laundry">
                      Layanan Laundry
                    </label>
                    <span class="checkbox-price">Rp 50.000 / Malam</span>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="checkbox-row extra-card">
                    <label class="checkbox-label custom-checkbox">
                      <input type="checkbox" v-model="extraServices.carRental">
                      Sewa Mobil / Antar Jemput
                    </label>
                    <span class="checkbox-price">Rp 250.000 / Malam</span>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="checkbox-row extra-card">
                    <label class="checkbox-label custom-checkbox">
                      <input type="checkbox" v-model="extraServices.breakfast">
                      Sarapan Pagi Prasmanan
                    </label>
                    <span class="checkbox-price">Rp 100.000 / Malam</span>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="checkbox-row extra-card">
                    <label class="checkbox-label custom-checkbox">
                      <input type="checkbox" v-model="extraServices.seaView">
                      Pemandangan Laut (Sea View)
                    </label>
                    <span class="checkbox-price">Rp 150.000 / Malam</span>
                  </div>
                </div>
                <div class="col-12 mb-3">
                  <div class="checkbox-row extra-card">
                    <label class="checkbox-label custom-checkbox">
                      <input type="checkbox" v-model="extraServices.wifi">
                      Koneksi Wi-Fi Premium
                    </label>
                    <span class="checkbox-price text-success fw-bold">Gratis</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                    <div class="room-booking-title d-flex align-items-end justify-content-between mt-20">
                        <h5 class="title">Total Biaya</h5>
                        <span><span class="base-price price-value">{{ formatRupiah(totalPrice) }}</span></span>
                      </div>
                </div>
                <div class="col-lg-12">

                  <div class="total-base-price">
                      <div class="summary">
                        <div class="price-content d-flex justify-content-between">
                          <div class="label">
                            Total Harga Kamar
                          </div>
                          <div class="amount">{{ formatRupiah(room.price) }}</div>
                        </div>

                        <div v-if="totalExtra > 0" class="price-content d-flex justify-content-between mt-2 text-success fw-medium">
                          <div class="label">
                            Layanan Tambahan
                          </div>
                          <div class="amount">+{{ formatRupiah(totalExtra) }}</div>
                        </div>

                        <div class="total d-flex justify-content-between mt-2">
                          <div>Total Pembayaran</div>
                          <div>{{ formatRupiah(totalPrice) }}</div>
                        </div>
                      </div>
                  </div>

                </div>
              </div>
						<div class="mb-3 mt-2">
							<input name="form_botcheck" class="form-control" type="hidden" value="">
							<button type="submit" class="theme-btn btn-style-one w-100" data-loading-text="Mohon tunggu..."><span class="btn-title">Pesan Sekarang</span></button>
						</div>
					</form>
          </div>
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Room } from '~/data/rooms'

const props = defineProps<{
  room: Room
  compare: Room[]
}>()

function formatRupiah(val: number): string {
  return 'Rp ' + val.toLocaleString('id-ID')
}

const checkIn = ref('')
const checkOut = ref('')

const extraServices = ref({
  laundry: false,
  carRental: false,
  breakfast: false,
  seaView: false,
  wifi: false,
})

const router = useRouter()

function goCheckout() {
  const extras = Object.entries(extraServices.value)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(',')
  router.push({
    path: '/checkout',
    query: {
      room: props.room.slug,
      checkin: checkIn.value,
      checkout: checkOut.value,
      extras,
    },
  })
}

const extraPrices = {
  laundry: 50000,
  carRental: 250000,
  breakfast: 100000,
  seaView: 150000,
  wifi: 0,
}

const totalExtra = computed(() => {
  let total = 0
  if (extraServices.value.laundry) total += extraPrices.laundry
  if (extraServices.value.carRental) total += extraPrices.carRental
  if (extraServices.value.breakfast) total += extraPrices.breakfast
  if (extraServices.value.seaView) total += extraPrices.seaView
  return total
})

const totalPrice = computed(() => {
  return props.room.price + totalExtra.value
})
</script>

<style scoped>
.room-booking-title .title {
  font-size: 28px !important;
  font-weight: 600;
  color: var(--theme-color-dark, #121212);
  margin: 0;
}
.booking-price-header {
  font-size: 16px;
  color: #666;
}
.booking-price-header .price-start {
  font-size: 15px;
  color: #777;
  margin-right: 4px;
}
.booking-price-header .base-price {
  font-size: 28px !important;
  font-weight: 700;
  color: var(--theme-color1, #5ebb47);
}
.booking-price-header .price-period {
  font-size: 15px;
  color: #777;
  margin-left: 2px;
}

@media (max-width: 575.98px) {
  .room-booking-title {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 4px !important;
  }
  .booking-price-header {
    text-align: left !important;
  }
}

.reservation-form .row > .col-md-6 {
  margin-bottom: 12px;
}
.reservation-form .form-select,
.reservation-form .form-control {
  height: calc(3.5rem + 2px);
  min-height: calc(3.5rem + 2px);
  line-height: 1.5;
}
.extra-card {
  background: #f8faf7;
  border: 1px solid rgba(94, 187, 71, 0.25);
  border-radius: 10px;
  height: 100%;
  padding: 14px 16px !important;
  max-width: none !important;
  box-shadow: none !important;
}
.extra-card:hover {
  border-color: #5ebb47;
  box-shadow: none !important;
}
.extra-card .checkbox-price {
  color: #418a2f;
  font-weight: 600;
}
</style>
