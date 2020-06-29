import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { PurchaseEffects } from './purchase.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('PurchaseEffects', () => {
  const actions$: Observable<any> = of({ });
  let effects: PurchaseEffects;

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
        PurchaseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<PurchaseEffects>(PurchaseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
