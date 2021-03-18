import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinePlotComponent} from './line-plot.component';
import {LineChartModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, LineChartModule],
  declarations: [LinePlotComponent],
  exports: [
    LinePlotComponent,
    BrowserAnimationsModule
  ]
})
export class LinePlotModule {

}
