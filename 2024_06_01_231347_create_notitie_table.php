<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{   
    public function up(): void
    {
        Schema::create('notities', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('user_id');
            $table->date('datum');
            $table->text('inhoud');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notities');
    }
};