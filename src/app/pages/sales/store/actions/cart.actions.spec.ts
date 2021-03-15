import * as fromCart from './cart.actions';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    imports: [BsDatepickerModule.forRoot()]
  });
}));
describe('loadCarts', () => {
  it('should return an action', () => {
    expect(fromCart.loadCartsSuccess({data: {}}).type).toBe('[Cart] Load Carts Success');
  });
});
