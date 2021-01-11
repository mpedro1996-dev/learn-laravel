<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            "name"=>"Laravel",
            "description"=> "Curso de Laravel 8",
            "price"=>50,
            "category_id"=>1
        ]);

        Product::create([
            "name"=>"Javascript",
            "description"=> "Curso de Javascript",
            "price"=>40,
            "category_id"=>1
        ]);

        Product::create([
            "name"=>"Teclado",
            "description"=> "Teclado bom para programar",
            "price"=>60,
            "category_id"=>2
        ]);

        Product::create([
            "name"=>"Mouse",
            "description"=> "Mouse bom para programar",
            "price"=>20,
            "category_id"=>2
        ]);

        Product::create([
            "name"=>"Monitor",
            "description"=> "Monitor bom e grande para visualizar todo código-fonte",
            "price"=>2000,
            "category_id"=>2
        ]);

        Product::create([
            "name"=>"Placa de arduino",
            "description"=> "Placa de arduino para iniciar na automação",
            "price"=>200,
            "category_id"=>3
        ]);

        
    }
}
