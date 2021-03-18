import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalProfitTodayComponent } from './total-profit-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
    declarations: [TotalProfitTodayComponent],
    exports: [
        TotalProfitTodayComponent
    ],
  imports: [
    CommonModule,
    DashboardWidgetModule,
    ReactiveComponentModule
  ]
})
export class TotalProfitTodayModule { }
