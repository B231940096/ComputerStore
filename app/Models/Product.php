<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = [
        'title',
        'category_id',
        'image',
        'price',
        'rating',
        'badge',
        'is_free_delivery',
        'stock',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
