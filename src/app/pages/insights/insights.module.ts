import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InsightsRoutingModule} from './insights-routing.module';
import {InsightsComponent} from './insights.component';
import {DailyProfitLinePlotModule} from './daily-profit-line-plot/daily-profit-line-plot.module';
import {DailySaleLinePlotModule} from './daily-sale-line-plot/daily-sale-line-plot.module';
import {TodaysProfitPerProductModule} from './todays-profit-per-product/todays-profit-per-product.module';
import {AppLayoutModule} from '../../shared/modules/app-layout.module';
import {DailyProfitMarginsLinePlotModule} from './daily-profit-margins-line-plot/daily-profit-margins-line-plot.module';
import {DailyProfitPerProductModule} from './daily-profit-per-product/daily-profit-per-product.module';
import {TotalProfitTodayModule} from './total-profit-today/total-profit-today.module';
import {TotalSalesTodayModule} from './total-sales-today/total-sales-today.module';
import {TotalPurchasesTodayModule} from './total-purchases-today/total-purchases-today.module';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ReactiveComponentModule } from '@ngrx/component';
@NgModule({
  declarations: [InsightsComponent],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    AppLayoutModule,
    DailyProfitLinePlotModule,
    DailySaleLinePlotModule,
    TodaysProfitPerProductModule,
    DailyProfitMarginsLinePlotModule,
    DailyProfitPerProductModule,
    TotalProfitTodayModule,
    TotalSalesTodayModule,
    TotalPurchasesTodayModule,
    TabsModule.forRoot(),
    ReactiveComponentModule
  ]
})
export class InsightsModule {
}
