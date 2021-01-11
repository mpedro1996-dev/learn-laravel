<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{  


    private $seeds = [
        CategorySeeder::class,
        ProductSeeder::class

    ];

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->seeds as $seed){

            if($this->verifyIfExecuted($seed)) continue;

            $this->call($seed);

            $this->registerSeedExecuted($seed);

        }
    }

    private function verifyIfExecuted(string $seederName)
    {
        $seeds = DB::select('select * from database_seeds where name = ?', [$seederName]);

        if(count($seeds) > 0) return true;

        return false;        

    }

    private function registerSeedExecuted(string $seederName)
    {
        DB::insert('insert into database_seeds (name) values (?)', [$seederName]);
    }
    
}
