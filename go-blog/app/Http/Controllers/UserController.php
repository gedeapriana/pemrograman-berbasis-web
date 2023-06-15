<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Writer;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() {
        return view('writer', [
            'title'=>'writer',
            'writers' => User::all()
        ]);
    }

    public function user($slug) {
      return view('partials.writer.writer-detail', [
        'title'=>'writer',
        'writer'=> User::with(['posts'])->where('slug', $slug)->first()
      ]);
    }
}
