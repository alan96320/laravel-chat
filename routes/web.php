<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\chatController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [chatController::class, 'jabbim']);
Route::get('/wa', [chatController::class, 'wa']);
Route::get('/tele', [chatController::class, 'tele']);

Route::get('/chat',[chatController::class, 'getmessage']);
Route::post('/chat',[chatController::class, 'save']);


