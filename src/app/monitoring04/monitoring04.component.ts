import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexGrid,
  ApexAnnotations,
  ApexDataLabels,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
  annotations: ApexAnnotations;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
};

@Component({
  selector: 'monitoring04-chart',
  templateUrl: './monitoring04.component.html',
  styleUrls: ['./monitoring04.component.scss'],
})
export class Monitoring04Component {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'shift avg.',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 11],
        },
        {
          name: 'last hour',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 22],
        },
        {
          name: 'last 5 avg',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 33],
        },
      ],
      annotations: {
        yaxis: [
          {
            y: 82,
            borderColor: '#5A5A5A',
            strokeDashArray: 3,
            borderWidth: 2,
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: 'RESULT : 82',
            },
          },
          {
            y: 64,
            borderWidth: 2,
            strokeDashArray: 3,
            borderColor: '#34B78F',
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: 'ATT: 64',
            },
          },
        ],
      },
      legend: {
        show: true,
        position: 'top',
        markers: {
          fillColors: ['#00000'],
          strokeColor: '#00000',
        },
      },
      grid: {
        show: true,
        borderColor: '#828282',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        row: {
          colors: ['#ffffff'],
          opacity: 0,
        },
        column: {
          colors: ['#828282'],
          opacity: 0,
        },
      },
      dataLabels: {
        enabledOnSeries: [0],
        enabled: true,
        style: {
          fontSize: '18px',
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
      chart: {
        type: 'bar',
        height: 500,
        foreColor: '#828282',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          dataLabels: {
            hideOverflowingLabels: true,
            position: 'center',
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent', 'transparent', 'transparent'],
      },
      xaxis: {
        type: 'category',
        categories: [
          'OP1',
          'OP2',
          'OP3',
          'OP4',
          'OP5',
          'OP6',
          'OP7',
          'OP8',
          'OP9',
          'OP10',
        ],
        tickAmount: undefined,
        tickPlacement: 'between',
        position: 'bottom',
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#ffffff',
          height: 50,
        },
      },
      fill: {
        opacity: 1,
        colors: ['#8246Af', '#0092bd', '#828282'],
      },
    };
  }
}
