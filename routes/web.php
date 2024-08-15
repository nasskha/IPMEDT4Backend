<?php


use Illuminate\Support\Facades\Route;

// Route to handle the root URL and serve the Flutter view
Route::get('/', function () {
    return view('flutter');
});

// Route to handle all requests to /flutter and any subpaths (e.g., /flutter/*)
Route::get('/flutter/{any}', function () {
    return view('flutter');
})->where('any', '.*');








