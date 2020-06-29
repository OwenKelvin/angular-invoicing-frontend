import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesReportComponent } from './sales-report.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: SalesReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesReportRoutingModule { }
