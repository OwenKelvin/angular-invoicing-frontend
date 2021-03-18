import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthsPurchasesByProductComponent} from './months-purchases-by-product.component';
import {ReactiveComponentModule} from '@ngrx/component';
import {BarPlotModule} from '../bar-plot/bar-plot.module';


@NgModule({
  declarations: [MonthsPurchasesByProductComponent],
  exports: [
    MonthsPurchasesByProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    BarPlotModule
  ]
})
export class MonthsPurchasesByProductModule {
}
