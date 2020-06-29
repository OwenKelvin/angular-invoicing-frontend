import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    canDeactivate: [ CanDeactivateGuard ],
    component: InventoryManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
