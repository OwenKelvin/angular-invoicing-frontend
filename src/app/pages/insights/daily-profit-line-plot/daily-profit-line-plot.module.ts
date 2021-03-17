import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DailyProfitLinePlotComponent} from './daily-profit-line-plot.component';
import {LineChartModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DailyProfitLinePlotComponent],
  imports: [
    CommonModule,
    LineChartModule
  ],
  exports: [DailyProfitLinePlotComponent],
})
export class DailyProfitLinePlotModule {
}
