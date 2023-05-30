(function () {
  mixPieChart();
  TrendlineChart();
  initCharts3();
  initCharts4();
})();

function findTick(x, ticks, range) {
  for (var tickValue in ticks) {
    if (Math.abs(x - tickValue) <= range) {
      return ticks[tickValue];
    }
  }
}

function mixPieChart() {
  Highcharts.chart('mix-pie-chart', {
    credits: {
      enabled: false,
    },

    chart: {
      type: 'pie',
      style: {
        fontFamily: "Inter",
        fontWeight: 500,
      },
      height: '350px',
    },

    title: {
      text: '',
    },

    subtitle: {
      text: 'Conversions',
      align: 'center',
      verticalAlign: 'middle',
      y: 12,
      x: -130,
      style: {
        fontWeight: 600,
        fontSize: '12px',
        color: '#8AA9B6',
      }
    },

    legend: {
      useHTML: true,
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      itemStyle: {
        lineHeight: '25px',
        maxWidth: '300px',
        minWidth: '200px',
      },
      symbolHeight: 15,
      symbolWidth: 30,
      labelFormatter: function () {
        return '<div style="position: relative; top: -6px; font-size:14px; color: #929EA3;">' + this.name + '&nbsp;&nbsp;&nbsp;<span style="color: #1E1E1E;">' + this.y + '%</span></div>';
      }
    },

    tooltip: {
      crosshairs: true,
      borderRadius: 8,
      formatter: function () {
        return '<span style="color:' + this.color + '"> ● </span>' + ' ' + Intl.NumberFormat().format(this.y) + '%';
      },
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },

    series: [{
      borderWidth: 0,
      borderRadius: 0,
      innerSize: 200,
      size: 260,
      showInLegend: true,
      states: {
        hover: {
          brightness: 0,
          halo: {
            opacity: 1,
          }
        },
        inactive: {
          enabled: false,
        }
      },
      data: [
        {
          name: 'Segment',
          y: 80.1,
          color: '#5FA8D3',
        },
        {
          name: 'Product Owned',
          y: 1,
          color: '#BEE9E8',
        },
        {
          name: 'K-Cluster',
          y: 15,
          color: '#247BA0',
        },
        {
          name: 'FTV',
          y: 14,
          color: '#1B98E0',
        },
        {
          name: 'Default',
          y: 2,
          color: '#57CC99',
        },
        {
          name: 'Behavioral',
          y: 1,
          color: '#B8BEDD',
        },
      ]
    }, {
      borderWidth: 0,
      borderRadius: 0,
      startAngle: 10,
      innerSize: 120,
      size: 180,
      showInLegend: false,
      states: {
        hover: {
          brightness: 0,
          halo: {
            opacity: 1,
            size: 5,
          }
        },
        inactive: {
          enabled: false,
        }
      },
      data: [
        {
          name: 'Segment',
          y: 80.1,
          color: '#5FA8D3',
        },
        {
          name: 'Product Owned',
          y: 1,
          color: '#BEE9E8',
        },
        {
          name: 'K-Cluster',
          y: 15,
          color: '#247BA0',
        },
        {
          name: 'FTV',
          y: 14,
          color: '#1B98E0',
        },
        {
          name: 'Default',
          y: 2,
          color: '#57CC99',
        },
        {
          name: 'Behavioral',
          y: 1,
          color: '#B8BEDD',
        },
      ]
    }]
  });
}

function TrendlineChart() {
  Highcharts.chart('trend-line-chart', {
    credits: {
      enabled: false,
    },

    chart: {
      type: 'spline',
      spacing: [30, 20, 20, 20],
      height: '350px',
    },

    title: {
      text: ''
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify",
        formatter: function () {
          return Highcharts.dateFormat("%b %e", this.value);
        },
        style: {
          color: "#898989",
          fontSize: "12px",
        },
      },
      tickWidth: 0,
      lineWidth: 0,
      tickInterval: 1000 * 3600 * 24 * 7,
    },

    yAxis: {
      title: {
        text: "",
      },
      lineWidth: 1,
      lineColor: '#EAEAEA',
      tickInterval: 1,
      max: 5,
      min: 0,
      labels: {
        formatter: function () {
          return this.value + '%';
        },
        style: {
          fontSize: "10px",
        }
      }
    },

    plotOptions: {
      spline: {
        pointInterval: 1000 * 3600 * 24 * 7,
        pointStart: Date.UTC(2023, 2, 13, 0, 0, 0),
      },
    },

    tooltip: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },

    series: [{
      marker: {
        enabled: false,
      },
      color: '#5FA8D3',
      data: [0, 0.2, 0.3, 0.2, 0.02, 0.3, 0.02, '', '']
    }, {
      marker: {
        enabled: false,
      },
      color: '#57CC99',
      data: [0.6, 1, 1.2, 0.6, 1.1, 0.5, 0]
    }, {
      marker: {
        enabled: false,
      },
      color: '#1B98E0',
      data: [5, 0.1, 3.1, 0.2, 0.6, 0.1, 0.7]
    }]
  });
}

function initCharts3() {
  Highcharts.chart('pie-chart3', {
    credits: {
      enabled: false,
    },

    chart: {
      type: 'pie',
    },

    title: {
      text: '',
    },

    subtitle: {
      text: 'Conversions',
      align: 'center',
      verticalAlign: 'middle',
      y: 12,
      x: -70,
      style: {
        fontWeight: 600,
        fontSize: '12px',
        color: '#8AA9B6',
      }
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },

    series: [{
      borderWidth: 0,
      borderRadius: 0,
      innerSize: 160,
      size: 220,
      states: {
        hover: {
          brightness: 0,
          halo: {
            opacity: 1,
          }
        }
      },
      data: [
        {
          name: 'Segment',
          y: 80.1,
          color: '#5FA8D3',
        },
        {
          name: 'Product Owned',
          y: 1,
          color: '#BEE9E8',
        },
        {
          name: 'K-Cluster',
          y: 15,
          color: '#247BA0',
        },
        {
          name: 'FTV',
          y: 14,
          color: '#1B98E0',
        },
        {
          name: 'Default',
          y: 2,
          color: '#57CC99',
        },
        {
          name: 'Behavioral',
          y: 1,
          color: '#B8BEDD',
        },
      ]
    }, {
      borderWidth: 0,
      borderRadius: 0,
      startAngle: 10,
      innerSize: 90,
      size: 150,
      states: {
        hover: {
          brightness: 0,
          halo: {
            opacity: 1,
            size: 5,
          }
        }
      },
      data: [
        {
          name: 'Segment',
          y: 80.1,
          color: '#5FA8D3',
        },
        {
          name: 'Product Owned',
          y: 1,
          color: '#BEE9E8',
        },
        {
          name: 'K-Cluster',
          y: 15,
          color: '#247BA0',
        },
        {
          name: 'FTV',
          y: 14,
          color: '#1B98E0',
        },
        {
          name: 'Default',
          y: 2,
          color: '#57CC99',
        },
        {
          name: 'Behavioral',
          y: 1,
          color: '#B8BEDD',
        },
      ]
    }]
  });
}

function initCharts4() {
  Highcharts.chart('pie-chart4', {
    credits: {
      enabled: false,
    },

    chart: {
      type: 'pie',
    },

    title: {
      text: '',
    },

    subtitle: {
      text: 'Conversions',
      align: 'center',
      verticalAlign: 'middle',
      y: 12,
      x: -70,
      style: {
        fontWeight: 600,
        fontSize: '12px',
        color: '#8AA9B6',
      }
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },

    series: [{
      borderWidth: 0,
      borderRadius: 0,
      innerSize: 160,
      size: 220,
      states: {
        hover: {
          brightness: 0,
          halo: {
            opacity: 1,
          }
        }
      },
      data: [
        {
          name: 'Segment',
          y: 80.1,
          color: '#5FA8D3',
        },
        {
          name: 'Product Owned',
          y: 1,
          color: '#BEE9E8',
        },
        {
          name: 'K-Cluster',
          y: 15,
          color: '#247BA0',
        },
        {
          name: 'FTV',
          y: 14,
          color: '#1B98E0',
        },
        {
          name: 'Default',
          y: 2,
          color: '#57CC99',
        },
        {
          name: 'Behavioral',
          y: 1,
          color: '#B8BEDD',
        },
      ]
    }, {
      borderWidth: 0,
      borderRadius: 0,
      startAngle: 10,
      innerSize: 90,
      size: 150,
      states: {
        hover: {
          brightness: 0,
          halo: {
            opacity: 1,
            size: 5,
          }
        }
      },
      data: [
        {
          name: 'Segment',
          y: 80.1,
          color: '#5FA8D3',
        },
        {
          name: 'Product Owned',
          y: 1,
          color: '#BEE9E8',
        },
        {
          name: 'K-Cluster',
          y: 15,
          color: '#247BA0',
        },
        {
          name: 'FTV',
          y: 14,
          color: '#1B98E0',
        },
        {
          name: 'Default',
          y: 2,
          color: '#57CC99',
        },
        {
          name: 'Behavioral',
          y: 1,
          color: '#B8BEDD',
        },
      ]
    }]
  });
}