<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $attributes = [
        "image"=>false,
        "name"=> true,
        "description"=>true,
        "price"=>true,
        "category_id"=>true
    ];
}
