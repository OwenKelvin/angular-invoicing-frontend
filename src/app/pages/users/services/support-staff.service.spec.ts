import { TestBed } from '@angular/core/testing';

import { SupportStaffService } from './support-staff.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';

describe('SupportStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
    ],
  }));

  it('should be created', () => {
    const service: SupportStaffService = TestBed.inject(SupportStaffService);
    expect(service).toBeTruthy();
  });
});
