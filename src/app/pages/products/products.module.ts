import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {AllProductsComponent} from './all-products/all-products.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ProductMaintenanceComponent} from './product-maintenance/product-maintenance.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {
  DeleteProductConfirmationComponent
} from './delete-product-confirmation/delete-product-confirmation.component';
import {LoadProductsModule} from './load-products/load-products.module';
import {AppLayoutModule} from 'src/app/shared/modules/app-layout.module';
import {AppPrintModule} from 'src/app/shared/print/print.module';
import {AppInputModule} from 'src/app/shared/components/input/app-input.module';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductMaintenanceComponent,
    DeleteProductConfirmationComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    LoadProductsModule,
    AppLayoutModule,
    AppPrintModule,
    AppInputModule
  ]
})
export class ProductsModule {
}
