<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('dashboard'); // <-- use lowercase to match resources/js/pages/dashboard.tsx
})->name('dashboard');
Route::get('/home', function () {
    return redirect()->route('dashboard');
})->name('home');
Route::get('/computerparts', function () {
    return Inertia::render('ComputerParts');
})->name('computerparts');
Route::get('/furniture', function () {
    return Inertia::render('Furniture');
})->name('furniture');


require __DIR__ . '/settings.php';