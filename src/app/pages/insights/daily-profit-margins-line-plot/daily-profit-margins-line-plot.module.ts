import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DailyProfitMarginsLinePlotComponent} from './daily-profit-margins-line-plot.component';
import {LinePlotModule} from '../line-plot/line-plot.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [DailyProfitMarginsLinePlotComponent],
  imports: [
    CommonModule,
    LinePlotModule,
    ReactiveComponentModule
  ],
  exports: [DailyProfitMarginsLinePlotComponent],
})
export class DailyProfitMarginsLinePlotModule {
}
