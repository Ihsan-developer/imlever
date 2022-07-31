<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1bio extends Model
{
    use HasFactory;
    protected $table = 'to1bio';
    protected $fillable = ['nama', 'bio'];
}
