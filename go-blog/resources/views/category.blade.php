@extends('schema.schema')

@section('container')
  <main class="w-full h-auto border-b-[1px] border-slate-500 flex flex-col items-center justify-center">
    <div class="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 gap-5">
      @include('partials.category.category')
    </div>
  </main>
@endsection
