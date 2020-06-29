import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { LoadSalesModule } from './load-sales/load-sales.module';
import { SaleSummaryComponent } from './sale-summary/sale-summary.component';
import { AddSaleItemComponent } from './add-sale-item/add-sale-item.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoadProductsModule } from '../products/load-products/load-products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './store/reducers/cart.reducer';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { AppCheckboxModule } from 'src/app/shared/components/checkbox/checkbox.module';
import { SalesComponent } from './sales.component';
import { AppLinksModule } from 'src/app/shared/components/links/links.module';
import { LoadMyProfileModule } from '../my-profile/load-my-profile.module';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';

@NgModule({
  declarations: [
    SaleSummaryComponent, AddSaleItemComponent, SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    LoadSalesModule,
    LoadProductsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    AppLayoutModule,
    AppCheckboxModule,
    AppLinksModule,
    LoadMyProfileModule,
    AppLoadingBubbleModule,
    NgSelectModule,
    AppInputModule
  ]
})
export class SalesModule { }
