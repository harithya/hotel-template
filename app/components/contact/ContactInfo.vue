<template>
<section class="contact-details">
	<div class="container pt-110 pb-70">
		<div class="row">
			<div class="col-xl-7 col-lg-6">
				<div class="sec-title">
					<span class="sub-title before-none">Kirim pesan</span>
					<h2>Hubungi Kami</h2>
				</div>
				<!-- Contact Form -->
				<form id="contact_form" name="contact_form" action="includes/sendmail.php" method="post">
					<div class="row">
						<div class="col-sm-6">
							<div class="mb-3">
								<input name="form_name" class="form-control" type="text" placeholder="Masukkan Nama Lengkap">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="mb-3">
								<input name="form_email" class="form-control required email" type="email" placeholder="Masukkan Alamat Email">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="mb-3">
								<input name="form_subject" class="form-control required" type="text" placeholder="Subjek Pesan">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="mb-3">
								<input name="form_phone" class="form-control" type="text" placeholder="Nomor WhatsApp/HP">
							</div>
						</div>
					</div>
					<div class="mb-3">
						<textarea name="form_message" class="form-control required" rows="7" placeholder="Tuliskan pesan atau pertanyaan Anda..."></textarea>
					</div>
					<div class="mb-5">
						<input name="form_botcheck" class="form-control" type="hidden" value="" />
						<button type="submit" class="theme-btn btn-style-one" data-loading-text="Mohon tunggu..."><span class="btn-title">Kirim Pesan</span></button>
						<button type="reset" class="theme-btn btn-style-one bg-theme-color5"><span class="btn-title">Ulangi</span></button>
					</div>
				</form>
				<!-- Contact Form Validation-->
			</div>
			<div class="col-xl-5 col-lg-6">
				<div class="contact-details__right">
					<div class="sec-title">
						<span class="sub-title before-none">Butuh bantuan?</span>
						<div class="text">Tim kami siap membantu reservasi, pertanyaan fasilitas, dan layanan khusus 24 jam setiap hari.</div>
					</div>
					<ul class="list-unstyled contact-details__info">
						<li>
							<div class="icon">
								<span class="fa-classic fa-light fa-phone-plus"></span>
							</div>
							<div class="text">
								<h6 class="mb-1">Ada pertanyaan?</h6>
								<a href="tel:+62361888999"><span>Gratis</span> +62 361 888 999</a>
							</div>
						</li>
						<li>
							<div class="icon">
								<span class="fal fa-envelope"></span>
							</div>
							<div class="text">
								<h6 class="mb-1">Kirim email</h6>
								<a href="mailto:info@hoteler.co.id">info@hoteler.co.id</a>
							</div>
						</li>
						<li>
							<div class="icon">
								<span class="fal fa-location-arrow"></span>
							</div>
							<div class="text">
								<h6 class="mb-1">Kunjungi kami</h6>
								<span>Jl. Pantai Utama No. 88, Kuta, Bali</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
</template>
