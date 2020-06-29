import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSeller from '../reducers/seller.reducer';

export const selectSellerState = createFeatureSelector<fromSeller.State>(
  fromSeller.sellerFeatureKey
);


export const selectAllSellers = createSelector(
  selectSellerState,
  sellers => Object.values(sellers || { })?.filter(seller => seller.id !== 0)
);

export const selectsellerById = ({ id }: { id: number; }) => createSelector(
  selectSellerState,
  sellers => sellers[id]
);
