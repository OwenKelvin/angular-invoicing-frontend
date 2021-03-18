import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalStackedBarPlotComponent } from './horizontal-stacked-bar-plot.component';
import {BarChartModule} from '@swimlane/ngx-charts';



@NgModule({
    declarations: [HorizontalStackedBarPlotComponent],
    exports: [
        HorizontalStackedBarPlotComponent
    ],
  imports: [
    CommonModule,
    BarChartModule
  ]
})
export class HorizontalStackedBarPlotModule { }
