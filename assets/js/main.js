(function () {
  const data = [
    {
      name: "Product Owned",
      session: 346912,
      conversion: 381,
      color: "#BEE9E8"
    },
    {
      name: "Behavioral",
      session: 19054,
      conversion: 153,
      color: "#B8BEDD"
    },
    {
      name: "Default",
      session: 60450,
      conversion: 100,
      color: "#57CC99"
    },
    {
      name: "FTV",
      session: 1797,
      conversion: 9,
      color: "#1B98E0"
    },
    {
      name: "K-Cluster",
      session: 565,
      conversion: 9,
      color: "#247BA0"
    },
    {
      name: "Segment",
      session: 4530,
      conversion: 9,
      color: "#5FA8D3"
    }
  ];

  mixPieChart('mix-pie-chart', data);
  TrendlineChart();
  ComparisonTable(
    'comparison-table',
    ['ALGORITHM TYPE', 'SESSIONS', 'APPLICATION CONVERSION', 'CONVERSION RATE'],
    data
  );
  MatrixBubbleChart('matrix-bubble-chart', data);
})();

function findTick(x, ticks, range) {
  for (var tickValue in ticks) {
    if (Math.abs(x - tickValue) <= range) {
      return ticks[tickValue];
    }
  }
}

function number_format(number, decimals, dec_point, thousands_sep) {
  decimals = typeof decimals !== 'undefined' ? decimals : 0;
  dec_point = typeof dec_point !== 'undefined' ? dec_point : '.';
  thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';
  if (isNaN(number)) {
    number = 0;
  }
  var parts = Number(number).toFixed(decimals).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);
  if (parts.join(dec_point) == '-0')
    return 0;
  else
    return parts.join(dec_point);
}

function mixPieChart(id, data) {
  let seriesData = [];

  const totalSessions = data.reduce((pv, cv) => pv + cv.session, 0);
  data.forEach(item => {
    seriesData.push({
      name: item.name,
      color: item.color,
      y: parseFloat(number_format(item.session / totalSessions * 100, 1))
    })
  });

  Highcharts.chart(id, {
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
      data: seriesData
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
      data: seriesData
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
      style: {
        fontFamily: "Inter",
        fontWeight: 500,
      },
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

function ComparisonTable(tableId, header, data) {
  let table = document.getElementById(tableId);
  let html = `
    <div class="table-responsive m-2">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="align-top">` + header[0] + `</th>
            <th scope="col" colspan="2" class="align-top">` + header[1] + `</th>
            <th scope="col" colspan="2" class="align-top">` + header[2] + `</th>
            <th scope="col" class="align-top">` + header[3] + `</th>
          </tr>
        </thead>
        <tbody>`;

  let maxSession = data.reduce((pv, cv) => (cv.session > pv) ? cv.session : pv , -Infinity);
  let minSession = data.reduce((pv, cv) => (cv.session < pv) ? cv.session : pv , Infinity);
  let maxConversion = data.reduce((pv, cv) => (cv.conversion > pv) ? cv.conversion : pv , -Infinity);
  let minConversion = data.reduce((pv, cv) => (cv.conversion < pv) ? cv.conversion : pv , Infinity);
  let maxRate = data.reduce((pv, cv) => ((cv.conversion / cv.session) * 100 > pv) ? ((cv.conversion / cv.session) * 100) : pv , -Infinity);
  let minRate = data.reduce((pv, cv) => ((cv.conversion / cv.session) * 100 < pv) ? ((cv.conversion / cv.session) * 100) : pv , Infinity);
  let totalSessions = 0;
  let totalConversions = 0;


  data.forEach(row => {
    totalSessions += row.session;
    totalConversions += row.conversion;

    html += `
          <tr>
            <th scope="row" class="first-td">` + row.name + `</th>
            <td class="text-end">` + number_format(row.session) + `</td>`;

    const barWidth = 2 + (48 / parseFloat(maxSession - minSession)) * parseFloat(row.session - minSession);
    html += `<td class="text-start"><span class="bar" style="padding: 0px ` + parseInt(barWidth) + `px;"></span></td>
            <td class="text-end">` + number_format(row.conversion) + `</td>`;

    const conversionWidth = 2 + (48 / parseFloat(maxConversion - minConversion)) * (row.conversion - minConversion);
    html += `<td class="text-start"><span class="bar" style="padding: 0px ` + parseInt(conversionWidth) + `px;"></span></td>`;

    const transparency = 0.2 + (0.5 / (maxRate - minRate)) * ((row.conversion / row.session * 100) - minRate);
    html += `<td class="text-center percentage align-middle" style="background-color: rgba(36,123,160,` + transparency + `);">` + number_format(row.conversion / row.session * 100, 2) + `%</td>
          </tr>`;
  });

  html += `
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Grand Total</th>
            <td class="text-end">` + number_format(totalSessions) + `</td>
            <td></td>
            <td class="text-end">` + number_format(totalConversions) + `</td>
            <td></td>
            <td class="text-center percentage">` + number_format(totalConversions / totalSessions * 100, 2) + `%</td>
          </tr>
        </tfoot>
      </table>
    </div>`;

  table.innerHTML = html;
}

function MatrixBubbleChart(id, data) {
  let seriesData = [];
  let totalSessions = 0;
  let totalRate = 0;
  data.forEach(item => {
    totalSessions += item.session;
    const rate = item.conversion / item.session * 100;
    totalRate += rate;
    seriesData.push({
      x: item.session,
      y: rate,
      z: 5,
      name: item.name,
      color: item.color
    });
  });

  Highcharts.chart(id, {
    credits: {
      enabled: false,
    },

    chart: {
      type: 'bubble',
      style: {
        fontFamily: "Inter",
        fontWeight: 500,
        height: '350px',
      },
    },

    legend: {
      enabled: false
    },

    title: {
      text: ''
    },

    xAxis: {
      lineColor: '#EAEAEA',
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          if (this.value)
            return parseInt(this.value/1000) + 'k';
          else
            return 0;
        },
        style: {
          color: "#898989",
          fontSize: "12px",
        },
      },
      tickWidth: 0,
      plotLines: [{
        color: '#EAEAEA',
        dashStyle: 'Dot',
        width: 2,
        value: totalSessions / data.length,
        zIndex: 1,
        label: {
          useHTML: true,
          rotation: 0,
          style: {
            fontSize: '10px',
            fontWeight: 400,
            color: '#898989',
            padding: '6px 9px',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '8px'
          },
          text: 'Avg Lines',
        },
        zIndex: 3
      }],
      tickInterval: 50000,
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      gridLineWidth: 0,
      lineWidth: 1,
      lineColor: '#EAEAEA',
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value + '%';
        },
        style: {
          fontSize: "12px",
        },
      },
      maxPadding: 0.2,
      plotLines: [{
        color: '#EAEAEA',
        dashStyle: 'Dot',
        width: 2,
        value: totalRate / data.length,
        zIndex: 1,
        label: {
          useHTML: true,
          align: 'right',
          style: {
            fontSize: '10px',
            fontWeight: 400,
            color: '#898989',
            padding: '6px 9px',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '8px'
          },
          text: 'Avg Lines',
          x: -10,
          y: -14,
        },
        zIndex: 3
      }],
    },

    plotOptions: {
      bubble: {
        maxSize: '18%',
        minSize: 5,
        marker: {
          fillOpacity: 1,
        }
      }
    },

    tooltip: {
      borderRadius: 8,
      formatter: function () {
        return '<span style="color:' + this.color + '"> ● </span>' + ' ' + this.key;
      },
    },

    series: [{
      data: seriesData
    }]
  });
}