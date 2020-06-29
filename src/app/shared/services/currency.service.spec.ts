import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { reducerProvider, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import { StoreModule } from '@ngrx/store';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [reducerProvider],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ]
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
