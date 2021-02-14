import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InventoryMovementManagementComponent} from './inventory-movement-management/inventory-movement-management.component';

const routes: Routes = [
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    component: InventoryMovementManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InventoryMovementManagementRoutingModule {

}
