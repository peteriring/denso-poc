import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexPlotOptions,
  ApexStroke,
  ApexAnnotations,
  ApexGrid,
  ApexDataLabels,
  ApexXAxis,
  ApexLegend,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  annotations: ApexAnnotations;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
};

@Component({
  selector: 'monitoring05-chart',
  templateUrl: './monitoring05.component.html',
  styleUrls: ['./monitoring05.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Monitoring05Component {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: '1h',
          type: 'column',
          data: [21.1, 22.2, 25.2, 23.2, 26.2, 21.2],
        },
        {
          name: '2h',
          type: 'column',
          data: [26, 25, 22, 23, 21, 25],
        },
        {
          name: '3h',
          type: 'column',
          data: [35, 41, 36, 26, 45, 48],
        },
        {
          name: '4h',
          type: 'column',
          data: [26, 25, 22, 23, 21, 25],
        },
        {
          name: '5h',
          type: 'column',
          data: [35, 41, 36, 26, 45, 48],
        },
        {
          name: '6h',
          type: 'column',
          data: [26, 25, 22, 23, 21, 25],
        },
        {
          name: '7h',
          type: 'column',
          data: [35, 41, 36, 26, 45, 48],
        },
        {
          name: '8h',
          type: 'column',
          data: [35, 41, 36, 26, 45, 48],
        },
      ],
      chart: {
        height: 500,
        type: 'line',
        foreColor: '#828282',
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent'],
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
      annotations: {
        yaxis: [
          {
            y: 40,
            borderColor: '#5A5A5A',
            strokeDashArray: 3,
            borderWidth: 2,
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: 'RESULT : 40',
            },
          },
          {
            y: 36,
            borderWidth: 2,
            strokeDashArray: 3,
            borderColor: '#34B78F',
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: 'ATT: 36',
            },
          },
        ],
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%',
          barHeight: '70%',
          dataLabels: {
            hideOverflowingLabels: true,
            position: 'center',
          },
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [5],
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
      yaxis: { min: 0 },
      xaxis: {
        type: 'category',
        labels: {
          show: true,
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
            colors: ['#fff'],
          },
        },
        tickAmount: undefined,
        tickPlacement: 'between',
        position: 'center',
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#ffffff',
          height: 0,
        },
        categories: ['OP1', 'OP2', 'OP3', 'OP4', 'OP5', 'OP6'],
      },
      fill: {
        opacity: 1,
        colors: [
          '#006BA6',
          '#006BA6',
          '#006BA6',
          '#006BA6',
          '#006BA6',
          '#006BA6',
          '#006BA6',
        ],
      },
    };
  }
}
