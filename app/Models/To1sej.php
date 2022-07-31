<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1sej extends Model
{
    use HasFactory;
    protected $table = 'to1sej';
    protected $fillable = ['nama', 'sej'];
}
