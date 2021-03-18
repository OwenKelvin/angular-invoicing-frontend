import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DailySaleLinePlotComponent} from './daily-sale-line-plot.component';
import {LineChartModule} from '@swimlane/ngx-charts';
import {LinePlotModule} from '../line-plot/line-plot.module';


@NgModule({
  declarations: [DailySaleLinePlotComponent],
  imports: [
    CommonModule,
    LinePlotModule
  ],
  exports: [DailySaleLinePlotComponent],
})
export class DailySaleLinePlotModule {
}
