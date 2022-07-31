<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRata2Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rata2', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->integer('rataTps');
            $table->integer('rataTkaSt');
            $table->integer('rataTkaSs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rata2');
    }
}
