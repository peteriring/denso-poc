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
  encapsulation: ViewEncapsulation.None,
  selector: 'reporting06-chart',
  templateUrl: './reporting06.component.html',
  styleUrls: ['./reporting06.component.scss'],
})
export class Reporting06Component implements OnInit {
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
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      annotations: {
        yaxis: [
          {
            y: 30,
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
        colors: [/* '#2BC2E7',  */ '#B4B4B4'],
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
          name: 'EOE',
          data: [
            56, 55, 61, 48, 57, 0, 0, 66, 45, 51, 68, 47, 0, 0, 56, 55, 61, 48,
            57, 0, 0, 66, 45, 51, 68, 47, 0, 0, 51, 68, 47,
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
            y: 34,
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
        colors: ['#B4B4B4'],
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
      series: [
        {
          name: 'EEO',
          data: [
            56, 55, 61, 48, 57, 0, 0, 66, 45, 51, 68, 47, 0, 0, 56, 55, 61, 48,
            57, 0, 0, 66, 45, 51, 68, 47, 0, 0, 51, 68, 47,
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
            y: 33,
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
        colors: ['#B4B4B4'],
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
  }

  ngOnInit(): void {}
}
