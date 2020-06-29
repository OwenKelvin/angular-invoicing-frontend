import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';

export const cartFeatureKey = 'cart';

export interface State {
  productId: number,
  saleQuantity: number,
  salePrice: number,
  unitPrice: number,
  unitPriceCurrency: string,
  saleCurrency: string;
}

export const initialState: State[] = [];

export const reducer = createReducer(
  initialState,

  on(CartActions.loadCartsSuccess, (state, action) => {


    const currentState = [...state];
    const itemsExisting = state.filter(({ productId }) => {
      return productId === action.data.productId;
    });

    const index = state.indexOf(itemsExisting[0]);
    if (index >= 0) {
      currentState[index] = {
        ...currentState[index],
        saleQuantity: Number(itemsExisting[0].saleQuantity) + Number(action.data.saleQuantity)
      };
      return currentState;
    }

    return [...currentState, action.data ]

  }),

  on(CartActions.changeCartQuantity, (state, action) => {

    const currentState = [...state];
    const itemsExisting = state.filter(({ productId }) => {
      return productId === action.data.productId;
    });

    const index = state.indexOf(itemsExisting[0]);

    currentState[index] = {
      ...currentState[index],
      saleQuantity: Math.max(Number(itemsExisting[0].saleQuantity) + Number(action.data.changeBy), 1)
    };
    return currentState;
  }),
  on(CartActions.deleteCartItem, (state, action) => {
    return state.filter(({ productId }) => {
      return productId !== action.data.productId;
    });
  }),
  on(CartActions.deleteAllCartItems, () => initialState)
);

