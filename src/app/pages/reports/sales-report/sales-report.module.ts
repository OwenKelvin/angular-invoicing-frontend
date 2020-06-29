import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReportRoutingModule } from './sales-report-routing.module';
import { SalesReportComponent } from './sales-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadProductsModule } from '../../products/load-products/load-products.module';
import { AppPrintModule } from 'src/app/shared/print/print.module';
import { AppCheckboxModule } from 'src/app/shared/components/checkbox/checkbox.module';


@NgModule({
  declarations: [SalesReportComponent],
  imports: [
    CommonModule,
    SalesReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadProductsModule,
    AppPrintModule,
    AppCheckboxModule
  ]
})
export class SalesReportModule { }
