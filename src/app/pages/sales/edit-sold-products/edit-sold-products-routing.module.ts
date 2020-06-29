import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditSoldProductsComponent } from './edit-sold-products.component';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: EditSoldProductsComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSoldProductsRoutingModule { }
