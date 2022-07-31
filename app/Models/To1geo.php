<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1geo extends Model
{
    use HasFactory;
    protected $table = 'to1geo';
    protected $fillable = ['nama', 'geo'];
}
