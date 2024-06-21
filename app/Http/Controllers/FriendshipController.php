<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FriendshipController extends Controller
{
    // Een voorbeeld van een index methode
    public function index()
    {
        // Hier zou je de logica hebben om een lijst met vrienden op te halen
        return view('friends.index'); // Zorg ervoor dat deze view bestaat
    }
}
