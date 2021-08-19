/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./resources/js/page/components-statistic.js ***!
  \***************************************************/


var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sparkline_values = [10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 6, 5, 9];
var sparkline_values_chart = [2, 6, 4, 8, 3, 5, 2, 7];
var sparkline_values_bar = [10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 8, 6, 5, 2, 4, 7, 4, 9, 10, 2, 4, 7, 4, 9, 7, 4, 8, 5, 8, 6, 5];
$('.sparkline-inline').sparkline(sparkline_values, {
  type: 'line',
  width: '100%',
  height: '32',
  lineWidth: 3,
  lineColor: 'rgba(87,75,144,.1)',
  fillColor: 'rgba(87,75,144,.25)',
  highlightSpotColor: 'rgba(87,75,144,.1)',
  highlightLineColor: 'rgba(87,75,144,.1)',
  spotRadius: 3
});
$('.sparkline-line').sparkline(sparkline_values, {
  type: 'line',
  width: '100%',
  height: '32',
  lineWidth: 3,
  lineColor: 'rgba(63, 82, 227, .5)',
  fillColor: 'transparent',
  highlightSpotColor: 'rgba(63, 82, 227, .5)',
  highlightLineColor: 'rgba(63, 82, 227, .5)',
  spotRadius: 3
});
$('.sparkline-line-chart').sparkline(sparkline_values_chart, {
  type: 'line',
  width: '100%',
  height: '32',
  lineWidth: 2,
  lineColor: 'rgba(63, 82, 227, .5)',
  fillColor: 'transparent',
  highlightSpotColor: 'rgba(63, 82, 227, .5)',
  highlightLineColor: 'rgba(63, 82, 227, .5)',
  spotRadius: 2
});
$(".sparkline-bar").sparkline(sparkline_values_bar, {
  type: 'bar',
  height: '32',
  disableTooltips: true,
  barColor: 'rgb(87,75,144)'
});
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [(_ref = {
      label: 'Statistics',
      data: [460, 458, 330, 502, 430, 610, 488],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)'
    }, _defineProperty(_ref, "borderWidth", 0), _defineProperty(_ref, "borderColor", 'transparent'), _defineProperty(_ref, "pointBorderWidth", 0), _defineProperty(_ref, "pointRadius", 3.5), _defineProperty(_ref, "pointBackgroundColor", 'transparent'), _defineProperty(_ref, "pointHoverBackgroundColor", 'rgba(63,82,227,.8)'), _ref), (_ref2 = {
      label: 'Statistics',
      data: [390, 600, 390, 280, 600, 430, 638],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)'
    }, _defineProperty(_ref2, "borderWidth", 0), _defineProperty(_ref2, "borderColor", 'transparent'), _defineProperty(_ref2, "pointBorderWidth", 0), _defineProperty(_ref2, "pointRadius", 3.5), _defineProperty(_ref2, "pointBackgroundColor", 'transparent'), _defineProperty(_ref2, "pointHoverBackgroundColor", 'rgba(254,86,83,.8)'), _ref2)]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2'
        },
        ticks: {
          beginAtZero: true,
          stepSize: 200,
          callback: function callback(value, index, values) {
            return '$' + value;
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          tickMarkLength: 15
        }
      }]
    }
  }
});
var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [(_ref3 = {
      label: 'Statistics',
      data: [460, 458, 330, 502, 430, 610, 488],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)',
      borderColor: 'rgba(254,86,83,.7)'
    }, _defineProperty(_ref3, "borderWidth", 2.5), _defineProperty(_ref3, "pointBackgroundColor", '#ffffff'), _defineProperty(_ref3, "pointRadius", 4), _ref3), (_ref4 = {
      label: 'Statistics',
      data: [550, 558, 390, 562, 490, 670, 538],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)',
      borderColor: 'transparent'
    }, _defineProperty(_ref4, "borderWidth", 0), _defineProperty(_ref4, "pointBackgroundColor", '#999'), _defineProperty(_ref4, "pointRadius", 4), _ref4)]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2'
        },
        ticks: {
          beginAtZero: true,
          stepSize: 150
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
});
var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [(_ref5 = {
      label: 'Google',
      data: [290, 358, 220, 402, 690, 510, 688],
      borderWidth: 2,
      backgroundColor: 'transparent',
      borderColor: 'rgba(254,86,83,.7)'
    }, _defineProperty(_ref5, "borderWidth", 2.5), _defineProperty(_ref5, "pointBackgroundColor", 'transparent'), _defineProperty(_ref5, "pointBorderColor", 'transparent'), _defineProperty(_ref5, "pointRadius", 4), _ref5), (_ref6 = {
      label: 'Facebook',
      data: [450, 258, 390, 162, 440, 570, 438],
      borderWidth: 2,
      backgroundColor: 'transparent',
      borderColor: 'rgba(63,82,227,.8)'
    }, _defineProperty(_ref6, "borderWidth", 0), _defineProperty(_ref6, "pointBackgroundColor", 'transparent'), _defineProperty(_ref6, "pointBorderColor", 'transparent'), _defineProperty(_ref6, "pointRadius", 4), _ref6)]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2'
        },
        ticks: {
          beginAtZero: true,
          stepSize: 200
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
});
$('#visitorMap').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: .8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: .8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
  pins: {
    id: '<div class="jqvmap-circle"></div>',
    my: '<div class="jqvmap-circle"></div>',
    th: '<div class="jqvmap-circle"></div>',
    sy: '<div class="jqvmap-circle"></div>',
    eg: '<div class="jqvmap-circle"></div>',
    ae: '<div class="jqvmap-circle"></div>',
    nz: '<div class="jqvmap-circle"></div>',
    tl: '<div class="jqvmap-circle"></div>',
    ng: '<div class="jqvmap-circle"></div>',
    si: '<div class="jqvmap-circle"></div>',
    pa: '<div class="jqvmap-circle"></div>',
    au: '<div class="jqvmap-circle"></div>',
    ca: '<div class="jqvmap-circle"></div>',
    tr: '<div class="jqvmap-circle"></div>'
  }
});
/******/ })()
;