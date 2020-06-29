import * as fromSeller from '../reducers/seller.reducer';
import { selectSellerState } from './seller.selectors';

describe('Seller Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSellerState({
      [fromSeller.sellerFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
