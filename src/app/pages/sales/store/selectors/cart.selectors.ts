import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.State[]>(
  fromCart.cartFeatureKey
);

export const selectTotalItemsInCart = createSelector(
  selectCartState,
  state => state?.length
);

export const selectTotalCartPrice = createSelector(
  selectCartState,
  cart => cart.reduce((a, b) => Number(b.salePrice) * Number(b.saleQuantity) + a, 0)
);