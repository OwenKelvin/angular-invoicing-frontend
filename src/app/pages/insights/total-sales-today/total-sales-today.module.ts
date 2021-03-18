import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalSalesTodayComponent } from './total-sales-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';



@NgModule({
    declarations: [TotalSalesTodayComponent],
    exports: [
        TotalSalesTodayComponent
    ],
  imports: [
    CommonModule,
    DashboardWidgetModule
  ]
})
export class TotalSalesTodayModule { }
