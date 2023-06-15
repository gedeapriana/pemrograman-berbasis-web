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

@auth
  <a href="/dashboard" id="navbar-user-area" class="flex lg:border-[1px] lg:border-slate-200 gap-2 justify-center rounded-full lg:pr-4 lg:py-1 items-center px-2">
    <div id="user-profile" class="w-8 h-8 bg-slate-400 rounded-full"></div>
    <section id="user-description" class="hidden lg:flex flex-col">
      <p class="font-[raleway] font-bold text-md">{{ auth()->user()->username }}</p>
      <p class="font-[raleway] text-xs text-slate-400">#{{ auth()->user()->role }}</p>
    </section>
  </a>
  <div class="user-out">
    <form action="/logout" method="post">
      @csrf
      <button type="submit">Logout</button>
    </form>
  </div>
@else
  <div id="navbar-login">
    <a href="/login" class="inline-block font-[raleway] border-[1px] border-t-slate-200 rounded-full hover:text-slate-200 hover:bg-slate-950 py-2 px-5">Sign Up</a>
  </div>
@endauth
