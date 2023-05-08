<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        return view('post', [
            'title'=>'post',
            'posts'=> Post::with(['user', 'category'])->latest()->paginate(6)
        ]);
    }

    public function post($slug) {
        return view('partials.post.post-detail', [
            'title'=>'post',
            'post'=> Post::with(['user', 'category'])->where('slug', $slug)->first()
        ]);
    }
}
