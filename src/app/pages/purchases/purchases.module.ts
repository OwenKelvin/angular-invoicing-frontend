import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import * as fromPurchase from './store/reducers/purchase.reducer';
import { PurchaseEffects } from './store/effects/purchase.effects';
import { PurchaseMaintenanceComponent } from './purchase-maintenance/purchase-maintenance.component';
import { DeletePurchaseConfirmationComponent } from './delete-purchase-confirmation/delete-purchase-confirmation.component';

import { LoadProductsModule } from '../products/load-products/load-products.module';
import { LoadSellersModule } from '../sellers/load-sellers/load-sellers.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { AppDatePickerModule } from 'src/app/shared/components/date-picker/date-picker.module';
import { AppPrintModule } from 'src/app/shared/print/print.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AllPurchasesComponent,
    PurchaseMaintenanceComponent,
    DeletePurchaseConfirmationComponent],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([PurchaseEffects]),
    StoreModule.forFeature(fromPurchase.purchaseFeatureKey, fromPurchase.reducer),
    LoadProductsModule,
    LoadSellersModule,
    BsDropdownModule.forRoot(),
    AppLayoutModule,
    AppDatePickerModule,
    AppPrintModule,
    NgSelectModule,
    AppInputModule,
    ReactiveComponentModule
  ]
})
export class PurchasesModule { }
