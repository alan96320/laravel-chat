<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ConfigChatOtomax extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('config_chat_otomax', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('kode_reseller');
            $table->string('pengirim');
            $table->string('tipe_pengirim');
            $table->integer('status')->default(false);
            $table->enum('role',['jabbim', 'whatsapp', 'telegram']);
            $table->string('keybot')->nullable();
            $table->string('lastChat')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('config_chat_otomax');
    }
}
