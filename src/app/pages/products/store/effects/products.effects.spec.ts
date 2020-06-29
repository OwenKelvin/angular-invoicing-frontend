import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ProductsEffects } from './products.effects';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsEffects', () => {
  const actions$: Observable<any> = of({ });
  let effects: ProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule,
      ],
      providers: [
        reducerProvider,
        ProductsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<ProductsEffects>(ProductsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
