<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;


// Auth routes
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/check_username', [AuthController::class, 'checkUsername']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');






