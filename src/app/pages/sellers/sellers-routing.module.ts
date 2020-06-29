import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSellersComponent } from './all-sellers/all-sellers.component';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: AllSellersComponent,
    canDeactivate: [CanDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
