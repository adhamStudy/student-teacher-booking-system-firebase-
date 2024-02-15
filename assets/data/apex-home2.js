$(function () {
  chart1();
  chart3();
  chart4();
  chart5();
});
function chart1() {
  var options = {
    chart: {
      height: 250,
      type: "line",
      zoom: {
        enabled: !1,
      },
      toolbar: {
        show: !1,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      width: 3,
      curve: "smooth",
      dashArray: [0, 8],
    },
    series: [
      {
        name: "2019",
        data: [15, 48, 36, 20, 40, 60, 35, 20, 16, 31, 22, 11],
      },
      {
        name: "2018",
        type: "area",
        data: [8, 22, 60, 35, 17, 24, 48, 37, 56, 22, 32, 38],
      },
    ],
    colors: ["#8793ea", "#4caf50"],
    //      colors: ["#3dc7be", "#ffa117"],
    fill: {
      opacity: [1, 0.15],
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#8e8da4",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#8e8da4",
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#revenue"), options);

  chart.render();
}

function chart3() {
  var options = {
    chart: {
      height: 250,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50px",
      },
    },
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
      },
    ],
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2019 GMT",
        "01/02/2019 GMT",
        "01/03/2019 GMT",
        "01/04/2019 GMT",
        "01/05/2019 GMT",
        "01/06/2019 GMT",
      ],
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    legend: {
      position: "top",
      offsetY: 40,
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);

  chart.render();
}

function chart4() {
  var options = {
    chart: {
      height: 250,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    series: [
      {
        name: "Option 1",
        data: [45, 52, 38, 24, 33, 26, 21, 20],
      },
      {
        name: "Option 2",
        data: [35, 41, 62, 42, 13, 18, 29, 37],
      },
      {
        name: "Option 3",
        data: [87, 57, 74, 99, 75, 38, 62, 47],
      },
    ],
    legend: {
      show: false,
    },
    markers: {
      size: 0,

      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);

  chart.render();
}
function chart5() {
  var options = {
    chart: {
      height: 250,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#999b9c", "#4CC2B0"], // line color
    fill: {
      colors: ["#999b9c", "#4CC2B0"], // fill color
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      colors: ["#999b9c", "#4CC2B0"], // marker color
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 22, 64, 80],
      },
      {
        name: "series2",
        data: [11, 32, 67, 32, 44, 52, 41],
      },
    ],
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart5"), options);

  chart.render();
}
