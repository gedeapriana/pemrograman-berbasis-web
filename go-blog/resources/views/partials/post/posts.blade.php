@foreach($posts as $post)
  <a href="" id="post-card-root" class="flex flex-col justify-center items-start border-[1px] border-slate-900">
    <div id="main-post-image" class="w-full h-full overflow-hidden">
      <img src="https://images.unsplash.com/photo-1598078412711-93b01b0fb206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" class="w-full h-full object-cover">
    </div>
    <div id="main-post-desc" class="p-3">
      <div id="detail-header" class="w-full flex items-center gap-3 font-[raleway]">
        <div id="profile-circle" class="w-6 h-6 rounded-full bg-slate-900"></div>
        <div id="profile-name" class="font-bold text-xs text-slate-900">Gede Apriana</div>
        <div id="date" class="text-slate-600 text-xs">Okt 25, 2023</div>
      </div>
      <div id="detail-main">
        <h1 id="title" class="font-bold text-xl font-[dm-serif] py-2">{{$post->title}}</h1>
        <div id="sub-title" class="text-md font-[raleway] h-14 overflow-hidden relative">
          {{$post->content}}
          <div id="post-content-shadow" class="absolute w-full h-full bottom-0"></div>
        </div>
      </div>
      <div id="detail-footer" class="w-full flex gap-3 items-center pt-4 justify-start overflow-hidden">
        <div id="footer-category" class="font-[raleway] rounded-full py-1 px-2 text-xs bg-slate-100">Programming</div> |
        {{--          <div id="footer-tags" class="flex overflow-hidden">--}}
        {{--            <div id="footer-category" class="font-[raleway] text-xs rounded-full py-1 px-2">#Programming</div>--}}
        {{--            <div id="footer-category" class="font-[raleway] text-xs rounded-full py-1 px-2">#Coding</div>--}}
        {{--            <div id="footer-category" class="font-[raleway] text-xs rounded-full py-1 px-2">#Web Development</div>--}}
        {{--          </div>--}}
      </div>
    </div>
  </a>
@endforeach




