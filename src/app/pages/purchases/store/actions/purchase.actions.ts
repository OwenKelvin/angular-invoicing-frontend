import { createAction, props } from '@ngrx/store';
import {IPurchase} from '../../shared/interfaces/purchase.interface';

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

export const updatePurchase = createAction(
  '[Purchase] Delete Purchase',
  props<{ data: IPurchase }>()
);



