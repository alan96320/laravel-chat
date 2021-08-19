/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./resources/js/page/modules-ion-icons.js ***!
  \************************************************/


$("#icons li").each(function () {
  $(this).append('<div class="icon-name">' + $(this).attr('class') + '</div>');
});
$("#icons li").click(function () {
  $(".icon-name").fadeOut();
  $(this).find('.icon-name').fadeIn();
});
/******/ })()
;