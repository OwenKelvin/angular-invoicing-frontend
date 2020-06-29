import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MPesaReceiptReportComponent } from './m-pesa-receipt-report.component';
import { MPesaReceiptReportRoutingModule } from './m-pesa-receipt-report-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppPrintModule } from 'src/app/shared/print/print.module';



@NgModule({
  declarations: [MPesaReceiptReportComponent],
  imports: [
    CommonModule,
    MPesaReceiptReportRoutingModule,
    ReactiveFormsModule,
    AppPrintModule
  ]
})
export class MPesaReceiptReportModule { }
