import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryMovementReportComponent } from './inventory-movement-report.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InventoryMovementReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryMovementReportRoutingModule { }
