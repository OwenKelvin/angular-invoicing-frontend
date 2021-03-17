import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InsightsComponent} from './insights.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: InsightsComponent,
  data: {
    breadcrumb: null
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule {
}
