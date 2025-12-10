<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $primaryKey = 'id';
    public $incrementing = false;  // Add this
    protected $keyType = 'string';  // Add this
    
    protected $fillable = ['id', 'name', 'slug'];  // Add 'id' to fillable

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
