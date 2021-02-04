import { TestBed } from '@angular/core/testing';

import { SalesReportService } from './sales-report.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { of } from 'rxjs';

describe('SalesReportService', () => {
  let service: SalesReportService;

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
        {
          provide: Store,
          useValue: {
            pipe: () => of([]),
            dispatch: () => {}
          }
        }
      ],
    });
    service = TestBed.inject(SalesReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
