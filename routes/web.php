<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

// Бүх routes Controller руу заана
Route::get('/dashboard', [ProductController::class, 'dashboard'])->name('dashboard');
Route::get('/home', function () {
    return redirect()->route('dashboard');
})->name('home');

Route::get('/computerparts', [ProductController::class, 'computerParts'])->name('computerparts');
Route::get('/furniture', [ProductController::class, 'furniture'])->name('furniture');
Route::get('/pre-built-pc', [ProductController::class, 'preBuiltPc'])->name('pre-built-pc');
Route::get('/peripherals', [ProductController::class, 'peripherals'])->name('peripherals');
Route::get('/console', [ProductController::class, 'console'])->name('console');
Route::get('/laptop', [ProductController::class, 'laptop'])->name('laptop');
Route::get('/phone', [ProductController::class, 'phone'])->name('phone');
Route::get('/networkdevice', [ProductController::class, 'networkDevice'])->name('networkdevice');
Route::get('/figure', [ProductController::class, 'figure'])->name('figure');

Route::get('/basket', function () {
    return Inertia::render('Basket');
})->name('basket');

require __DIR__ . '/settings.php';