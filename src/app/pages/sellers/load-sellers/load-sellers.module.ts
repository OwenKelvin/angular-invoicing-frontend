import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SellerEffects } from '../store/effects/seller.effects';
import * as fromSeller from '../store/reducers/seller.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSeller.sellerFeatureKey, fromSeller.reducer),
    EffectsModule.forFeature([SellerEffects]),
  ]
})
export class LoadSellersModule { }
