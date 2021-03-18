import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellersRoutingModule } from './sellers-routing.module';
import { LoadSellersModule } from './load-sellers/load-sellers.module';
import { AllSellersComponent } from './all-sellers/all-sellers.component';
import { SellerMaintenanceComponent } from './seller-maintenance/seller-maintenance.component';
import {
  DeleteSellerConfirmationComponent
} from './delete-seller-confirmation/delete-seller-confirmation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    AllSellersComponent,
    SellerMaintenanceComponent,
    DeleteSellerConfirmationComponent],
  imports: [
    CommonModule,
    SellersRoutingModule,
    LoadSellersModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppLayoutModule,
    ReactiveComponentModule
  ]
})
export class SellersModule { }
