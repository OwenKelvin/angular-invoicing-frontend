import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSale from '../store/reducers/sale.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SaleEffects } from '../store/effects/sale.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSale.saleFeatureKey, fromSale.reducer),
    EffectsModule.forFeature([SaleEffects])
  ]
})
export class LoadSalesModule { }
