import * as fromSale from './sale.actions';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppToastModule} from '../../../../shared/components/toast/toast.module';
import {NetworkLoadingModule} from '../../../../shared/network-loading';
import {ErrorModule} from '../../../../shared/components/error/error.module';

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    imports: [
      AppToastModule,
      NetworkLoadingModule,
      ErrorModule
    ]
  });
}));

describe('loadSales', () => {
  it('should return an action', () => {
    expect(fromSale.loadSales().type).toBe('[Sale] Load Sales');
  });
});
