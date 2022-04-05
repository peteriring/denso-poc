import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ApexAnnotations,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTheme,
  ChartComponent,
} from 'ng-apexcharts';
export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  annotations: ApexAnnotations;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
};
@Component({
  selector: 'reporting07-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reporting07.component.html',
  styleUrls: ['./reporting07.component.scss'],
})
export class Reporting07Component implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptionsPie!: ChartOptions2;
  public chartOptionsPie2!: ChartOptions2;

  constructor() {
    this.chartOptionsPie = {
      series: [460, 190],
      labels: ['Normal Part', 'Choko tei parts'],
      chart: {
        width: 300,
        height: 300,
        type: 'pie',
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          dataLabels: {
            minAngleToShowLabel: 200,
            offset: -40,
          },
        },
      },
      stroke: {
        show: true,
        lineCap: 'butt',
        width: 2,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        formatter: function (val: any, opts: any) {
          const name = opts.w.globals.labels[opts.seriesIndex];

          return `${name} - ${val.toFixed(1)}${'%'}`;
        },
      },
      annotations: {
        position: 'front',
        yaxis: [
          {
            y: 85,
            y2: null,
            strokeDashArray: 1,
            opacity: 0.7,
            width: '100%',
          },
        ],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.chartOptionsPie2 = {
      series: [67, 41],
      labels: ['Standart time', 'CT speed loss'],
      chart: {
        width: 300,
        height: 300,
        type: 'pie',
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          dataLabels: {
            offset: -40,
            minAngleToShowLabel: 200,
          },
        },
      },
      stroke: {
        show: true,
        lineCap: 'butt',
        width: 2,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: any) {
          const name = opts.w.globals.labels[opts.seriesIndex];

          return `${name} - ${val.toFixed(1)}${'%'}`;
        },
      },
      annotations: {
        position: 'front',
        yaxis: [
          {
            y: 85,
            y2: null,
            strokeDashArray: 1,
            opacity: 0.7,
            width: '100%',
          },
        ],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
