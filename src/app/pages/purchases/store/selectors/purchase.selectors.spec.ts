import * as fromPurchase from '../reducers/purchase.reducer';
import { selectPurchaseState } from './purchase.selectors';

describe('Purchase Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPurchaseState({
      [fromPurchase.purchaseFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
