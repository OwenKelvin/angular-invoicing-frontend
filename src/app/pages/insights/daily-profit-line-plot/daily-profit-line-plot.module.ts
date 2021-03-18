import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DailyProfitLinePlotComponent} from './daily-profit-line-plot.component';
import {LinePlotModule} from '../line-plot/line-plot.module';


@NgModule({
  declarations: [DailyProfitLinePlotComponent],
  imports: [
    CommonModule,
    LinePlotModule
  ],
  exports: [DailyProfitLinePlotComponent],
})
export class DailyProfitLinePlotModule {
}
