<template>
<header class="main-header header-style-four style-dark style-home14">
  <!-- Main box -->
  <div class="main-box">
    <div class="logo-box">
      <div class="logo"><NuxtLink to="/"><img src="/logo-ver.png" alt="" title="Hoteler" /></NuxtLink></div>
    </div>
    <!--Nav Box-->
    <div class="nav-outer">
      <nav class="nav main-menu">
        <NavMenu />
      </nav>
      <!-- Main Menu End-->
    </div>
    <div class="outer-box">
      <div class="ui-btn-outer">
        <NuxtLink to="/login" class="theme-btn btn-style-two"><span class="btn-title">Member Area</span></NuxtLink>
      </div>
      <div class="mobile-nav-toggler"><i class="icon fal fa-bars"></i></div>
      <!-- Mobile Nav toggler -->
    </div>
  </div>
  <div class="auto-container">
    <!-- Mobile Menu  -->
    <div class="mobile-menu">
      <div class="menu-backdrop"></div>
      <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
      <nav class="menu-box">
        <div class="upper-box">
          <div class="nav-logo"><NuxtLink to="/"><img src="/logo-ver.png" alt="" /></NuxtLink></div>
          <div class="close-btn"><i class="icon fa fa-times"></i></div>
        </div>
        <NavMenu />
        <ul class="contact-list-one">
          <li>
            <!-- Contact Info Box -->
            <div class="contact-info-box">
              <i class="icon fal fa-phone"></i>
              <span class="title">Hubungi Kami</span>
              <a href="tel:+628123456789">+62 812-3456-789</a>
            </div>
          </li>
          <li>
            <!-- Contact Info Box -->
            <div class="contact-info-box">
              <span class="icon fal fa-envelope"></span>
              <span class="title">Kirim Email</span>
              <a href="mailto:info@hoteler.co.id">info@hoteler.co.id</a>
            </div>
          </li>
          <li>
            <!-- Contact Info Box -->
            <div class="contact-info-box">
              <span class="icon fa-sharp fal fa-clock-desk"></span>
              <span class="title">Jam Operasional</span>
              Senin - Minggu 24 Jam
            </div>
          </li>
        </ul>
        <ul class="social-links">
          <li><a href="#"><i class="fab fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </nav>
    </div>
    <!-- End Mobile Menu -->

    <!-- Sticky Header  -->
    <div class="sticky-header">
      <div class="auto-container">
        <div class="inner-container">
          <!--Logo-->
          <div class="logo">
            <NuxtLink to="/"><img src="/logo-ver.png" alt="" /></NuxtLink>
          </div>
          <!--Right Col-->
          <div class="nav-outer">
            <!-- Main Menu -->
            <nav class="main-menu">
              <div class="navbar-collapse show collapse clearfix">
                <NavMenu />
              </div>
            </nav><!-- Main Menu End-->
            <!--Mobile Navigation Toggler-->
            <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>
          </div>
        </div>
      </div>
    </div><!-- End Sticky Menu -->
  </div>
</header>
</template>
