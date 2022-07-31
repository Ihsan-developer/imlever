<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class To1mtk extends Model
{
    use HasFactory;
    protected $table = 'to1mtk';
    protected $fillable = ['nama', 'mtk'];
}
