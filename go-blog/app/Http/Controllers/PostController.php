<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        return view('post', [
            'title'=>'post',
            'posts'=>Post::paginate(6)
        ]);
    }
}
