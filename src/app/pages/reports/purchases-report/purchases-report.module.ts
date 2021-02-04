import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesReportRoutingModule } from './purchases-report-routing.module';
import { PurchasesReportComponent } from './purchases-report.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppLoadingBubbleModule} from '../../../shared/components/loading-bubble/app-loading-bubble';
import {LoadProductsModule} from '../../products/load-products/load-products.module';
import {AppPrintModule} from '../../../shared/print/print.module';


@NgModule({
  declarations: [PurchasesReportComponent],
  imports: [
    CommonModule,
    PurchasesReportRoutingModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    LoadProductsModule,
    AppPrintModule,
  ]
})
export class PurchasesReportModule { }
