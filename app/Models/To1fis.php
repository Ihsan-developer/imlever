<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1fis extends Model
{
    use HasFactory;
    protected $table = 'to1fis';
    protected $fillable = ['nama', 'fis'];
}
