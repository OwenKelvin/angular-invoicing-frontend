import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { SellerEffects } from './seller.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('SellerEffects', () => {
  const actions$: Observable<any> = of({ });
  let effects: SellerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      providers: [
        reducerProvider,
        SellerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<SellerEffects>(SellerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
