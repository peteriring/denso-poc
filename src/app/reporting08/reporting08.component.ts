import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexPlotOptions,
  ApexLegend,
  ApexYAxis,
  ApexXAxis,
  ApexDataLabels,
  ApexAnnotations,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  colors: string[];
  annotations: ApexAnnotations;
};

@Component({
  selector: 'reporting08-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reporting08.component.html',
  styleUrls: ['./reporting08.component.scss'],
})
export class Reporting08Component implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: ChartOptions;
  public chartOptions2: ChartOptions;
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: 'DMAX',
              y: 760,
            },
          ],
        },
      ],
      chart: {
        width: 600,
        height: 400,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '80%',
          dataLabels: {
            hideOverflowingLabels: false,
            position: 'center',
          },
        },
      },
      annotations: {
        xaxis: [
          {
            x: 750,
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
      yaxis: { show: true },
      xaxis: {
        labels: {
          show: true,
        },
      },
      colors: ['#5Bc2E7'],
      legend: {
        show: false,
        showForSingleSeries: false,
        customLegendItems: ['Target', 'Target'],
        markers: {
          fillColors: ['#a8d600', '#775DD0'],
        },
      },
    };
    this.chartOptions2 = {
      series: [
        {
          data: [
            {
              x: 'DMAX',
              y: 7160,
            },
          ],
        },
      ],
      chart: {
        height: 400,
        width: 600,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '80%',
          dataLabels: {
            hideOverflowingLabels: false,
            position: 'center',
          },
        },
      },
      annotations: {
        xaxis: [
          {
            x: 6500,
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
      yaxis: { show: true },
      xaxis: {
        labels: {
          show: true,
        },
      },
      colors: ['#5Bc2E7'],
      legend: {
        show: false,
        showForSingleSeries: false,
        customLegendItems: ['Target', 'Target'],
        markers: {
          fillColors: ['#a8d600', '#775DD0'],
        },
      },
    };
  }

  ngOnInit(): void {}
}
