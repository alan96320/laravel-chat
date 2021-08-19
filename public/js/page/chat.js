/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/page/chat.js ***!
  \***********************************/


$(".main-content").css({
  paddingTop: '3.5rem'
});
$("#chat-form").submit(function () {
  var me = $(this),
      status = me.data('status'),
      text = me.find('input').val();

  if (text.trim().length > 0) {
    $.chatCtrl('#mychatbox2', {
      position: 'chat-right',
      text: text,
      picture: '/img/avatar/avatar-1.png'
    });
    savechat({
      status: status,
      text: text
    });
    me.find('input').val('');
  }

  return false;
});
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

function savechat(data) {
  $.ajax({
    type: "POST",
    url: "/chat",
    data: data,
    dataType: "json",
    success: function success(res) {
      // console.log(res.kode);
      stream(res.kode);
    }
  });
}

function resizechatbox() {
  setTimeout(function () {
    var nav = document.querySelector('.main-navbar');
    var foo = document.querySelector('.main-footer');
    var bd = document.querySelector('body');
    var h = bd.offsetHeight - (nav.offsetHeight + foo.offsetHeight);
    $('.chat-box').height(h);
    $(".chat-content").getNiceScroll().resize();
    $('.chat-content').getNiceScroll(0).doScrollTop($('.chat-content').height());
  }, 500);
}

resizechatbox();
window.onresize = resizechatbox;

function stream(id) {
  var stream = new EventSource('/chat?id=' + id, {
    withCredentials: true
  });
  stream.addEventListener(id, function (event) {
    var data = JSON.parse(event.data);

    if (data.status) {
      stream.close();
      $.chatCtrl('#mychatbox2', {
        position: 'chat-left',
        text: data.data.pesan,
        picture: '/img/avatar/avatar-2.png'
      });
      console.log("EventStream is closed");
    }
  });
}
/******/ })()
;