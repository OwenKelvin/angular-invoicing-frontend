import { createAction, props } from '@ngrx/store';

export const loadSellers = createAction(
  '[Seller] Load Sellers'
);

export const loadSellersSuccess = createAction(
  '[Seller] Load Sellers Success',
  props<{ data: any; }>()
);

export const loadSellersFailure = createAction(
  '[Seller] Load Sellers Failure',
  props<{ error: any; }>()
);

export const deleteSeller = createAction(
  '[Seller] Delete Seller',
  props<{ data: { id: number; }; }>()
);
