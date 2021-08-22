<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\inbox;

class configChat extends Model
{
    protected $table = 'config_chat_otomax';

    public function inbox()
    {
        return $this->hasMany(inbox::class, 'pengirim', 'pengirim');
    }
}
