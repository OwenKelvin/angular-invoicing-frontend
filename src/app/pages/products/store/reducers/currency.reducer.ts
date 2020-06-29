import { Action, createReducer, on } from '@ngrx/store';
import * as CurrencyActions from '../actions/currency.actions';

export const currencyFeatureKey = 'currency';

// export interface State {

// }

export const initialState: string[] = [];


export const reducer = createReducer(
  initialState,

  on(CurrencyActions.loadCurrencys, state => state),
  on(CurrencyActions.loadCurrencysSuccess, (state, action) => {
    const uniqueCurrency = new Set([...state, ...action.data])
    return [...uniqueCurrency];
  }),
  on(CurrencyActions.loadCurrencysFailure, (state, _action) => state),

);

