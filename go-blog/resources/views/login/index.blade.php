<!doctype html>
<html class="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="{{asset('css/font.css')}}">
    <link rel="stylesheet" href="{{asset('css/root.css')}}">
    <title>go-blog | {{ $title }}</title>
  </head>
  <body>

    <main class="w-full flex justify-center flex-col items-center my-20">
      <header class="flex flex-col justify-center items-center p-10">
        <h1 class="font-[dm-serif] text-xl text-center md:text-2xl py-2">Selamat Datang Di <span class="inline-block text-center bg-slate-950 text-slate-200 py-1 px-4">GO-Blog</span></h1>
        <p class="font-[raleway] text-center">Temukan cerita, pemikiran, dan keahlian dari penulis tentang topik apa pun.</p>
      </header>

      @if(session()->has('success'))
      <article id="success-login-notification" class="w-full max-w-md w-11/12 my-8 flex justify-between items-center border-[1px] border-slate-500 py-4 px-6 font-[raleway]">
        <p class="font-[raleway]">{{ session('success') }}</p>
        <img id="success-login-close" class="w-6 cursor-pointer" src="./assets/images/general/close.svg" alt="">
      </article>
      @endif

      @if(session()->has('loginError'))
        <article id="success-login-notification" class="w-full max-w-md w-11/12 my-8 flex justify-between items-center border-[1px] border-red-500 py-4 px-6 font-[raleway]">
          <p class="font-[raleway] text-red-500">{{ session('loginError') }}</p>
          <img id="success-login-close" class="w-6 cursor-pointer" src="./assets/images/general/close.svg" alt="">
        </article>
      @endif

      <section class="max-w-md w-11/12 flex flex-col items-center justify-center">
        <form class="w-full flex flex-col justify-center items-center" action="/login" method="post">
          @csrf
          <div class="my-2 w-full">
            <label for="email" class="font-[raleway] font-bold">Email</label>
            <input autofocus required type="email" id="email" name="email" class="w-full border-[1px] border-slate-200 p-3 my-2 font-[raleway]" placeholder="Masukkan Email..." value="{{ old('username') }}" autocomplete="off"/>
          </div>

          <div class="my-2 w-full">
            <label for="password" class="font-[raleway] font-bold">Password</label>
            <input required type="password" id="password" name="password" class="w-full border-[1px] border-slate-200 p-3 my-2 font-[raleway]" placeholder="Masukkan Password..."/>
          </div>

          <div class="my-5 flex justify-center gap-5 items-center w-full">
            <a href="/" class="w-1/2 inline-block border-[1px] p-2 font-[raleway] font-bold text-center">Batal</a>
            <button type="submit" class="w-1/2 p-2 font-bold text-slate-200 bg-slate-950" value="login">Login</button>
          </div>
        </form>

        <p class="font-[raleway] my-4 text-center">Belum menjadi bagian dari <strong>GO-Blog</strong>?</p>
        <a href="/register" class="w-1/2 inline-block border-[1px] p-2 font-[raleway] font-bold text-center">Daftar</a>
      </section>
    </main>

    <script src="./js/login.js"></script>
  </body>
</html>
