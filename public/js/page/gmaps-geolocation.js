/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./resources/js/page/gmaps-geolocation.js ***!
  \************************************************/
 // initialize map

var map = new GMaps({
  div: '#map',
  lat: -6.5637928,
  lng: 106.7535061
}); // initialize map geolocation

GMaps.geolocate({
  // when geolocation is allowed by user
  success: function success(position) {
    // set center map according to user position
    map.setCenter(position.coords.latitude, position.coords.longitude); // add a marker to the map

    map.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      title: 'You'
    });
  },
  // when geolocation is blocked by the user
  error: function error(_error) {
    toastr.error('Geolocation failed: ' + _error.message);
  },
  // when the user's browser does not support
  not_supported: function not_supported() {
    toastr.error("Your browser does not support geolocation");
  }
});
/******/ })()
;