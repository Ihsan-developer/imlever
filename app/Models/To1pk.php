<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1pk extends Model
{
    use HasFactory;
    protected $table = 'to1pk';
    protected $fillable = ['nama', 'pk'];
}
