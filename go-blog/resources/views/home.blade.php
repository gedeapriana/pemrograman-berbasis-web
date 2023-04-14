@extends('schema.schema')

@section('container')
  <main class="w-full h-auto border-b-[1px] border-slate-500 flex items-center justify-center">
    <div class="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex justify-between flex-col items-center">
      @include('partials.home.jumbotron')
    </div>
  </main>
  <main class="w-full h-auto border-b-[1px] border-slate-500 flex items-center justify-center">
    <div class="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex justify-between gap-6 items-center">
      @include('partials.home.category')
    </div>
  </main>
  <main class="w-full h-auto flex items-center justify-center">
    <div class="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 grid">
      @include('partials.home.post')
    </div>
  </main>
  <main class="w-full h-auto flex items-center justify-center">
    <div class="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 grid">
      @include('partials.home.writer')
    </div>
  </main>
@endsection
