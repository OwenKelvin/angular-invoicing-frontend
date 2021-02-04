import { Action, createReducer, on } from '@ngrx/store';
import * as SaleActions from '../actions/sale.actions';

export const saleFeatureKey = 'sale';

export interface State {
  id?: any;
}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SaleActions.loadSales, state => state),
  on(SaleActions.loadSalesSuccess, (state) => state),
  on(SaleActions.loadSalesFailure, (state) => state),

);

