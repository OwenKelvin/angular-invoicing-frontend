import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinePlotComponent} from './line-plot.component';
import {LineChartModule} from '@swimlane/ngx-charts';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [CommonModule, LineChartModule, ReactiveComponentModule],
  declarations: [LinePlotComponent],
  exports: [
    LinePlotComponent,
  ]
})
export class LinePlotModule {

}
