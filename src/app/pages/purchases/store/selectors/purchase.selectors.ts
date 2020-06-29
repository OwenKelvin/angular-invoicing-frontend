import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPurchase from '../reducers/purchase.reducer';

export const selectPurchaseState = createFeatureSelector<fromPurchase.State>(
  fromPurchase.purchaseFeatureKey
);

export const selectAllPurchases = createSelector(
  selectPurchaseState,
  purchases => Object.values(purchases || { })?.filter(purchase => purchase.id !== 0)
);

export const selectPurchaseById = ({ id }: { id: number; }) => createSelector(
  selectPurchaseState,
  purchases => purchases[id]
);
