<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('category_id'); // Changed to string to match categories table
            $table->string('image')->nullable();
            $table->decimal('price', 15, 2);
            $table->float('rating')->default(0);
            $table->string('badge')->nullable();
            $table->boolean('is_free_delivery')->default(false);
            $table->integer('stock')->default(0);
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};