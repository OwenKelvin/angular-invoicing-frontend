import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { LoadProductsModule } from '../products/load-products/load-products.module';
import { EditInventoryQuantityComponent } from './edit-inventory-quantity/edit-inventory-quantity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import { AppCheckboxModule } from 'src/app/shared/components/checkbox/checkbox.module';
import { AppPrintModule } from 'src/app/shared/print/print.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    InventoryManagementComponent,
    EditInventoryQuantityComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    LoadProductsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppLayoutModule,
    AppLoadingBubbleModule,
    AppCheckboxModule,
    AppPrintModule,
    ReactiveComponentModule
  ]
})
export class InventoryModule { }
