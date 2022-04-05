import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
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
  ApexMarkers,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
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
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  colors: any;
  toolbar: any;
};
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
  selector: 'reporting04-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reporting04.component.html',
  styleUrls: ['./reporting04.component.scss'],
})
export class Reporting04Component implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chart2Options!: ChartOptions;
  public chartOptionsPie!: ChartOptions2;
  public chart2Options2!: ChartOptions;
  public chartOptionsPie2!: ChartOptions2;
  public chart3Options!: ChartOptions;
  constructor() {
    this.chart2Options = {
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '95%',
          dataLabels: {
            hideOverflowingLabels: false,
            position: 'top',
          },
        },
      },
      annotations: {
        yaxis: [
          {
            y: 21,
            borderWidth: 2,
            strokeDashArray: 3,
            borderColor: '#34B78F',
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: '',
            },
          },
        ],
      },
      legend: {
        show: true,
        position: 'right',
      },
      tooltip: {},
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      toolbar: {
        tools: {
          selection: false,
        },
      },
      markers: {
        size: 6,
        hover: {
          size: 10,
        },
      },
      grid: {},
      xaxis: {
        type: 'category',
        title: {
          text: 'frequency',
          style: {
            color: '#828282',
          },
        },
        categories: [...Array(30).keys()].reverse(),
        labels: {
          show: true,
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
            colors: ['#828282'],
          },
        },
        tickAmount: undefined,
        tickPlacement: 'on',
        position: 'bottom',
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#fff',
          height: 0,
        },
      },
      series: [
        {
          name: 'data2',
          type: 'column',
          data: [
            26, 25, 22, 75, 21, 22, 25, 25, 22, 23, 80, 26, 25, 22, 75, 21, 22,
            25, 25, 22, 23, 80, 26, 25, 22, 75, 21, 22, 25, 25, 22, 23, 80, 26,
          ],
        },
      ],
      chart: { height: 400, width: 500, id: 'tw', type: 'bar' },
      colors: ['#006BA6'],
      yaxis: {
        title: {
          text: 'compartment',
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
            color: '#828282',
          },
        },
        tickAmount: 2,
        labels: {
          minWidth: 40,
        },
        show: true,
      },
      fill: {},
    };
    this.chartOptionsPie = {
      series: [470, 290, 30],
      labels: ['Normal Part', 'Choko tei parts', 'All loss'],
      chart: {
        width: 400,
        height: 400,
        type: 'pie',
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
        },
      },
      stroke: {
        show: true,
        lineCap: 'butt',
        width: 2,
      },
      legend: {
        show: true,
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        formatter: function (val: number) {
          return ((790 * val) / 100).toFixed(0);
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
    this.chart2Options2 = {
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '95%',
          /* barHeight: '70%', */
          dataLabels: {
            hideOverflowingLabels: false,
            position: 'top',
          },
        },
      },
      annotations: {
        yaxis: [
          {
            y: 21,
            borderWidth: 2,
            strokeDashArray: 3,
            borderColor: '#34B78F',
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: '',
            },
          },
        ],
      },
      legend: {
        show: true,
        position: 'right',
      },
      tooltip: {},
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      toolbar: {
        tools: {
          selection: false,
        },
      },
      markers: {
        size: 6,
        hover: {
          size: 10,
        },
      },
      grid: {},
      xaxis: {
        type: 'category',
        title: {
          text: 'frequency',
          style: {
            color: '#828282',
          },
        },
        categories: [...Array(40).keys()].reverse(),
        labels: {
          show: true,
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
            colors: ['#828282'],
          },
        },
        tickAmount: undefined,
        tickPlacement: 'on',
        position: 'bottom',
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#fff',
          height: 0,
        },
      },
      series: [
        {
          name: 'data2',
          type: 'column',
          data: [
            26, 25, 22, 75, 21, 22, 25, 25, 22, 23, 80, 26, 25, 22, 75, 21, 22,
            25, 25, 22, 23, 80, 26, 25, 22, 75, 21, 22, 25, 25, 22, 23, 80, 26,
          ],
        },
      ],
      chart: { height: 400, width: 500, id: 'tw', type: 'bar' },
      colors: ['#006BA6'],
      yaxis: {
        title: {
          text: 'compartment',
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
            color: '#828282',
          },
        },
        tickAmount: 2,
        labels: {
          minWidth: 40,
        },
        show: true,
      },
      fill: {},
    };
    this.chartOptionsPie2 = {
      series: [67, 4, 21, 4, 4],
      labels: [
        'Standart time',
        'CT speed loss',
        'Chokotei loss',
        'Frame time loss',
        'Long break',
      ],
      chart: {
        width: 400,
        height: 400,
        type: 'pie',
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
        },
      },
      stroke: {
        show: true,
        lineCap: 'butt',
        width: 2,
      },
      legend: {
        show: true,
      },
      dataLabels: {
        enabled: true,
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
    this.chart3Options = {
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '95%',
          dataLabels: {
            hideOverflowingLabels: false,
            position: 'top',
          },
        },
      },
      annotations: {
        yaxis: [],
      },
      legend: {
        show: true,
        position: 'right',
      },
      tooltip: {},
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      toolbar: {
        tools: {
          selection: false,
        },
      },
      markers: {
        size: 6,
        hover: {
          size: 10,
        },
      },
      grid: {},
      xaxis: {
        type: 'category',
        title: {
          text: 'frequency',
          style: {
            color: '#828282',
          },
        },
        categories: [...Array(25).keys()].reverse(),
        labels: {
          show: true,
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
            colors: ['#828282'],
          },
        },
        tickAmount: undefined,
        tickPlacement: 'on',
        position: 'bottom',
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#fff',
          height: 0,
        },
      },
      series: [
        {
          name: 'data2',
          type: 'column',
          data: [
            11, 25, 15, 12, 22, 21, 11, 20, 15, 12, 22, 21, 11, 20, 15, 12, 22,
            21, 11, 20, 15, 12, 22, 21, 11, 20, 15, 12, 22, 21, 11, 20, 15, 12,
            22, 21,
          ],
        },
      ],
      chart: { height: 400, width: 500, id: 'tw', type: 'bar' },
      colors: ['#006BA6'],
      yaxis: {
        title: {
          text: 'compartment',
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
            color: '#828282',
          },
        },
        tickAmount: 2,
        labels: {
          minWidth: 40,
        },
        show: true,
      },
      fill: {},
    };
  }

  ngOnInit(): void {}
}
