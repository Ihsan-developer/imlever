<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class SiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Start
        DB::table('siswa')->insert([
            'nama' => 'Andi',
            'nis' => '101',
            'tgl_lahir' => '2002-12-22'
        ]);

        DB::table('siswa')->insert([
            'nama' => 'risan',
            'nis' => '102',
            'tgl_lahir' => '2003-11-10'
        ]);
    }
}
