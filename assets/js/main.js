(function () {
  mixPieChart();
  TrendlineChart();
  ComparisonTable(
    'comparison-table',
    ['ALGORITHM TYPE', 'SESSIONS', 'APPLICATION CONVERSION', 'CONVERSION RATE'],
    [
      ['Products Owned', 346912, 381, 0.11],
      ['Behavioral', 19054, 153, 0.8],
      ['Default', 60450, 100, 0.17],
      ['FTV', 1797, 9, 0.5],
      ['K-Cluster', 565, 9, 1.59],
      ['Segment', 4530, 9, 0.2]
    ],
    ['Grand Total', 433308, 661, 0.15]
  );
  MatrixBubbleChart();
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

function ComparisonTable(tableId, header, data, footer) {
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

  let maxSession = data[0][1];
  let minSession = data[0][1];
  let maxConversion = data[0][2];
  let minConversion = data[0][2];
  let maxRate = data[0][3];
  let minRate = data[0][3];

  data.forEach(item => {
    if (item[1] > maxSession)
      maxSession = item[1];
    if (item[1] < minSession)
      minSession = item[1];

    if (item[2] > maxConversion)
      maxConversion = item[2];
    if (item[2] < minConversion)
      minConversion = item[2];

    if (item[3] > maxRate)
      maxRate = item[3];
    if (item[3] < minRate)
      minRate = item[3];
  });


  data.forEach(row => {
    html += `
          <tr>
            <th scope="row" class="first-td">` + row[0] + `</th>
            <td class="text-end">` + number_format(row[1]) + `</td>`;

    const barWidth = 2 + (48 / parseFloat(maxSession - minSession)) * parseFloat(row[1] - minSession);
    html += `<td class="text-start"><span class="bar" style="padding: 0px ` + parseInt(barWidth) + `px;"></span></td>
            <td class="text-end">` + number_format(row[2]) + `</td>`;

    const conversionWidth = 2 + (48 / parseFloat(maxConversion - minConversion)) * (row[2] - minConversion);
    html += `<td class="text-start"><span class="bar" style="padding: 0px ` + parseInt(conversionWidth) + `px;"></span></td>`;

    const transparency = 0.2 + (0.5 / (maxRate - minRate)) * (row[3] - minRate);
    html += `<td class="text-center percentage align-middle" style="background-color: rgba(36,123,160,` + transparency + `);">` + row[3] + `%</td>
          </tr>`;
  });

  html += `
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">` + footer[0] + `</th>
            <td class="text-end">` + number_format(footer[1]) + `</td>
            <td></td>
            <td class="text-end">` + number_format(footer[2]) + `</td>
            <td></td>
            <td class="text-center percentage">` + footer[3] + `%</td>
          </tr>
        </tfoot>
      </table>
    </div>`;

  table.innerHTML = html;
}

function MatrixBubbleChart() {
  Highcharts.chart('matrix-bubble-chart', {
    credits: {
      enabled: false,
    },

    chart: {
      type: 'bubble',
      style: {
        fontFamily: "Inter",
        fontWeight: 500,
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
        value: 100000,
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
        value: 0.6,
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

    series: [{
      data: [
        { x: 346912, y: 0.11, z: 5, name: 'Product Owned', color: '#BEE9E8'},
        { x: 19054, y: 0.8, z: 5, name: 'Behavioral', color: '#5FA8D3'},
        { x: 60450, y: 0.17, z: 5, name: 'Default', color: '#57CC99'},
        { x: 1797, y: 0.5, z: 5, name: 'FTV', color: '#1B98E0'},
        { x: 565, y: 1.59, z: 5, name: 'K-Cluster', color: '#1B98E0'},
        { x: 4530, y: 0.2, z: 5, name: 'Segment', color: '#B8BEDD'}
      ],
    }]
  });
}