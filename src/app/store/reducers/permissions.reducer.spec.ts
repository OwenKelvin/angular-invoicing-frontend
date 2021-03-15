import {initialState, reducer} from './permissions.reducer';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN} from './index';
import {reducer as sellerReducer} from '../../pages/sellers/store/reducers/seller.reducer';

describe('Permissions Reducer', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('sellers', sellerReducer)
      ]
    });
  }));
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
