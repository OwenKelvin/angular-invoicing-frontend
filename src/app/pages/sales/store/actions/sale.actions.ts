import { createAction, props } from '@ngrx/store';

export const loadSales = createAction(
  '[Sale] Load Sales'
);

export const loadSalesSuccess = createAction(
  '[Sale] Load Sales Success',
  props<{ data: any }>()
);

export const loadSalesFailure = createAction(
  '[Sale] Load Sales Failure',
  props<{ error: any }>()
);
