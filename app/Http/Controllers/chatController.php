<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\inbox;
use App\Models\outbox;

class chatController extends Controller
{
    public function jabbim()
    {
        $data = inbox::with('outbox')->where('type', 'jabim')->get();
        return view('chat',[
            'data' => $data,
            'type' => 'jabim'
        ]);
    }

    public function wa()
    {
        $data = inbox::with('outbox')->where('type', 'whatsapp')->get();
        return view('chat',[
            'data' => $data,
            'type' => 'whatsapp'
        ]);
    }

    public function tele()
    {
        $data = inbox::with('outbox')->where('type', 'telegram')->get();
        return view('chat',[
            'data' => $data,
            'type' => 'telegram'
        ]);
    }

    public function save(Request $request)
    {
        $status = $request->status;
        $text = $request->text;
        $inbox = new inbox;
        $inbox->pesan = $text;
        $inbox->type = $status;
        $inbox->save();
        return response()->json($inbox);
    }

    public function getmessage(Request $request)
    {
        $end = false;
        $id = $request->id;
        return response()->stream(function () use ($end,$id) {
            while (true) {
                if (connection_aborted() || $end) {
                    break;
                }
                $outbox = outbox::where('kode_inbox',$id)->first();
                $end = $outbox ? true : false ;

                $data = collect([
                    'status' => $end,
                    'data' => $outbox
                ])->toJson();
                echo "event: ".$id."\n", "data: $data", "\n\n";

                ob_flush();
                flush();
                sleep(5);
            }
        }, 200, [
            'Cache-Control' => 'no-cache',
            'Content-Type' => 'text/event-stream',
        ]);
    }
}
