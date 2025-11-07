<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/dashboard', function () {
    return Inertia::render('dashboard'); // <-- use lowercase to match resources/js/pages/dashboard.tsx
})->name('dashboard');
Route::get('/computerparts', function () {
    return Inertia::render('ComputerParts');
})->name('computerparts');
Route::get('/furniture', function () {
    return Inertia::render('Furniture');
})->name('furniture');

Route::middleware(['auth', 'verified'])->group(function () {


    // Add your private routes here later
    Route::get('/profile', function () {
        return Inertia::render('Profile/Edit');
    })->name('profile.edit');

});

require __DIR__ . '/settings.php';