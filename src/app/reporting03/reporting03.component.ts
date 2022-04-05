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
  selector: 'reporting03-chart',
  templateUrl: './reporting03.component.html',
  styleUrls: ['./reporting03.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Reporting03Component {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: ChartOptions;
  public chart2options!: ChartOptions;

  constructor() {
    this.chartOptions = {
      markers: {},
      tooltip: {},
      toolbar: {},
      colors: {},
      series: [
        {
          name: 'data1',
          type: 'column',
          data: [21.1, 52.2, 25.2, 23.2, 26.2, 21.2, 25.2, 23.2, 26.2, 21.2],
        },
        {
          name: 'data2',
          type: 'column',
          data: [26, 25, 22, 23, 21, 22, 25, 25, 22, 23],
        },
        {
          name: 'data3',
          type: 'data4',
          data: [35, 41, 36, 26, 45, 22, 48, 25, 22, 23],
        },
        {
          name: 'data4',
          type: 'column',
          data: [26, 25, 22, 63, 22, 21, 25, 25, 22, 23],
        },
        {
          name: 'data5',
          type: 'column',
          data: [35, 41, 56, 26, 45, 48, 22, 25, 22, 23],
        },
        {
          name: 'data6',
          type: 'column',
          data: [26, 75, 62, 55, 22, 23, 23, 22, 21, 25],
        },
        {
          name: 'data7',
          type: 'column',
          data: [35, 61, 25, 22, 23, 36, 26, 45, 48, 22],
        },
        {
          name: 'data8',
          type: 'column',
          data: [35, 41, 36, 26, 25, 22, 25, 26, 45, 48],
        },
        {
          name: 'data8',
          type: 'column',
          data: [35, 41, 36, 26, 25, 22, 25, 26, 45, 48],
        },
        {
          name: 'data10',
          type: 'column',
          data: [26, 25, 26, 25, 22, 25, 22, 23, 21, 25],
        },
      ],
      chart: {
        height: 800,
        width: 1300,
        id: 'wt',
        type: 'line',
        group: 'social',
        /*    background: '#949494', */
        foreColor: '#828282',
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent'],
      },
      legend: {
        show: false,
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
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
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
            y: 50,
            borderColor: '#5A5A5A',
            strokeDashArray: 3,
            borderWidth: 2,
            label: {
              borderColor: '#b0b0b0',
              style: {
                color: '#000000',
                background: '#ffffff',
              },
              text: '300s',
              position: 'front',
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
              text: '',
            },
          },
        ],
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '95%',
          /* barHeight: '70%', */
          dataLabels: {
            hideOverflowingLabels: false,
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [5],
        style: {
          fontSize: '16px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: '600',
          colors: ['#fff'],
        },
        background: {
          enabled: true,
          foreColor: '#000000',
        },
      },
      yaxis: {
        min: 0,
        max: 80,
        title: {
          text: 'Value',
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: '700',
          },
        },
      },
      xaxis: {
        type: 'category',
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
        /* OP-kon belul hol helyezkednek el a barok */
        tickPlacement: 'between',
        position: 'bottom',
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#fff',
          height: 0,
        },
        categories: [
          '8:00',
          '8:10',
          '8:20',
          '8:30',
          '8:40',
          '8:50',
          '9:00',
          '9:10',
          '9:20',
          '9:30',
        ],
      },
      fill: {
        opacity: 1,
        colors: [
          '#006BA6',
          '#006BA6',
          '#006BA6',
          /* '#b80707', */
          '#006BA6',
          '#006BA6',
          '#006BA6',
          '#006BA6',
        ],
      },
    };
    this.chart2options = {
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
            y: 50,
            borderColor: '#5A5A5A',
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
          {
            y: 30,
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
      legend: {},
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
        categories: [...Array(80).keys()].reverse(),
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
        /* OP-kon belul hol helyezkednek el a barok */
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
            25, 22, 75, 21, 22, 25, 25, 22, 23, 80, 26, 25, 22, 75, 21, 22, 25,
            25, 22, 23, 80, 26, 25, 22, 75, 21, 22, 25, 25, 22, 23, 80, 23, 80,
            25, 22, 23, 80, 26, 25, 22, 75, 21, 22, 25, 25, 22, 23, 80, 23, 80,
            25, 22, 23, 80, 26, 25, 22, 75, 21, 22, 25, 25,
          ],
        },
      ],
      chart: { height: 800, width: 300, id: 'tw', type: 'bar' },
      colors: ['#006BA6'],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40,
        },
        show: true,
      },
      fill: {},
    };
  }

  public chart3Options: ChartOptions = {
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
  public chart4Options: ChartOptions = {
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
  public chart1OptionsPie: ChartOptions2 = {
    series: [470, 290, 30],
    labels: ['Normal Part', 'Choko tei parts', 'All loss'],
    chart: {
      width: 550,
      height: 550,
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
      show: true,
      horizontalAlign: 'left',
    },
    dataLabels: {
      enabled: true,
      offsetY: 20,
      formatter: function (val: any, opts: any) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        const cVal = ((790 * val) / 100).toFixed(0);
        return `${name} - ${cVal}${'%'}`;
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
  public chart2OptionsPie: ChartOptions2 = {
    series: [67, 4, 21, 4, 4],
    labels: [
      'Standart time',
      'CT speed loss',
      'Chokotei loss',
      'Frame time loss',
      'Long break',
    ],
    chart: {
      width: 550,
      height: 550,
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
}
