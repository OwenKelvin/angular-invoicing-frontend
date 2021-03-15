import * as fromSale from '../reducers/sale.reducer';
import {selectSaleState} from './sale.selectors';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppLinksModule} from '../../../../shared/components/links/links.module';

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    imports: [
      AppLinksModule
    ]
  });
}));
describe('Sale Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSaleState({
      [fromSale.saleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
