import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryMovementReportRoutingModule } from './inventory-movement-report-routing.module';
import { InventoryMovementReportComponent } from './inventory-movement-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoadProductsModule } from '../../products/load-products/load-products.module';


@NgModule({
  declarations: [InventoryMovementReportComponent],
  imports: [
    CommonModule,
    InventoryMovementReportRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    LoadProductsModule,
  ]
})
export class InventoryMovementReportModule { }
