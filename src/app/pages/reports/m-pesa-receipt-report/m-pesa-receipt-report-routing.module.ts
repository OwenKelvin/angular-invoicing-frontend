import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MPesaReceiptReportComponent } from './m-pesa-receipt-report.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MPesaReceiptReportComponent,
    data: {
      breadcrumb: 'M Pesa Receipts Report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MPesaReceiptReportRoutingModule { }
