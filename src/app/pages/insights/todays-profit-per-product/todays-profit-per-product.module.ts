import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodaysProfitPerProductComponent } from './todays-profit-per-product.component';
import {LoadProductsModule} from '../../products/load-products/load-products.module';
import {AppLayoutModule} from '../../../shared/modules/app-layout.module';
import {HorizontalStackedBarPlotModule} from '../horizontal-stacked-bar-plot/horizontal-stacked-bar-plot.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [TodaysProfitPerProductComponent],
  exports: [
    TodaysProfitPerProductComponent
  ],
  imports: [
    CommonModule,
    LoadProductsModule,
    HorizontalStackedBarPlotModule,
    ReactiveComponentModule
  ]
})
export class TodaysProfitPerProductModule { }
