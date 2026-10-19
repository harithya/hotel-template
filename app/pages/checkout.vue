<template>
  <div>
    <PageTitle title="Checkout" crumb="Checkout" />
    <section>
      <div class="container pt-70 pb-120">
        <div class="section-content">
          <form id="checkout-form" action="#">
            <div class="row mt-30">
              <div class="col-md-6">
                <div class="billing-details">
                  <h3 class="mb-30">Data Pemesan</h3>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="checkout-fname">Nama Depan</label>
                      <input id="checkout-fname" type="text" class="form-control" placeholder="Nama Depan" />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="checkout-lname">Nama Belakang</label>
                      <input id="checkout-lname" type="text" class="form-control" placeholder="Nama Belakang" />
                    </div>
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label for="checkout-email">Alamat Email</label>
                        <input id="checkout-email" type="email" class="form-control" placeholder="Alamat Email" />
                      </div>
                      <div class="mb-3">
                        <label for="checkout-phone">No. Telepon / WhatsApp</label>
                        <input id="checkout-phone" type="tel" class="form-control" placeholder="08xx-xxxx-xxxx" />
                      </div>
                      <div class="mb-3">
                        <label for="checkout-address">Alamat</label>
                        <input id="checkout-address" type="text" class="form-control" placeholder="Alamat jalan" />
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="checkout-city">Kota</label>
                      <input id="checkout-city" type="text" class="form-control" placeholder="Kota" />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="checkout-zip">Kode Pos</label>
                      <input id="checkout-zip" type="text" class="form-control" placeholder="Kode Pos" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h3 class="mb-30">Detail Reservasi</h3>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="checkout-checkin">Check In</label>
                    <input id="checkout-checkin" type="text" class="form-control date-pick" placeholder="Pilih tanggal" readonly />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="checkout-checkout">Check Out</label>
                    <input id="checkout-checkout" type="text" class="form-control date-pick" placeholder="Pilih tanggal" readonly />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label for="checkout-room">Kamar</label>
                    <select id="checkout-room" class="form-control">
                      <option>Junior Suite — Rp 850.000/malam</option>
                      <option>Family Room — Rp 1.250.000/malam</option>
                      <option>Double Room — Rp 1.500.000/malam</option>
                      <option>Deluxe Room — Rp 2.100.000/malam</option>
                    </select>
                  </div>
                </div>
                <label for="order_comments">Catatan&nbsp;<span class="optional">(opsional)</span></label>
                <textarea id="order_comments" class="form-control" placeholder="Contoh: check-in malam hari, butuh extra bed, dll." rows="5"></textarea>
              </div>
              <div class="col-md-12 mt-30">
                <h3>Pesanan Anda</h3>
                <table class="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>Nama Kamar</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="product-name">Junior Suite x 1 malam<br /><small class="text-muted">Rp 850.000 / malam</small></td>
                      <td><span class="amount">Rp 850.000</span></td>
                    </tr>
                    <tr>
                      <td>Sarapan Pagi Prasmanan</td>
                      <td>Rp 100.000</td>
                    </tr>
                    <tr>
                      <td>Subtotal</td>
                      <td>Rp 950.000</td>
                    </tr>
                    <tr>
                      <td>Pajak &amp; Layanan</td>
                      <td>Gratis</td>
                    </tr>
                    <tr>
                      <td><strong>Total Bayar</strong></td>
                      <td><strong>Rp 950.000</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-12 mt-60">
                <div class="payment-method">
                  <h3>Pilih Metode Pembayaran</h3>
                  <ul class="accordion-box">
                    <li class="accordion block active-block">
                      <div class="acc-btn active">
                        <div class="icon-outer"><i class="lnr-icon-chevron-down"></i></div>
                        Transfer Bank
                      </div>
                      <div class="acc-content current">
                        <div class="payment-info">
                          <p>Pilih bank, kode virtual account dibuat otomatis setelah pesanan.</p>
                          <div class="row">
                            <div class="col-md-4 col-sm-6 mb-3">
                              <label class="pay-option">
                                <input type="radio" name="paymethod" checked />
                                <span class="pay-box"><img class="pay-logo" src="https://assets.tripay.co.id/upload/payment-icon/ytBKvaleGy1605201833.png" alt="BCA" /><span><strong>BCA</strong><small>Virtual Account</small></span></span>
                              </label>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-3">
                              <label class="pay-option">
                                <input type="radio" name="paymethod" />
                                <span class="pay-box"><img class="pay-logo" src="https://assets.tripay.co.id/upload/payment-icon/T9Z012UE331583531536.png" alt="Mandiri" /><span><strong>Mandiri</strong><small>Virtual Account</small></span></span>
                              </label>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-3">
                              <label class="pay-option">
                                <input type="radio" name="paymethod" />
                                <span class="pay-box"><img class="pay-logo" src="https://assets.tripay.co.id/upload/payment-icon/8WQ3APST5s1579461828.png" alt="BRI" /><span><strong>BRI</strong><small>Virtual Account</small></span></span>
                              </label>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-3">
                              <label class="pay-option">
                                <input type="radio" name="paymethod" />
                                <span class="pay-box"><img class="pay-logo" src="https://assets.tripay.co.id/upload/payment-icon/n22Qsh8jMa1583433577.png" alt="BNI" /><span><strong>BNI</strong><small>Virtual Account</small></span></span>
                              </label>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-3">
                              <label class="pay-option">
                                <input type="radio" name="paymethod" />
                                <span class="pay-box"><img class="pay-logo" src="https://assets.tripay.co.id/upload/payment-icon/WtEJwfuphn1614003973.png" alt="CIMB" /><span><strong>CIMB</strong><small>Virtual Account</small></span></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="accordion block">
                      <div class="acc-btn">
                        <div class="icon-outer"><i class="lnr-icon-chevron-down"></i></div>
                        E-Wallet / QRIS
                      </div>
                      <div class="acc-content">
                        <div class="payment-info">
                          <div class="row">
                            <div class="col-md-4 col-sm-6 mb-3">
                              <label class="pay-option">
                                <input type="radio" name="ewallet" />
                                <span class="pay-box"><img class="pay-logo" src="https://assets.tripay.co.id/upload/payment-icon/sj3UHLu8Tu1655719621.png" alt="DANA" /><span><strong>DANA</strong><small>E-Wallet</small></span></span>
                              </label>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-3">
                              <label class="pay-option">
                                <input type="radio" name="ewallet" />
                                <span class="pay-box"><img class="pay-logo" src="https://assets.tripay.co.id/upload/payment-icon/8ewGzP6SWe1649667701.png" alt="QRIS" /><span><strong>QRIS</strong><small>Scan QR</small></span></span>
                              </label>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-3"></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="field-input message-btn mt-30">
                    <button type="submit" class="theme-btn btn-style-one" data-loading-text="Mohon tunggu..."><span class="btn-title">Buat Pesanan</span></button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const boxes = document.querySelectorAll('.payment-method .accordion-box')
  boxes.forEach((box) => {
    const items = box.querySelectorAll('.accordion')
    items.forEach((item, idx) => {
      const btn = item.querySelector('.acc-btn') as HTMLElement | null
      const content = item.querySelector('.acc-content') as HTMLElement | null
      if (!btn || !content) return
      content.style.display = item.classList.contains('active-block') || idx === 0 ? 'block' : 'none'
      btn.addEventListener('click', () => {
        const isOpen = content.style.display !== 'none'
        if (isOpen) return
        box.querySelectorAll('.accordion .acc-btn').forEach((b) => b.classList.remove('active'))
        box.querySelectorAll('.accordion').forEach((a) => a.classList.remove('active-block'))
        box.querySelectorAll('.accordion .acc-content').forEach((c) => {
          (c as HTMLElement).style.display = 'none'
          c.classList.remove('current')
        })
        btn.classList.add('active')
        item.classList.add('active-block')
        content.classList.add('current')
        content.style.display = 'block'
      })
    })
  })
})
</script>

<style scoped>
.pay-option {
  display: block;
  cursor: pointer;
  margin: 0;
}
.pay-option input {
  display: none;
}
.pay-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
}
.pay-logo {
  height: 30px;
  width: auto;
  flex: 0 0 auto;
}
.pay-box strong {
  display: block;
  font-size: 15px;
  line-height: 1.2;
}
.pay-box small {
  display: block;
  color: #777;
  font-size: 13px;
}
.pay-option:hover .pay-box {
  border-color: #5ebb47;
}
.pay-option input:checked + .pay-box {
  border-color: #5ebb47;
  background: #f8faf7;
  box-shadow: inset 0 0 0 1px #5ebb47;
}
</style>
