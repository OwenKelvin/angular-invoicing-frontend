import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWidgetComponent } from './dashboard-widget.component';



@NgModule({
    declarations: [DashboardWidgetComponent],
    exports: [
        DashboardWidgetComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DashboardWidgetModule { }
