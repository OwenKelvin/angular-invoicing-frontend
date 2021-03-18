import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPurchasesTodayComponent } from './total-purchases-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';



@NgModule({
    declarations: [TotalPurchasesTodayComponent],
    exports: [
        TotalPurchasesTodayComponent
    ],
  imports: [
    CommonModule,
    DashboardWidgetModule
  ]
})
export class TotalPurchasesTodayModule { }
