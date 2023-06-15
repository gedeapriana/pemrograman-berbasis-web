
<section id="dashboard-posts" class="border-[1px] border-slate-200">
  <h1 class="w-full border-b-[1px] font-[raleway] font-bold text-slate-500 text-center p-2">Postingan</h1>
  <main class="w-full h-auto grid gap-2 p-2 sm:grid-cols-2 md:grid-cols-1">
    @foreach(auth()->user()->posts as $post)
      @include('partials.dashboard.post-card')
    @endforeach
  </main>
</section>
