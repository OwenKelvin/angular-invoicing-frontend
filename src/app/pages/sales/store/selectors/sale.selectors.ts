import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSale from '../reducers/sale.reducer';

export const selectSaleState = createFeatureSelector<fromSale.State>(
  fromSale.saleFeatureKey
);
