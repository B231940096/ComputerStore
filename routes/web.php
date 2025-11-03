<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    //redirect home to dashboard 
    return redirect()->route('dashboard');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard'); // <-- use lowercase to match resources/js/pages/dashboard.tsx
    })->name('dashboard');
    Route::get('/ComputerParts',function(){
        return Inertia::render('ComputerParts');
    });
     // Add your private routes here later
     Route::get('/settings', function () {
         return Inertia::render('settings');
     })->name('settings');
     Route::get('/profile', function () {
         return Inertia::render('Profile/Edit');
     })->name('profile.edit');
     
 });
     
