import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export interface ILinePlot {
  series: {name: string, value: number}[]; name: string;
}

@Component({
  selector: 'app-line-plot',
  templateUrl: './line-plot.component.html',
  styleUrls: ['./line-plot.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinePlotComponent {
  @Input() results: ILinePlot[] = [];
  @Input() title = 'Daily Profit';
  @Input() yAxisLabel = 'Profit';

  removeYear(val: string) {
    return val.substr(8, 2) + val.substr(4, 3);
  }

}
