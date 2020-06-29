import { createAction, props } from '@ngrx/store';

export const loadCurrencys = createAction(
  '[Currency] Load Currencys'
);

export const loadCurrencysSuccess = createAction(
  '[Currency] Load Currencys Success',
  props<{ data: any }>()
);

export const loadCurrencysFailure = createAction(
  '[Currency] Load Currencys Failure',
  props<{ error: any }>()
);
