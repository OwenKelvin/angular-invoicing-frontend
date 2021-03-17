import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DailySaleLinePlotComponent} from './daily-sale-line-plot.component';
import {LineChartModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DailySaleLinePlotComponent],
  imports: [
    CommonModule,
    LineChartModule
  ],
  exports: [DailySaleLinePlotComponent],
})
export class DailySaleLinePlotModule {
}
