import * as fromCurrency from '../reducers/currency.reducer';
import {selectCurrencyState} from './currency.selectors';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppPrintModule} from '../../../../shared/print/print.module';

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      AppPrintModule
    ]
  });
}));
describe('Currency Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCurrencyState({
      [fromCurrency.currencyFeatureKey]: ['KES']
    });

    expect(result).toEqual(['KES']);
  });
});
