<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1pu extends Model
{
    use HasFactory;
    protected $table = 'to1pu';
    protected $fillable = ['nama', 'pu'];
}
