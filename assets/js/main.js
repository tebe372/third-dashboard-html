(function () {
  initCharts1();
  initCharts2();
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

function initCharts1() {
  Highcharts.chart('pie-chart1', {
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

function initCharts2() {
  Highcharts.chart('pie-chart2', {
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