import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DailyProfitLinePlotComponent} from './daily-profit-line-plot.component';
import {LinePlotModule} from '../line-plot/line-plot.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [DailyProfitLinePlotComponent],
  imports: [
    CommonModule,
    LinePlotModule,
    ReactiveComponentModule
  ],
  exports: [DailyProfitLinePlotComponent],
})
export class DailyProfitLinePlotModule {
}
