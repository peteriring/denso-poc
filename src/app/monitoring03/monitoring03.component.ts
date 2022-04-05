import { Component, OnInit } from '@angular/core';
import {
  ApexXAxis,
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexPlotOptions,
  ApexLegend,
  ApexAnnotations,
  ApexYAxis,
  ApexTooltip,
} from 'ng-apexcharts';

type ChartOptionsCommon = {
  xaxis: ApexXAxis;
};

type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  annotations: ApexAnnotations;
  colors: any[];
  xaxis: ApexXAxis;
};

type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  annotations: ApexAnnotations;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  colors: any[];
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'monitoring03-chart',
  templateUrl: './monitoring03.component.html',
  styleUrls: ['./monitoring03.component.scss'],
})
export class Monitoring03Component implements OnInit {
  public chartOptionsCommon: ChartOptionsCommon;
  public chartOptions1: ChartOptions1;
  public chartOptions2: ChartOptions2;
  public component1: any;

  constructor() {
    this.chartOptionsCommon = {
      xaxis: {
        categories: [
          '6-7 hour',
          '7-8 hour',
          '8-9 hour',
          '9-10 hour',
          '10-11 hour',
          '11-12 hour',
        ],
      },
    };
    this.chartOptions1 = {
      annotations: {
        xaxis: [
          {
            x: 190,
            x2: 250,
            fillColor: '#B9D7EB',
            opacity: 0.4,
            label: {
              borderColor: '#B9D7EB',
              style: {
                fontSize: '11px',
                color: '#000',
                background: '#B9D7EB',
              },
              offsetY: -10,
              text: 'BREAK (20 mins)',
            },
          },
          {
            x: 360,
            x2: 420,
            fillColor: '#Ec85cB',
            opacity: 0.4,
            label: {
              borderColor: '#Ec85cB',
              style: {
                fontSize: '11px',
                color: '#000',
                background: '#Ec85cB',
              },
              offsetY: -10,
              text: 'Planned down time',
            },
          },
          {
            x: 490,
            x2: 550,
            fillColor: '#B9D7EB',
            opacity: 0.4,
            label: {
              borderColor: '#B9D7EB',
              style: {
                fontSize: '11px',
                color: '#000',
                background: '#B9D7EB',
              },
              offsetY: -10,
              text: 'BREAK (20 mins)',
            },
          },
        ],
      },
      xaxis: {
        ...this.chartOptionsCommon.xaxis,
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      series: [
        {
          name: 'OR',
          type: 'line',
          data: [95, 62, 71, 56, 90, null, null],
        },
        {
          name: 'rr2',
          type: 'scatter',
          data: [
            [84, 1],
            [84, 1],
            [84, 1],
            [80, 1],
            [80, 1],
          ],
        },
      ],
      chart: {
        group: 'sync',
        id: 'sync1',
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {},
      title: {
        text: 'OR-QTY',
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          colors: [
            (val: any) => {
              if (val.series[val.seriesIndex][val.dataPointIndex] < 80) {
                return '#ff7800';
              } else {
                return '#00873E';
              }
            },
          ],
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          borderRadius: 2,
          opacity: 1,
          borderWidth: 1,
          borderColor: '#000',
        },
        formatter: function (val, opt) {
          opt.w.config.dataLabels.style.colors =
            val < 85 ? '#FECD1A' : '#00873E';
          return val ? `${val}%` : '';
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
        },
      },
      legend: {
        show: false,
      },
      colors: ['#828282'],
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'Box',
          type: 'boxPlot',
          data: [
            {
              x: '6-7 hours',
              y: [81, 81, 95, 95, 95],
              goals: [
                {
                  name: 'Target',
                  value: 88,
                  strokeWidth: 500,
                  strokeColor: '#34B78F',
                },
              ],
            },
            {
              x: '7-8 hours',
              y: [81, 81, 95, 95, 95],
              goals: [
                {
                  name: 'Target',
                  value: 88,
                  strokeWidth: 220,
                  strokeColor: '#34B78F',
                },
              ],
            },
            {
              x: '8-9 hours',
              y: [55, 55, 65, 65, 65],
              goals: [
                {
                  name: 'Target',
                  value: 56,
                  strokeWidth: 220,
                  strokeColor: '#34B78F',
                },
              ],
            },
            {
              x: '9-10 hours',
              y: [81, 81, 95, 95, 95],
              goals: [
                {
                  name: 'Target',
                  value: 88,
                  strokeWidth: 220,
                  strokeColor: '#34B78F',
                },
              ],
            },
            {
              x: '10-11 hours',
              y: [81, 81, 95, 95, 95],
              goals: [
                {
                  name: 'Target',
                  value: 88,
                  strokeWidth: 220,
                  strokeColor: '#34B78F',
                },
              ],
            },
          ],
        },
        {
          name: 'Bar',
          type: 'bar',
          data: [
            {
              x: '6-7 hours',
              y: 84,
            },
            {
              x: '7-8 hours',
              y: 55,
            },
            {
              x: '8-9 hours',
              y: 40,
            },
            {
              x: '9-10 hours',
              y: 50,
            },
            {
              x: '9-10 hours',
              y: 0,
            },
          ],
        },
        {
          name: 'Bar2',
          type: 'bar',
          data: [
            {
              x: '6-7 hours',
              y: 0,
            },
            {
              x: '7-8 hours',
              y: 0,
            },
            {
              x: '8-9 hours',
              y: 0,
            },
            {
              x: '9-10 hours',
              y: 0,
            },
            {
              x: '10-11 hours',
              y: 27,
            },
          ],
        },
        {
          name: 'Bar3',
          type: 'bar',
          data: [
            {
              x: '6-7 hours',
              y: 0,
            },
            {
              x: '7-8 hours',
              y: 0,
            },
            {
              x: '8-9 hours',
              y: 0,
            },
            {
              x: '9-10 hours',
              y: 0,
            },
            {
              x: '10-11 hours',
              y: 3,
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        group: 'sync',
        id: 'sync2',
        stacked: true,
      },
      yaxis: {
        min: 0,
        max: 100,
      },
      stroke: {
        width: [0, 0],
      },
      plotOptions: {
        bar: {
          horizontal: false,
          rangeBarOverlap: false,
          dataLabels: {
            position: 'center',
          },
        },
        boxPlot: {
          colors: {
            upper: '#82828290',
            lower: '#82828290',
          },
        },
      },
      title: {
        text: 'OR-QTY',
      },
      tooltip: {
        y: {
          formatter: (val1, val2) => {
            const data =
              val2.w.config.series[val2.seriesIndex].data[val2.dataPointIndex]
                .y;
            return val2.seriesIndex === 0 && data[4] === val1
              ? `${data[0]}-${data[2]}`
              : val1.toString();
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          colors: ['#fff'],
        },
        background: {
          enabled: true,
          foreColor: '#000',
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#000',
        },
        formatter: function (val: any, opt: any) {
          const data =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].y;
          return typeof data === 'number' ? val : `${data[1]} - ${data[2]}`;
        },
      },
      annotations: {
        xaxis: [
          {
            x: 190,
            x2: 250,
            fillColor: '#B9D7EB',
            opacity: 0.4,
            label: {
              borderColor: '#B9D7EB',
              style: {
                fontSize: '11px',
                color: '#000',
                background: '#B9D7EB',
              },
              offsetY: -10,
              text: 'BREAK (20 mins)',
            },
          },
          {
            x: 360,
            x2: 420,
            fillColor: '#Ec85cB',
            opacity: 0.4,
            label: {
              borderColor: '#Ec85cB',
              style: {
                fontSize: '11px',
                color: '#000',
                background: '#Ec85cB',
              },
              offsetY: -10,
              text: 'Planned down time',
            },
          },
          {
            x: 490,
            x2: 550,
            fillColor: '#B9D7EB',
            opacity: 0.4,
            label: {
              borderColor: '#B9D7EB',
              style: {
                fontSize: '11px',
                color: '#000',
                background: '#B9D7EB',
              },
              offsetY: -10,
              text: 'BREAK (20 mins)',
            },
          },
        ],
      },
      colors: [
        '#828282',
        function ({ value }: { value: number }) {
          if (value < 60) {
            return '#FECD1A';
          } else {
            return '#00873E';
          }
        },
        '#828282',
        '#DC0032',
      ],
    };
  }

  ngOnInit(): void {}
}
