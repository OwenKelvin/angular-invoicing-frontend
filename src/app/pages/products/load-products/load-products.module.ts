import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../store/effects/products.effects';
import { CurrencyEffects } from '../store/effects/currency.effects';
import * as fromProducts from '../store/reducers/products.reducer';
import * as fromCurrency from '../store/reducers/currency.reducer';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductsEffects, CurrencyEffects]),
    StoreModule.forFeature(fromCurrency.currencyFeatureKey, fromCurrency.reducer),
    ReactiveComponentModule,
  ]
})
export class LoadProductsModule { }
