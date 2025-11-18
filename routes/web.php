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
Route::get('/pre-built-pc', function () {
    return Inertia::render('PreBuiltPC');
})->name('pre-built-pc');
Route::get('/pre-built-pc', function () {
    return Inertia::render('PreBuiltPC');
})->name('pre-built-pc');
Route::get('/peripherals', function () {
    return Inertia::render('Peripherals');
})->name('peripherals');
Route::get('/console', function () {
    return Inertia::render('Console');
})->name('console');
Route::get('/laptop', function () {
    return Inertia::render('Laptop');
})->name('laptop');
Route::get('/phone', function () {
    return Inertia::render('Phone');
})->name('phone');
Route::get('/networkdevice', function () {
    return Inertia::render('NetworkDevice');
})->name('networkdevice');
Route::get('/figure', function () {
    return Inertia::render('Figure');
})->name('figure');

require __DIR__ . '/settings.php';