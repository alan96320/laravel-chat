<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\inbox;
use App\Models\outbox;
use App\Models\configChat;
use Carbon\Carbon;

class chatController extends Controller
{
    public function jabbim(Request $request)
    {
        $data = configChat::where('role', 'jabbim')->get();
        $id = $request->id ?? $data->first()->id ?? null;
        $chat = configChat::with(['inbox' => function ($e){
            $e->with('outbox')->where('tipe_pengirim','g');
        }])->where('role','jabbim')->where('id', $id)->first();
        if ($chat) {
            $chat->inboxFilter = $chat->inbox->groupBy(function($item, $key){
                return Carbon::parse($item->tgl_entri)->format('d');
            });
        }

        return view('chat',[
            'data' => $data,
            'type' => 'g',
            'nama' => 'jabbim',
            'icon' => 'fas fa-fire',
            'chat' => $chat
        ]);
    }

    public function wa()
    {
        $data = configChat::where('role', 'whatsapp')->get();
        $id = $request->id ?? $data->first()->id ?? null;
        $chat = configChat::with(['inbox' => function ($e){
            $e->with('outbox')->where('tipe_pengirim','y');
        }])->where('role','whatsapp')->where('id', $id)->first();
        if ($chat) {
            $chat->inboxFilter = $chat->inbox->groupBy(function($item, $key){
                return Carbon::parse($item->tgl_entri)->format('d');
            });
        }
        return view('chat',[
            'data' => $data,
            'type' => 'y',
            'nama' => 'whatsapp',
            'icon' => 'fab fa-whatsapp',
            'chat' => $chat
        ]);
    }

    public function tele()
    {
        $data = configChat::where('role', 'telegram')->get();
        $id = $request->id ?? $data->first()->id ?? null;
        $chat = configChat::with(['inbox' => function ($e){
            $e->with('outbox')->where('tipe_pengirim','y');
        }])->where('role','telegram')->where('id', $id)->first();
        if ($chat) {
            $chat->inboxFilter = $chat->inbox->groupBy(function($item, $key){
                return Carbon::parse($item->tgl_entri)->format('d');
            });
        }
        return view('chat',[
            'data' => $data,
            'type' => 'y',
            'nama' => 'telegram',
            'icon' => 'fab fa-telegram',
            'chat' => $chat
        ]);
    }

    public function save(Request $request)
    {
        $id = $request->id;
        $configChat = configChat::find($id);

        $inbox = new inbox;
        $inbox->tgl_entri = now();
        $inbox->kode_reseller = $configChat->kode_reseller;
        $inbox->pengirim = $configChat->pengirim;
        $inbox->tipe_pengirim = $configChat->tipe_pengirim;
        $inbox->pesan = $request->text;
        $inbox->status = $configChat->status;
        $inbox->tgl_status = now();
        $inbox->save();
        return response()->json($inbox);
    }

    public function getmessage($id,$idkontak)
    {
        $end = false;
        return response()->stream(function () use ($end,$id,$idkontak) {
            while (true) {
                if (connection_aborted() || $end) {
                    break;
                }
                $outbox = outbox::where('kode_inbox',$id)->first();
                $kontak = configChat::find($idkontak);
                $end = $outbox ? true : false ;
                if ($outbox) {
                    $send = self::sendProvider($kontak,$outbox->pesan);
                }
                $data = collect([
                    'status' => $end,
                    'data' => $outbox
                ])->toJson();
                echo "event: ".$id."\n", "data: $data", "\n\n";

                ob_flush();
                flush();
                sleep(2);
            }
        }, 200, [
            'Cache-Control' => 'no-cache',
            'Content-Type' => 'text/event-stream',
        ]);
    }

    public function sendProvider($config,$pesan)
    {
        // $config = configChat::find($config);
        $url = null;
        if ($config->role == 'whatsapp') {
            $url = "https://api.callmebot.com/whatsapp.php?source=php&phone=".$config->pengirim."&text=".urlencode($pesan)."&apikey=".$config->keybot;
        }
        if ($config->role == 'telegram') {
            $url = "http://api.callmebot.com/text.php?user=".$config->pengirim."&text=".urlencode($pesan);
        }
        if ($url != null) {
            if($ch = curl_init($url)){
                curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
                $html = curl_exec($ch);
                $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                curl_close($ch);
                // return $html;
                // return (int) $status;
            }
        }

    }

    public function getContak($id)
    {
        $data = configChat::find($id);
        return response()->json($data,200);
    }

    public function addContak(Request $request)
    {
        $role = $request->role;
        $type = ($role == 'jabbim') ? 'g' : 'y';
        $configChat = new configChat;
        $configChat->username = $request->nama;
        $configChat->kode_reseller = $request->kode_reseller;
        $configChat->pengirim = $request->pengirim;
        $configChat->tipe_pengirim = $type;
        $configChat->status = 0;
        $configChat->role = $role;
        if ($role == 'whatsapp') {
            $configChat->keybot = $request->keybot;
        }
        $configChat->save();
        $url = ($role == 'whatsapp') ? 'wa' : ($role == 'telegram' ? 'tele' : '/');
        return redirect($url);
    }

    public function updateContak(Request $request, $id)
    {
        $role = $request->role;
        $type = ($role == 'jabbim') ? 'g' : 'y';

        $configChat = configChat::find($id);
        $configChat->username = $request->nama;
        $configChat->kode_reseller = $request->kode_reseller;
        $configChat->pengirim = $request->pengirim;
        $configChat->tipe_pengirim = $type;
        $configChat->role = $role;
        if ($role == 'whatsapp') {
            $configChat->keybot = $request->keybot;
        }
        $configChat->save();
        $url = ($role == 'whatsapp') ? 'wa' : ($role == 'telegram' ? 'tele' : '/');
        return redirect($url);
    }

    public function deleteContak($id)
    {
        $configChat = configChat::find($id);
        $role = $configChat->role;
        $configChat->delete();
        $url = ($role == 'whatsapp') ? 'wa' : ($role == 'telegram' ? 'tele' : '/');
        return redirect($url);
    }

    public function clearChat($id)
    {
        $configChat = configChat::find($id);
        $role = $configChat->role;
        $pengirim = $configChat->pengirim;
        inbox::where('pengirim',$pengirim)->delete();
        $url = ($role == 'whatsapp') ? 'wa' : ($role == 'telegram' ? 'tele' : '/');
        return redirect($url);
    }

}
