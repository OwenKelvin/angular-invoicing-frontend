import {createReducer, on} from '@ngrx/store';
import * as PurchaseActions from '../actions/purchase.actions';
import {IPurchase} from '../../shared/interfaces/purchase.interface';

export const purchaseFeatureKey = 'purchases';

export interface State {
  [id: number]: IPurchase;
}

export const initialState: State = {
  0: {
    id: 0,
    productId: null,
    productName: '',
    quantityPurchased: null,
    unitPrice: null,
    sellerId: null,
    sellerName: '',
    purchaseCurrency: 'KES',
    purchaseDate: (new Date()).toISOString().substring(0, 10)
  },
};


export const reducer = createReducer(
  initialState,

  on(PurchaseActions.loadPurchases, state => state),
  on(PurchaseActions.loadPurchasesSuccess, (state, action) => {
    const states: State = {};
    action.data.forEach((element: IPurchase) => {
      states[element.id] = element;
    });
    return {...state, ...states};
  }),
  on(PurchaseActions.loadPurchasesFailure, (state) => state),
  on(PurchaseActions.deletePurchase, (state, action) => {
    const newState = {...state};
    delete newState[action.data.id];
    return newState;
  }),
);

