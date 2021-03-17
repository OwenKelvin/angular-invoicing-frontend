import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InsightsRoutingModule} from './insights-routing.module';
import {InsightsComponent} from './insights.component';
import {DailyProfitLinePlotModule} from './daily-profit-line-plot/daily-profit-line-plot.module';
import {DailySaleLinePlotModule} from './daily-sale-line-plot/daily-sale-line-plot.module';


@NgModule({
  declarations: [InsightsComponent],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    DailyProfitLinePlotModule,
    DailySaleLinePlotModule
  ]
})
export class InsightsModule {
}
