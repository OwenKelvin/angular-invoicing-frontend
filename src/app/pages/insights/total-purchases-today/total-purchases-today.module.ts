import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPurchasesTodayComponent } from './total-purchases-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
    declarations: [TotalPurchasesTodayComponent],
    exports: [
        TotalPurchasesTodayComponent
    ],
  imports: [
    CommonModule,
    DashboardWidgetModule,
    ReactiveComponentModule
  ]
})
export class TotalPurchasesTodayModule { }
