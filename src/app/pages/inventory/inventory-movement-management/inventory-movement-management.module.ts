import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InventoryMovementManagementRoutingModule} from './inventory-movement-management-routing.module';
import { InventoryMovementManagementComponent } from './inventory-movement-management/inventory-movement-management.component';
import {Minus2parenthesisModule} from '../../../shared/pipes/minus2parenthesis/minus2parenthesis.module';

@NgModule({
  imports: [CommonModule, InventoryMovementManagementRoutingModule, Minus2parenthesisModule],
  declarations: [InventoryMovementManagementComponent]
})

export class InventoryMovementManagementModule {

}
