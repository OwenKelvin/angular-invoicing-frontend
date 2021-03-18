import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSale from '../store/reducers/sale.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SaleEffects } from '../store/effects/sale.effects';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSale.saleFeatureKey, fromSale.reducer),
    EffectsModule.forFeature([SaleEffects]),
    ReactiveComponentModule
  ]
})
export class LoadSalesModule { }
