<div id="home-category-root" class="w-full flex justify-between gap-6 items-center">
  <div id="home-category-header" class="border-r-[1px] h-full border-slate-900 flex items-center justify-center">
    <h3 class="py-7 px-5 text-lg font-[dm-serif] whitespace-nowrap">Kategori Populer</h3>
  </div>

  <div id="home-category-content" class="grow overflow-hidden flex gap-3">
    @foreach($categories as $category)
      <a href="categories/{{$category->slug}}" class="font-[raleway] hover:bg-slate-900 hover:text-slate-50 text-xs lg:text-sm py-2 px-4 bg-white border-[1px] border-slate-900 rounded-full whitespace-nowrap">{{$category->name}}</a>
    @endforeach
  </div>

  <div id="home-category-all" class="border-slate-900 hidden lg:flex h-full border-l-[1px]">
    <a href="/kategori" class="py-7 px-5 text-lg font-[dm-serif] whitespace-nowrap">Semua Kategori</a>
  </div>
</div>


