import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryMovementReportRoutingModule } from './inventory-movement-report-routing.module';
import { InventoryMovementReportComponent } from './inventory-movement-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoadProductsModule } from '../../products/load-products/load-products.module';
import {Minus2parenthesisModule} from '../../../shared/pipes/minus2parenthesis/minus2parenthesis.module';
import {AppInputModule} from '../../../shared/components/input/app-input.module';
import {AppPrintModule} from '../../../shared/print/print.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [InventoryMovementReportComponent],
  imports: [
    CommonModule,
    InventoryMovementReportRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    LoadProductsModule,
    Minus2parenthesisModule,
    AppInputModule,
    AppPrintModule,
    ReactiveComponentModule,
  ]
})
export class InventoryMovementReportModule { }
