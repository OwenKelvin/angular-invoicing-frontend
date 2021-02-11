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
    path: 'purchases',
    loadChildren: () => import('./purchases-report/purchases-report.module').then(m => m.PurchasesReportModule),
    data: {
      breadcrumb: 'Purchases Report'
    }
  },
  {
    path: 'mpesa-receipt-report',
    loadChildren: () => import('./m-pesa-receipt-report/m-pesa-receipt-report.module').then(m => m.MPesaReceiptReportModule),
    data: {
      breadcrumb: 'Sales Report'
    }
  },
  {
    path: 'inventory-movement-report',
    loadChildren: () => import('./inventory-movement-report/inventory-movement-report.module')
      .then(m => m.InventoryMovementReportModule),
    data: {
      breadcrumb: 'Inventory Movement Report Report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
