import * as fromCart from '../reducers/cart.reducer';
import { selectCartState } from './cart.selectors';

describe('Cart Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCartState({
      [fromCart.cartFeatureKey]: fromCart.initialState
    });

    expect(result).toEqual(fromCart.initialState);
  });
});
