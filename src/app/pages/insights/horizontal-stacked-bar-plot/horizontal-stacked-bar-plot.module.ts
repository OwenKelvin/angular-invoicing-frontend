import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalStackedBarPlotComponent } from './horizontal-stacked-bar-plot.component';
import {BarChartModule} from '@swimlane/ngx-charts';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
    declarations: [HorizontalStackedBarPlotComponent],
    exports: [
        HorizontalStackedBarPlotComponent
    ],
  imports: [
    CommonModule,
    BarChartModule,
    ReactiveComponentModule
  ]
})
export class HorizontalStackedBarPlotModule { }
