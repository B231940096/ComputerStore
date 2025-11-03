<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/settings', function () {
    return Inertia::render('settings');
})->name('settings');