<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class outbox extends Model
{
    protected $table = 'outbox';
    protected $primaryKey = 'kode';
    // public $timestamps = false;
}
