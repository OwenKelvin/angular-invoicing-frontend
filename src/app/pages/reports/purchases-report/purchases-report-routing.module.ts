import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchasesReportComponent} from './purchases-report.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PurchasesReportComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesReportRoutingModule {
}
