import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SaleSummaryComponent} from './sale-summary/sale-summary.component';
import {SalesComponent} from './sales.component';
import {CanDeactivateGuard} from 'src/app/shared/guards/can-deactivate.guard';
import {SimpleSaleComponent} from './simple-sale/simple-sale.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: SalesComponent
  },
  {
    path: 'make-sale',
    data: {
      breadcrumb: 'Make Sale'
    },
    component: SaleSummaryComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'simple-sale',
    data: {
      breadcrumb: 'Make Sale'
    },
    component: SimpleSaleComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'edit-sale',
    data: {
      breadcrumb: 'Edit Sale'
    },
    loadChildren: () => import('./edit-sold-products/edit-sold-products.module').then(m => m.EditSoldProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {
}
