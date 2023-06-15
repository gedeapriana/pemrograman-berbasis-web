@extends('schema.schema')

@section('container')
  <main class="w-full h-auto border-b-[1px] border-slate-500 flex justify-center items-center">
    <div id="dashboard-wrapper" class="w-full grid max-w-4xl">
      @include('partials.dashboard.profile')
      @include('partials.dashboard.posts')
      @include('partials.dashboard.social')
    </div>
  </main>
@endsection
