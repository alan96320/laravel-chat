@extends('layouts.master');
@section('title','Jabbim')

@section('style')
<style>
    @media (max-width: 1024px){
        .main-content {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
@endsection
@section('content')
<section class="section">
    <div class="section-body">
        <div class="row align-items-center justify-content-center">
            <div class="col-12 col-lg-4 col-md-6">
                <div class="card chat-box card-success" id="mychatbox2">
                    <div class="card-header py-2" style="min-height: 0">
                        <h4>
                            <i class="fas fa-circle text-success mr-2" title="Online" data-toggle="tooltip"></i>
                            Chat with Telegram
                        </h4>
                    </div>
                    <div class="card-body chat-content">
                        @foreach ($data as $item)
                        <div class="chat-item chat-right" style="">
                            <img src="/img/avatar/avatar-1.png">
                            <div class="chat-details">
                                <div class="chat-text">{{$item->pesan}}</div>
                                <div class="chat-time">{{date('H:i:s', strtotime($item->created_at))}}</div>
                            </div>
                        </div>
                        @if ($item->outbox)
                        <div class="chat-item chat-left" style="">
                            <img src="/img/avatar/avatar-2.png">
                            <div class="chat-details">
                                <div class="chat-text">{{$item->outbox->pesan}}</div>
                                <div class="chat-time">{{date('H:i:s', strtotime($item->outbox->created_at))}}</div>
                            </div>
                        </div>
                        @endif
                        @endforeach
                    </div>
                    <div class="card-footer chat-form py-1 pl-0">
                        <form id="chat-form" style="margin-block-end: 0" data-status="tele">
                            <input type="text" class="form-control" placeholder="Type a message">
                            <button class="btn btn-primary">
                                <i class="far fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
@section('script')
<script src="{{mix('js/page/chat.js')}}"></script>
@endsection
