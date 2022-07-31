<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1kim extends Model
{
    use HasFactory;
    protected $table = 'to1kim';
    protected $fillable = ['nama', 'kim'];
}
