import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalSalesTodayComponent } from './total-sales-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
    declarations: [TotalSalesTodayComponent],
    exports: [
        TotalSalesTodayComponent
    ],
  imports: [
    CommonModule,
    DashboardWidgetModule,
    ReactiveComponentModule
  ]
})
export class TotalSalesTodayModule { }
