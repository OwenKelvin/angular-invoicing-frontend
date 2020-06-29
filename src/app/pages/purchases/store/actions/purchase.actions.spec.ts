import * as fromPurchase from './purchase.actions';

describe('loadPurchases', () => {
  it('should return an action', () => {
    expect(fromPurchase.loadPurchases().type).toBe('[Purchase] Load Purchases');
  });
});
