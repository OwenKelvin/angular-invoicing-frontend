import {Component, Input, OnInit} from '@angular/core';

export interface IBarPlot {
  name: string;
  value: number;
}

@Component({
  selector: 'app-bar-plot',
  templateUrl: './bar-plot.component.html',
  styleUrls: ['./bar-plot.component.less']
})
export class BarPlotComponent implements OnInit {
  @Input() title = '';
  @Input() xAxisLabel = '';
  @Input() yAxisLabel = '';
  @Input() results: IBarPlot[] = [];

  constructor() {
  }

  colorScheme = {
    domain: [
      '#e6194b',
      '#3cb44b',
      '#ffe119',
      '#0082c8',
      '#f58231',
      '#911eb4',
      '#46f0f0',
      '#f032e6',
      '#d2f53c',
      '#fabebe',
      '#008080',
      '#e6beff',
      '#aa6e28',
      '#fffac8',
      '#800000',
      '#aaffc3',
      '#808000',
      '#ffd8b1',
      '#000080',
      '#808080',
      '#ffffff',
      '#000000',
    ]
  };

  ngOnInit(): void {
  }

  shortenName(val: string) {
    return val;
  }

}
