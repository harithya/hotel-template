<template>
<footer class="main-footer footer-style-one">
  <!-- Widgets Section -->
  <div class="widgets-section">
    <div class="auto-container">
      <div class="row">
        <!-- Footer Column -->
        <div class="footer-column col-lg-4 col-sm-6">
          <div class="footer-widget about-widget wow fadeInLeft">
            <div class="widget-content">
              <div class="logo"><NuxtLink to="/"> <img src="/logo-ver.png" alt=""></NuxtLink></div>
              <div class="text mb-0">Jangan ragu untuk menghubungi kami untuk reservasi kamar, layanan khusus, maupun informasi fasilitas hotel.</div>
            </div>
          </div>
          <div class="footer-widget news-widget wow fadeInLeft" data-wow-delay="400ms">
            <div class="subscribe-form-three">
              <form method="post" action="#">
                <div class="form-group">
                  <input type="email" name="email" class="email" value="" placeholder="Masukkan Alamat Email" required="">
                  <button type="button" class="theme-btn btn-style-one"><span class="btn-title"><i class="fa fa-paper-plane"></i></span></button>
                </div>
              </form>
            </div>
          </div>
          <div class="footer-widget widget-social wow fadeInLeft" data-wow-delay="300ms">
            <h4 class="widget-title">Ikuti Kami</h4>
            <div class="widget-content">
              <ul class="social-icon">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Column -->
        <div class="footer-column col-lg-3 col-sm-6 mb-0 ps-xl-5">
          <div class="footer-widget links-widget ps-xl-5 wow fadeInLeft" data-wow-delay="200ms">
            <h4 class="widget-title">Fasilitas</h4>
            <div class="widget-content">
              <ul class="user-links">
                <li><NuxtLink to="/rooms">Kamar & Suite</NuxtLink></li>
                <li><NuxtLink to="/tour-virtual">Tour Virtual 360</NuxtLink></li>
                <li><a href="#/">Restoran & Kuliner</a></li>
                <li><a href="#/">Kolam Renang Rooftop</a></li>
                <li><a href="#/">Pusat Kebugaran & Spa</a></li>
                <li><a href="#/">Ruang Rapat & Acara</a></li>
              </ul>
            </div>
          </div>                       
        </div>
        <!-- Footer Column -->
        <div class="footer-column col-lg-2 col-sm-6 mb-0 ps-xl-4">
          <div class="footer-widget links-widget ps-xl-4 wow fadeInLeft" data-wow-delay="200ms">
            <h4 class="widget-title">Navigasi</h4>
            <div class="widget-content">
              <ul class="user-links">
                <li><NuxtLink to="/">Beranda</NuxtLink></li>
                <li><NuxtLink to="/about">Tentang Kami</NuxtLink></li>
                <li><NuxtLink to="/rooms">Kamar</NuxtLink></li>
                <li><NuxtLink to="/news">Berita & Artikel</NuxtLink></li>
                <li><NuxtLink to="/contact">Kontak Kami</NuxtLink></li>
              </ul>
            </div>
          </div>                       
        </div>
        <!-- footer column -->
        <div class="footer-column col-lg-3 col-sm-6">
          <div class="footer-widget info-widget ps-xl-5 ms-xl-5 mb-30 wow fadeInLeft" data-wow-delay="300ms">
            <h4 class="widget-title">Lokasi Resort</h4>
            <div class="widget-content">
              <!-- Contact List -->
              <div class="contact-list">
                <div class="inner">
                  <div class="list-info">Jl. Pantai Utama No. 88, Kuta, Bali</div>
                  <div class="list-info">+62 361 888 999</div>
                  <div class="list-info">info@hoteler.co.id</div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-widget info-widget ps-xl-5 ms-xl-5 wow fadeInLeft" data-wow-delay="300ms">
            <h4 class="widget-title">Kantor Perwakilan</h4>
            <div class="widget-content">
              <!-- Contact List -->
              <div class="contact-list">
                <div class="inner">
                  <div class="list-info">Jl. Jendral Sudirman No. 45, Jakarta</div>
                  <div class="list-info">+62 21 555 8888</div>
                  <div class="list-info">reservation@hoteler.co.id</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  Footer Bottom -->
  <div class="footer-bottom">
    <div class="auto-container">
      <div class="inner-container">
        <div class="copyright-text">© 2026 <span>Hoteler Luxury Resort</span>. Hak Cipta Dilindungi.</div>
      </div>
    </div>
  </div>
</footer>
</template>
