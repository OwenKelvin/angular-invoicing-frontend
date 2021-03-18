import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinePlotComponent} from './line-plot.component';
import {LineChartModule} from '@swimlane/ngx-charts';

@NgModule({
  imports: [CommonModule, LineChartModule],
  exports: [
    LinePlotComponent
  ],
  declarations: [LinePlotComponent]
})
export class LinePlotModule {

}
