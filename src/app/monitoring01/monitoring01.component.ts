import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexPlotOptions,
  ApexLegend,
  ApexYAxis,
  ApexXAxis,
  ApexDataLabels,
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
};

@Component({
  selector: 'monitoring01-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './monitoring01.component.html',
  styleUrls: ['./monitoring01.component.scss'],
})
export class Monitoring01Component {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: ChartOptions;
  public chart2options!: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: '',
              y: 72,
              goals: [
                {
                  name: 'Target',
                  strokeDashArray: 3,
                  value: 80,
                  strokeWidth: 70,
                  strokeColor: '#5A5A5A',
                },
              ],
            },
            {
              x: 'B-C',
              y: 90,
              goals: [
                {
                  name: 'Target',
                  strokeDashArray: 3,
                  value: 87,
                  strokeWidth: 70,
                  strokeColor: '#5A5A5A',
                },
              ],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (value) {
          if (value == 0) {
            return '';
          } else {
            return value + '%';
          }
        },
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
      yaxis: { show: true },
      xaxis: {
        labels: {
          show: true,
        },
      },
      colors: ['#00873E'],
      legend: {
        show: false,
        showForSingleSeries: false,
        customLegendItems: ['Target', 'Target'],
        markers: {
          fillColors: ['#a8d600', '#775DD0'],
        },
      },
    };
    this.chart2options = {
      series: [
        {
          data: [
            {
              x: 'A',
              y: 82,
              goals: [
                {
                  name: 'Target',
                  strokeDashArray: 3,
                  value: 80,
                  strokeWidth: 35,
                  strokeColor: '#828282',
                },
              ],
            },
            {
              x: 'B',
              y: 90,
              goals: [
                {
                  name: 'Target',
                  strokeDashArray: 3,
                  value: 87,
                  strokeWidth: 35,
                  strokeColor: '#828282',
                },
              ],
            },
            {
              x: 'C',
              y: 72,
              goals: [
                {
                  name: 'Target',
                  value: 80,
                  strokeDashArray: 3,
                  strokeWidth: 35,
                  strokeColor: '#828282',
                },
              ],
            },
            {
              x: 'D',
              y: 0,
              goals: [
                {
                  name: 'Target',
                  value: 87,
                  strokeWidth: 0,
                  strokeColor: '#828282',
                },
              ],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (value) {
          if (value == 0) {
            return '';
          } else {
            return value + '%';
          }
        },
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
      yaxis: { show: true },
      xaxis: {
        labels: {
          show: true,
        },
      },
      colors: ['#00873E'],
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
}
