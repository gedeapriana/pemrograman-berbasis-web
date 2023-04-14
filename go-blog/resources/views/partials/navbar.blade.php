<div id="navbar-brand">
  <h3 class="font-[dm-serif] text-slate-950 text-2xl">GO-blog</h3>
</div>

<ul id="navbar-list" class="hidden justify-center items-center gap-4 md:flex">
  <li><a href="/" class="{{ $title == 'home' ? "font-bold" : "" }}">Beranda</a></li>
  <li><a href="/post" class="{{ $title == 'post' ? "font-bold" : "" }}">Post</a></li>
  <li><a href="/kategori" class="{{ $title == 'category' ? "font-bold" : "" }}">Kategori</a></li>
  <li><a href="/penulis" class="{{ $title == 'writer' ? "font-bold" : "" }}">Penulis</a></li>
  <li><a href="/tentang" class="{{ $title == 'about' ? "font-bold" : "" }}">Tentang</a></li>
</ul>

<div id="navbar-hamburger" class="md:hidden ml-auto mx-4">
  <i class='bx bx-dots-vertical-rounded text-2xl'></i>
</div>

<div id="navbar-profile">
  <div class="rounded-full h-12 w-12 bg-slate-900"></div>
</div>
