import * as fromCart from './cart.actions';

describe('loadCarts', () => {
  it('should return an action', () => {
    expect(fromCart.loadCartsSuccess({data: {}}).type).toBe('[Cart] Load Carts Success');
  });
});
