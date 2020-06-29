import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllPurchasesComponent,
    canDeactivate: [ CanDeactivateGuard ],
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
