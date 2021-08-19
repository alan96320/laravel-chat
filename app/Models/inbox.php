<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\outbox;

class inbox extends Model
{
    protected $table = 'inbox';
    protected $primaryKey = 'kode';
    // public $timestamps = false;

    public function outbox()
    {
        return $this->hasMany(outbox::class, 'kode_inbox', 'kode');
    }
}
