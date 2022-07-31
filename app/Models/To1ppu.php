<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1ppu extends Model
{
    use HasFactory;
    protected $table = 'to1ppu';
    protected $fillable = ['nama', 'ppu'];
}
