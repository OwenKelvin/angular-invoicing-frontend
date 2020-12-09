import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { AppLinksModule } from 'src/app/shared/components/links/links.module';
import {LoadProductsModule} from '../products/load-products/load-products.module';


@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    AppLinksModule,
    AppLayoutModule,
    LoadProductsModule,
  ]
})
export class ReportsModule { }
