<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
  public function index() {
    return view('home', [
      'title'=>'home',
      'categories'=>Category::all(),
      'posts'=>Post::with(['user', 'category'])->get()
    ]);
  }
}
