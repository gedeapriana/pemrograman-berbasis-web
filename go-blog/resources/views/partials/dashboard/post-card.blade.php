<article class="w-full border-[1px] border-slate-200">
  <div class="w-full h-20">
    <img class="w-full h-full object-cover grayscale" src="https://source.unsplash.com/500x250/?{{ $post->category->name }}" alt="">
  </div>
  <h2 class="p-2 font-[dm-serif]">{{$post->title}}</h2>
  <footer class="w-full gap-1 p-2 flex justify-end items-center">
    <a href="">Hapus</a>
    <a href="">Edit</a>
    <a href="">Detail</a>
  </footer>
</article>
