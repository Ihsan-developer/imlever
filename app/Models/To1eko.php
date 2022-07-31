<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1eko extends Model
{
    use HasFactory;
    protected $table = 'to1eko';
    protected $fillable = ['nama', 'eko'];
}
