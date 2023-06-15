<article id="dashboard-profile" class="border-[1px] flex flex-col relative border-slate-200">
  <div id="profile-middle" class="absolute px-8 xl:px-12 w-full gap-2 top-1/2 left-1/2 flex justify-around items-center translate-y-[-50%] translate-x-[-50%]">
    <div id="profile-cirlce" class="w-20 h-20 bg-slate-300 rounded-full"></div>
    <div id="profile-role" class="bg-white ml-auto font-[raleway] text-xs lg:text-sm border-[1px] border-slate-200 py-2 px-4">{{ auth()->user()->role }}</div>
    <a href="" id="profile-edit" class="bg-white font-[raleway] text-xs lg:text-sm border-[1px] border-slate-200 py-2 px-4">Edit Profile</a>
  </div>
  <div id="profile-image" class="w-full h-1/2 bg-red-200">
    <img src="https://source.unsplash.com/500x250/?programming" class="w-full h-full object-cover" alt="">
  </div>
  <div id="profile-desc" class="w-full h-1/2 py-12 px-10 xl:px-14">
    <div id="desc-username" class="font-[dm-serif] lg:text-xl my-2">{{ auth()->user()->username }} <span class="font-[raleway] text-slate-500">#{{ auth()->user()->id }}</span></div>
    <div id="desc-fullname" class="font-[raleway] lg:text-sm text-slate-500">{{ auth()->user()->name }} | <span>{{ auth()->user()->posts->count() }} Postingan</span></div>
    <div id="desc-bio" class="">

    </div>
  </div>
</article>
