/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/js/page/modules-chartjs.js ***!
  \**********************************************/


var _ref, _ref2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [(_ref = {
      label: 'Statistics',
      data: [460, 458, 330, 502, 430, 610, 488],
      borderWidth: 2,
      backgroundColor: '#6777ef',
      borderColor: '#6777ef'
    }, _defineProperty(_ref, "borderWidth", 2.5), _defineProperty(_ref, "pointBackgroundColor", '#ffffff'), _defineProperty(_ref, "pointRadius", 4), _ref)]
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
        ticks: {
          display: false
        },
        gridLines: {
          display: false
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
    datasets: [(_ref2 = {
      label: 'Statistics',
      data: [460, 458, 330, 502, 430, 610, 488],
      borderWidth: 2,
      backgroundColor: '#6777ef',
      borderColor: '#6777ef'
    }, _defineProperty(_ref2, "borderWidth", 2.5), _defineProperty(_ref2, "pointBackgroundColor", '#ffffff'), _defineProperty(_ref2, "pointRadius", 4), _ref2)]
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
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    }
  }
});
var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [80, 50, 40, 30, 20],
      backgroundColor: ['#191d21', '#63ed7a', '#ffa426', '#fc544b', '#6777ef'],
      label: 'Dataset 1'
    }],
    labels: ['Black', 'Green', 'Yellow', 'Red', 'Blue']
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  }
});
var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [80, 50, 40, 30, 100],
      backgroundColor: ['#191d21', '#63ed7a', '#ffa426', '#fc544b', '#6777ef'],
      label: 'Dataset 1'
    }],
    labels: ['Black', 'Green', 'Yellow', 'Red', 'Blue']
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  }
});
/******/ })()
;