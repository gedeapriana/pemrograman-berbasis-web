<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index() {
        return view('writer', [
            'title'=>'writer',
            'writers' => User::all()
        ]);
    }
}
