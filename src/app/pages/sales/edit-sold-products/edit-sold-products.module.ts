import { NgModule } from '@angular/core';
import { EditSoldProductsComponent } from './edit-sold-products.component';
import { CommonModule } from '@angular/common';
import { EditSoldProductsRoutingModule } from './edit-sold-products-routing.module';
import { AppPrintModule } from 'src/app/shared/print/print.module';
import { AppDatePickerModule } from 'src/app/shared/components/date-picker/date-picker.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSoldProductComponent } from '../edit-sold-product/edit-sold-product.component';
import { DeleteSoldProductComponent } from '../delete-sold-product/delete-sold-product.component';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EditSoldProductsRoutingModule,
    AppPrintModule,
    AppDatePickerModule,
    ModalModule.forRoot(),
    AppInputModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ],
  declarations: [
    EditSoldProductsComponent,
    EditSoldProductComponent,
    DeleteSoldProductComponent],
  exports: [EditSoldProductsComponent]

})

export class EditSoldProductsModule { }
