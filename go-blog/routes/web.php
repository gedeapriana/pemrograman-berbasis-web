<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegistrationController;
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
Route::get('/post/{slug}', [PostController::class, 'post'])->middleware('auth');

Route::get('/kategori', [CategoryController::class, 'index']);

Route::get('/penulis', [UserController::class, 'index']);
Route::get('/penulis/{slug}', [UserController::class, 'writer'])->middleware('auth');

Route::get('/tentang', [AboutController::class, 'index']);

Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::get('/register', [RegistrationController::class, 'index'])->middleware('guest');
Route::post('/register', [RegistrationController::class, 'store']);

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth');


