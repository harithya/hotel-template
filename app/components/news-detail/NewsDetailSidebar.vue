<template>
<div class="col-xl-4 col-lg-5">
	<div class="sidebar">
		<div class="sidebar__single sidebar__search">
			<form action="#" class="sidebar__search-form">
				<input type="search" placeholder="Search here">
				<button type="submit"><i class="lnr-icon-search"></i></button>
			</form>
		</div>
		<div class="sidebar__single sidebar__post">
			<h3 class="sidebar__title">Latest Posts</h3>
			<ul class="sidebar__post-list list-unstyled">
				<li>
					<div class="sidebar__post-image"> <img src="/images/resource/news-1.jpg" alt=""> </div>
					<div class="sidebar__post-content">
						<h3> <span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span> <NuxtLink to="/news-details">Top crypto exchange influencers</NuxtLink>
						</h3>
					</div>
				</li>
				<li>
					<div class="sidebar__post-image"> <img src="/images/resource/news-2.jpg" alt=""> </div>
					<div class="sidebar__post-content">
						<h3> <span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span> <NuxtLink to="/news-details">Necessity may give us best virtual court</NuxtLink> </h3>
					</div>
				</li>
				<li>
					<div class="sidebar__post-image"> <img src="/images/resource/news-3.jpg" alt=""> </div>
					<div class="sidebar__post-content">
						<h3> <span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span> <NuxtLink to="/news-details">You should know about business plan</NuxtLink> </h3>
					</div>
				</li>
			</ul>
		</div>
		<div class="sidebar__single sidebar__category">
			<h3 class="sidebar__title">Categories</h3>
			<ul class="sidebar__category-list list-unstyled">
				<li><NuxtLink to="/news-details">Business<span class="lnr-icon-arrow-right"></span></NuxtLink> </li>
				<li class="active"><NuxtLink to="/news-details">Digital Agency<span class="lnr-icon-arrow-right"></span></NuxtLink></li>
				<li><NuxtLink to="/news-details">Introductions<span class="lnr-icon-arrow-right"></span></NuxtLink> </li>
				<li><NuxtLink to="/news-details">New Technologies<span class="lnr-icon-arrow-right"></span></NuxtLink> </li>
				<li><NuxtLink to="/news-details">Parallax Effects<span class="lnr-icon-arrow-right"></span></NuxtLink> </li>
				<li><NuxtLink to="/news-details">Web Development<span class="lnr-icon-arrow-right"></span></NuxtLink> </li>
			</ul>
		</div>
		<div class="sidebar__single sidebar__tags">
			<h3 class="sidebar__title">Tags</h3>
			<div class="sidebar__tags-list"> <a href="#">Consulting</a> <a href="#">Agency</a> <a href="#">Business</a> <a href="#">Digital</a> <a href="#">Experience</a> <a href="#">Technology</a> </div>
		</div>
	</div>
</div>
</template>
