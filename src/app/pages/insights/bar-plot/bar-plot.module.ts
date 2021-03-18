import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarPlotComponent } from './bar-plot.component';
import {BarChartModule} from '@swimlane/ngx-charts';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
    declarations: [BarPlotComponent],
    exports: [
        BarPlotComponent
    ],
  imports: [
    CommonModule,
    BarChartModule,
    ReactiveComponentModule
  ]
})
export class BarPlotModule { }
