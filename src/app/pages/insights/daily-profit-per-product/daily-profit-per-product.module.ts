import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyProfitPerProductComponent } from './daily-profit-per-product.component';
import {LoadProductsModule} from '../../products/load-products/load-products.module';
import {AppLayoutModule} from '../../../shared/modules/app-layout.module';
import {HorizontalStackedBarPlotModule} from '../horizontal-stacked-bar-plot/horizontal-stacked-bar-plot.module';



@NgModule({
  declarations: [DailyProfitPerProductComponent],
  exports: [
    DailyProfitPerProductComponent
  ],
  imports: [
    CommonModule,
    LoadProductsModule,
    HorizontalStackedBarPlotModule
  ]
})
export class DailyProfitPerProductModule { }
