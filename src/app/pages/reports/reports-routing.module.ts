import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ReportsComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales-report/sales-report.module').then(m => m.SalesReportModule),
    data: {
      breadcrumb: 'Sales Report'
    }
  },
  {
    path: 'mpesa-receipt-report',
    loadChildren: () => import('./m-pesa-receipt-report/m-pesa-receipt-report.module').then(m => m.MPesaReceiptReportModule),
    data: {
      breadcrumb: 'Sales Report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
