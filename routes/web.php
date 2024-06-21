<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// routes/web.php
use App\Http\Controllers\FriendshipController;
use App\Http\Controllers\MessageController;

Route::middleware('auth')->group(function () {
    Route::post('/friends/add', [FriendshipController::class, 'addFriend']);
    Route::get('/friends', [FriendshipController::class, 'getFriends']);

    Route::post('/messages/send', [MessageController::class, 'sendMessage']);
    Route::get('/messages/{friend_id}', [MessageController::class, 'getMessages']);
});
