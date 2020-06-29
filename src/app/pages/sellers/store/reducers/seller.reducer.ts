import { Action, createReducer, on } from '@ngrx/store';
import * as SellerActions from '../actions/seller.actions';
import { ISeller } from '../../shared/interfaces/seller.interface';

export const sellerFeatureKey = 'sellers';

export interface State {
  [id: number]: ISeller;
}

export const initialState: State = {
  0: {
    id: 0,
    name: '',
    description: ''
  }
};


export const reducer = createReducer(
  initialState,

  on(SellerActions.loadSellers, state => state),
  on(SellerActions.loadSellersSuccess, (state, action) => {
    const states: State = {};
    action.data.forEach((element: ISeller) => {
      states[element.id] = element;
    });
    return { ...state, ...states };
  }),
  on(SellerActions.loadSellersFailure, (state, _action) => state),

  on(SellerActions.deleteSeller, (state, action) => {
    const newState = { ...state };
    delete newState[action.data.id];
    return newState;
  }),

);

