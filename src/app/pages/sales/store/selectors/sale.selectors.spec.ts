import * as fromSale from '../reducers/sale.reducer';
import { selectSaleState } from './sale.selectors';

describe('Sale Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSaleState({
      [fromSale.saleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
