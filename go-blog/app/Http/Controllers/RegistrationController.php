<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
  public function index() {
    return view('register.index', [
      'title' => 'Registration'
    ]);
  }

  public function store(Request $request) {
    $validatedData = $request->validate([
      'username' => ['required', 'min:3', 'max:20', 'unique:users', 'alpha_dash'],
      'name' => ['required', 'min:5', 'max:50'],
      'email' => ['required', 'email:dns', 'unique:users'],
      'password' => ['required', 'min:8', 'max:255']
    ]);

    $validatedData['password'] = bcrypt($validatedData['password']);

    $remain_data = [
      'slug' => strtolower($validatedData['username']),
      'role' => 'writer'
    ];

    $recap = array_merge($validatedData, $remain_data);

    User::create($recap);
  }
}
