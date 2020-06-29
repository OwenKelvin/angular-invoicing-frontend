import * as fromSale from './sale.actions';

describe('loadSales', () => {
  it('should return an action', () => {
    expect(fromSale.loadSales().type).toBe('[Sale] Load Sales');
  });
});
