import { createAction, props } from '@ngrx/store';

export const loadCartsSuccess = createAction(
  '[Cart] Load Carts Success',
  props<{ data: any }>()
);

export const changeCartQuantity = createAction(
  '[Cart] Change Quantity',
  props<{ data: { productId: number, changeBy: number } }>()
);

export const deleteCartItem = createAction(
  '[Cart] Delete Item',
  props<{ data: { productId: number } }>()
);

export const deleteAllCartItems = createAction(
  '[Cart] Delete All Cart Items'
);

