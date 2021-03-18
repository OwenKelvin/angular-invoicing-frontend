import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalProfitTodayComponent } from './total-profit-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';



@NgModule({
    declarations: [TotalProfitTodayComponent],
    exports: [
        TotalProfitTodayComponent
    ],
  imports: [
    CommonModule,
    DashboardWidgetModule
  ]
})
export class TotalProfitTodayModule { }
