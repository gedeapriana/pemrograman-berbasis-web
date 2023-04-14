<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home', [
      'title'=>'home'
    ]);
});
Route::get('/post', function () {
  return view('post', [
    'title'=>'post'
  ]);
});
Route::get('/kategori', function () {
  return view('category', [
    'title'=>'category'
  ]);
});
Route::get('/penulis', function () {
  return view('writer', [
    'title'=>'writer'
  ]);
});
Route::get('/tentang', function () {
  return view('about', [
    'title'=>'about'
  ]);
});
