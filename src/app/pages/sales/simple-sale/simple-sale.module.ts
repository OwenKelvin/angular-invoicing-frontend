import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleSaleComponent} from './simple-sale.component';
import {LoadProductsModule} from '../../products/load-products/load-products.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveComponentModule} from '@ngrx/component';
import {AppLoadingBubbleModule} from '../../../shared/components/loading-bubble/app-loading-bubble';
import {ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from '../../../shared/components/input/app-input.module';
import {AppValidateSubmitButtonModule} from '../../../shared/components/validate-submit-buttons/app-validate-submit-buttons.module';


@NgModule({
  declarations: [SimpleSaleComponent],
  imports: [
    CommonModule,
    LoadProductsModule,
    NgSelectModule,
    ReactiveComponentModule,
    AppLoadingBubbleModule,
    ReactiveFormsModule,
    AppInputModule,
    AppValidateSubmitButtonModule
  ]
})
export class SimpleSaleModule {
}
