import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWidgetComponent } from './dashboard-widget.component';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
    declarations: [DashboardWidgetComponent],
    exports: [
        DashboardWidgetComponent
    ],
    imports: [
        CommonModule,
        ReactiveComponentModule
    ]
})
export class DashboardWidgetModule { }
