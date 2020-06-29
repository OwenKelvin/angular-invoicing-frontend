import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrency from '../reducers/currency.reducer';

export const selectCurrencyState = createFeatureSelector<string[]>(
  fromCurrency.currencyFeatureKey
);
