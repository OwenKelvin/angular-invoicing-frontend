import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from '../actions/products.actions';
import { IProduct } from 'src/app/shared/interfaces/products.interface';

export const productsFeatureKey = 'products';

export interface State {
  [id: number]: IProduct
}

export const initialState: State = {
  0: {
    id: 0,
    name: '',
    buyingPrice: 0,
    buyingPriceCurrency: 'KES',
    sellingPrice: 0,
    sellingPriceCurrency: 'KES'
  }
};


export const reducer = createReducer(
  initialState,

  on(ProductsActions.loadProducts, state => state),
  on(ProductsActions.loadProductsSuccess, (state, action) => {
    const states: State = {};
    action.data.forEach((element: IProduct) => {
      states[element.id] = element
    });
    return { ...state, ...states};
  }),
  on(ProductsActions.loadProductsFailure, (state, _action) => state),

  on(ProductsActions.deleteProduct, (state, action) => {
    const newState = { ...state };
    delete newState[action.data.id];
    return newState;
  }),


);

