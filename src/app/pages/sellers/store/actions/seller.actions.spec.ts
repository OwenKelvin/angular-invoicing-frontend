import * as fromSeller from './seller.actions';

describe('loadSellers', () => {
  it('should return an action', () => {
    expect(fromSeller.loadSellers().type).toBe('[Seller] Load Sellers');
  });
});
