import { Action, createReducer, on } from '@ngrx/store';
import * as SaleActions from '../actions/sale.actions';

export const saleFeatureKey = 'sale';

export interface State {
  id?: any
}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SaleActions.loadSales, state => state),
  on(SaleActions.loadSalesSuccess, (state, _action) => state),
  on(SaleActions.loadSalesFailure, (state, _action) => state),

);

