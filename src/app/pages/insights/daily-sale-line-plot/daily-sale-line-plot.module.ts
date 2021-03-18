import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DailySaleLinePlotComponent} from './daily-sale-line-plot.component';
import {LinePlotModule} from '../line-plot/line-plot.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [DailySaleLinePlotComponent],
  imports: [
    CommonModule,
    LinePlotModule,
    ReactiveComponentModule
  ],
  exports: [DailySaleLinePlotComponent],
})
export class DailySaleLinePlotModule {
}
