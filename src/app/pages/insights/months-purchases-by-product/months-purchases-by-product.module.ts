import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthsPurchasesByProductComponent } from './months-purchases-by-product.component';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [MonthsPurchasesByProductComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class MonthsPurchasesByProductModule { }
