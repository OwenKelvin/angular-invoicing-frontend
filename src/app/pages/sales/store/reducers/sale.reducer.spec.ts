import {reducer, initialState} from './sale.reducer';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {FooterComponent} from '../../../../shared/components/footer/footer.component';
import {reducer as productReducer} from '../../../products/store/reducers/products.reducer';

describe('Sale Reducer', () => {
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
        StoreModule.forFeature('products', productReducer)
      ],
      declarations: [FooterComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
