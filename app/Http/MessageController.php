<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function sendMessage(Request $request)
    {
        $message = Message::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $request->input('receiver_id'),
            'message' => $request->input('message')
        ]);
        return response()->json($message);
    }

    public function getMessages($friend_id)
    {
        $messages = Message::where(function ($query) use ($friend_id) {
            $query->where('sender_id', auth()->id())
                  ->orWhere('receiver_id', auth()->id());
        })->where(function ($query) use ($friend_id) {
            $query->where('sender_id', $friend_id)
                  ->orWhere('receiver_id', $friend_id);
        })->get();

        return response()->json($messages);
    }
}
