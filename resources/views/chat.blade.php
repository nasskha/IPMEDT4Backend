<!-- resources/views/chat.blade.php -->
@extends('layouts.app')

@section('content')
<div class="container">
    <div id="app">
        <chat-component :user="{{ auth()->user() }}"></chat-component>
    </div>
</div>
@endsection
