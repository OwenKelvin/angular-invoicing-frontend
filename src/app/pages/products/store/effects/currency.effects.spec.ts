import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { CurrencyEffects } from './currency.effects';
import { StoreModule } from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers, reducers} from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurrencyEffects', () => {
  const actions$: Observable<any> = of({ });
  let effects: CurrencyEffects;

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
        StoreModule.forFeature('app',  reducers)
      ],
      providers: [
        reducerProvider,
        CurrencyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<CurrencyEffects>(CurrencyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
