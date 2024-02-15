"use strict";

$(function () {
  var chart = document.getElementById("echart_graph_line");
  var barChart = echarts.init(chart);

  barChart.setOption({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: { color: "#9aa0ac" },
      data: ["income", "enpenses"],
    },
    toolbox: {
      show: !1,
    },
    calculable: !1,
    xAxis: [
      {
        type: "category",
        data: ["2000", "2001", "2002", "2003", "2004", "2005"],
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    series: [
      {
        name: "income",
        type: "bar",
        data: [22, 54, 37, 23, 25.6, 76],
        markPoint: {
          data: [
            {
              type: "max",
              name: "???",
            },
            {
              type: "min",
              name: "???",
            },
          ],
        },
        markLine: {
          data: [
            {
              type: "average",
              name: "???",
            },
          ],
        },
      },
      {
        name: "enpenses",
        type: "bar",
        data: [35, 45, 47, 10, 35, 70],
        markPoint: {
          data: [
            {
              name: "income",
              value: 182.2,
              xAxis: 7,
              yAxis: 183,
            },
            {
              name: "enpenses",
              value: 2.3,
              xAxis: 11,
              yAxis: 3,
            },
          ],
        },
        markLine: {
          data: [
            {
              type: "average",
              name: "???",
            },
          ],
        },
      },
    ],
    color: ["#636FC3", "#D3D3D3"],
  });

  /* area line chart */
  var chart = document.getElementById("echart_area_line");
  var lineChart = echarts.init(chart);

  lineChart.setOption({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: { color: "#9aa0ac" },
      data: ["Patient1", "Patient2", "Patient3"],
    },
    toolbox: {
      show: !1,
    },
    calculable: !1,
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    series: [
      {
        name: "Patient1",
        type: "line",
        smooth: !0,
        itemStyle: {
          normal: {
            areaStyle: {
              type: "default",
            },
          },
        },
        data: [10, 12, 21, 54, 260, 830, 710],
      },
      {
        name: "Patient2",
        type: "line",
        smooth: !0,
        itemStyle: {
          normal: {
            areaStyle: {
              type: "default",
            },
          },
        },
        data: [30, 182, 434, 791, 390, 30, 10],
      },
      {
        name: "Patient3",
        type: "line",
        smooth: !0,
        itemStyle: {
          normal: {
            areaStyle: {
              type: "default",
            },
          },
        },
        data: [10, 132, 351, 120, 80, 400, 20],
      },
    ],
    color: [
      "rgba(102,119,239,0.6)",
      "rgba(251,110,28,0.6)",
      "rgba(12,230,49,0.6)",
    ],
  });

  var chartdata = [
    {
      name: "sales",
      type: "bar",
      barMaxWidth: 10,
      data: [13, 14, 10, 16, 11, 13],
    },

    {
      name: "growth",
      type: "bar",
      barMaxWidth: 10,
      data: [10, 14, 10, 15, 9, 25],
    },
  ];
});
