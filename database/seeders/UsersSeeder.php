<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Start
        DB::table('users')->insert([
            'name' => 'PakGuru',
            'role' => 'admin',
            'email' => 'admin@sma404.com',
            'password' => bcrypt('password123')

        ]);
        DB::table('users')->insert([
            'name' => 'andi',
            'role' => 'siswa',
            'siswa_id' => 1,
            'email' => 'andi@sma404.com',
            'password' => bcrypt('password123')

        ]);
        DB::table('users')->insert([
            'name' => 'risan',
            'role' => 'siswa',
            'siswa_id' => 2,
            'email' => 'risan@sma404.com',
            'password' => bcrypt('password123')
        ]);
    }
}
