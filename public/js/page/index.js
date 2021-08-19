/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/page/index.js ***!
  \************************************/


var _ref, _ref2, _ref3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [(_ref = {
      label: 'Sales',
      data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)'
    }, _defineProperty(_ref, "borderWidth", 0), _defineProperty(_ref, "borderColor", 'transparent'), _defineProperty(_ref, "pointBorderWidth", 0), _defineProperty(_ref, "pointRadius", 3.5), _defineProperty(_ref, "pointBackgroundColor", 'transparent'), _defineProperty(_ref, "pointHoverBackgroundColor", 'rgba(63,82,227,.8)'), _ref), (_ref2 = {
      label: 'Budget',
      data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
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
          // display: false,
          drawBorder: false,
          color: '#f2f2f2'
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1500,
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
var balance_chart = document.getElementById("balance-chart").getContext('2d');
var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');
var myChart = new Chart(balance_chart, {
  type: 'line',
  data: {
    labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
    datasets: [{
      label: 'Balance',
      data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(63,82,227,1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,1)'
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false
        },
        ticks: {
          display: false
        }
      }]
    }
  }
});
var sales_chart = document.getElementById("sales-chart").getContext('2d');
var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');
var myChart = new Chart(sales_chart, {
  type: 'line',
  data: {
    labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
    datasets: [(_ref3 = {
      label: 'Sales',
      data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color
    }, _defineProperty(_ref3, "borderWidth", 3), _defineProperty(_ref3, "borderColor", 'rgba(63,82,227,1)'), _defineProperty(_ref3, "pointBorderWidth", 0), _defineProperty(_ref3, "pointBorderColor", 'transparent'), _defineProperty(_ref3, "pointRadius", 3), _defineProperty(_ref3, "pointBackgroundColor", 'transparent'), _defineProperty(_ref3, "pointHoverBackgroundColor", 'rgba(63,82,227,1)'), _ref3)]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false
        },
        ticks: {
          display: false
        }
      }]
    }
  }
});
$("#products-carousel").owlCarousel({
  items: 3,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});
/******/ })()
;