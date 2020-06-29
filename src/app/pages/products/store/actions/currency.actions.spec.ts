import * as fromCurrency from './currency.actions';

describe('loadCurrencys', () => {
  it('should return an action', () => {
    expect(fromCurrency.loadCurrencys().type).toBe('[Currency] Load Currencys');
  });
});
