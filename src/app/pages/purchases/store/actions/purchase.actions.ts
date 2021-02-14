import { createAction, props } from '@ngrx/store';

export const loadPurchases = createAction(
  '[Purchase] Load Purchases'
);

export const loadPurchasesSuccess = createAction(
  '[Purchase] Load Purchases Success',
  props<{ data: any }>()
);

export const loadPurchasesFailure = createAction(
  '[Purchase] Load Purchases Failure',
  props<{ error: any }>()
);

export const deletePurchase = createAction(
  '[Purchase] Delete Purchase',
  props<{ data: {id: number} }>()
);

