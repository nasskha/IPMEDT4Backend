<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DataController;
use App\Http\Controllers\NotitieController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});


Route::get('/notes', [NotitieController::class, 'index']);
Route::post('/notes', [NotitieController::class, 'store']);
Route::put('/notes/{note}', [NotitieController::class, 'update']);
Route::delete('/notes/{note}', [NotitieController::class, 'destroy']);
