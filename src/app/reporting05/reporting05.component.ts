import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexAnnotations,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  annotations: ApexAnnotations;
};

@Component({
  selector: 'reporting05-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reporting05.component.html',
  styleUrls: ['./reporting05.component.scss'],
})
export class Reporting05Component implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  public chart2Options!: ChartOptions;
  public chart3Options!: ChartOptions;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'OEE',
          data: [
            56, 55, 61, 48, 57, 0, 0, 66, 45, 51, 68, 47, 0, 0, 56, 55, 61, 48,
            57, 0, 0, 66, 45, 51, 68, 47, 0, 0, 51, 68, 47,
          ],
        },
        {
          name: 'OR',
          data: [
            76, 85, 81, 78, 87, 0, 0, 76, 85, 81, 88, 87, 0, 0, 76, 85, 71, 78,
            87, 0, 0, 76, 85, 81, 78, 87, 0, 0, 61, 78, 67,
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      annotations: {
        yaxis: [
          {
            y: 70,
            borderColor: '#34B78F',
            strokeDashArray: 3,
            borderWidth: 2,
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: '',
              position: 'front',
            },
          },
        ],
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (value) {
          if (value == 0) {
            return '';
          } else {
            return value + '';
          }
        },
        /*   offsetY: -20, */
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: '700',
          colors: ['#fff'],
        },
        background: {
          enabled: true,
          foreColor: '#000000',
          borderColor: '#000000',
        },
      },

      xaxis: {
        categories: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
        position: 'top',
        labels: {
          offsetY: 0,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        crosshairs: {},
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        opacity: 1,
        colors: ['#2BC2E7', '#828282'],
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + '%';
          },
        },
      },
      title: {
        text: '---',
        offsetY: 320,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    };
    this.chart2Options = {
      series: [
        {
          name: 'OEE',
          data: [
            560, 550, 610, 480, 570, 0, 0, 660, 450, 510, 680, 470, 0, 0, 560,
            550, 610, 480, 570, 0, 0, 660, 450, 510, 680, 470, 0, 0, 510, 680,
            470,
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      annotations: {
        yaxis: [
          {
            y: 700,
            borderColor: '#34B78F',
            strokeDashArray: 3,
            borderWidth: 2,
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: '',
              position: 'front',
            },
          },
        ],
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (value) {
          if (value == 0) {
            return '';
          } else {
            return value + '';
          }
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: '700',
          colors: ['#fff'],
        },
        background: {
          enabled: true,
          foreColor: '#000000',
          borderColor: '#000000',
        },
      },

      xaxis: {
        categories: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
        labels: {
          show: false,

          offsetY: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {},
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      fill: {
        opacity: 1,
        colors: ['#828282'],
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + '';
          },
        },
      },
      title: {
        text: '',
        offsetY: 320,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    };
    this.chart3Options = {
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
      },
      fill: {
        opacity: 1,
        colors: ['#2BC2E7'],
      },
      title: {},
      annotations: {
        yaxis: [
          {
            y: 14,
            borderColor: '#34B78F',
            strokeDashArray: 3,
            borderWidth: 2,
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: '',
              position: 'front',
            },
          },
        ],
      },
      series: [
        {
          name: 'OEE',
          data: [
            { x: '1', y: [26, 27] },
            { x: '2', y: [20, 21] },
            { x: '3', y: [22, 23] },
            { x: '4', y: [18, 19] },
            { x: '5', y: [16, 17] },
            { x: '6', y: [0, 0] },
            { x: '7', y: [0, 0] },
            { x: '8', y: [11, 12] },
            { x: '9', y: [10, 11] },
            { x: '10', y: [6, 7] },
            { x: '11', y: [13, 14] },
            { x: '12', y: [16, 17] },
            { x: '13', y: [0, 0] },
            { x: '14', y: [0, 0] },
            { x: '15', y: [20, 21] },
            { x: '16', y: [18, 19] },
            { x: '17', y: [20, 21] },
            { x: '18', y: [6, 7] },
            { x: '19', y: [13, 14] },
            { x: '20', y: [0, 0] },
            { x: '21', y: [0, 0] },
            { x: '22', y: [26, 27] },
            { x: '23', y: [20, 21] },
            { x: '24', y: [16, 17] },
            { x: '25', y: [13, 14] },
            { x: '26', y: [22, 23] },
            { x: '27', y: [0, 0] },
            { x: '28', y: [0, 0] },
            { x: '29', y: [22, 23] },
            { x: '30', y: [16, 17] },
          ],
        },
      ],

      chart: {
        type: 'rangeBar',
        height: 350,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: '700',
          colors: ['#fff'],
        },
        background: {
          enabled: true,
          foreColor: '#000000',
          borderColor: '#000000',
        },
        formatter: function (val: any, opt: any) {
          const ranges =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].y;

          return val === 0 ? '' : `${ranges[1]}`;
        },
      },
    };
  }

  ngOnInit(): void {}
}
