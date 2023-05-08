@foreach ($categories as $category)
  <a href="/categories/{{ $category->slug }}" id="category-card-root" class="flex border-[1px] border-slate-900 flex-col justify-center items-center bg-white">
    <div id="category-image" class="w-full grow">
      <img src="https://source.unsplash.com/500x250/?{{ $category->slug }}" alt="" class="w-full grayscale h-full object-cover">
    </div>
    <div id="category-detail" class="p-4">
      <h1 class="text-sm md:text-lg font-[dm-serif]">{{ $category->name }}</h1>
    </div>
  </a>
@endforeach
