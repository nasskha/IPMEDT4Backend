<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('voortgangen', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('user_id');
            $table->date('datum');
            $table->string('mood');
            $table->integer('progress');
            
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('voortgangen');
    }
};