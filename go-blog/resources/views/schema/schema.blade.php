<!doctype html>
<html class="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="{{asset('css/font.css')}}">
    <link rel="stylesheet" href="{{asset('css/root.css')}}">
    <link rel="stylesheet" href="{{asset('css/navbar.css')}}">
    <link rel="stylesheet" href="{{asset('css/home.css')}}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>go-blog | {{ $title }}</title>
  </head>
  <body>
    {{-- Navbar --}}
    <nav id="navbar-root" class="w-full h-20 border-b-[1px] border-slate-500 flex items-center justify-center">
      <div id="navbar-wrapper" class="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex justify-between items-center">
        @include('partials.navbar')
      </div>
    </nav>
    {{-- Navbar --}}

    {{-- Content   --}}
    @yield('container')
    {{-- Content   --}}


    <nav id="footer-root" class="w-full h-auto border-b-[1px] bg-white border-slate-500 flex items-center justify-center">
      <div id="footer-wrapper" class="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex justify-between items-center">
        @include('partials.footer')
      </div>
    </nav>

  </body>
</html>
