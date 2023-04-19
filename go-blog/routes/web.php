<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
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

Route::get('/', [HomeController::class, 'index']);
Route::get('/post', [PostController::class, 'index']);
Route::get('/kategori', [CategoryController::class, 'index']);

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
