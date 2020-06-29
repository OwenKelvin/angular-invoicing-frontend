import { TestBed } from '@angular/core/testing';

import { LinkService } from './link.service';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LinkService', () => {
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
      reducerProvider
    ]
  }));

  it('should be created', () => {
    const service: LinkService = TestBed.inject(LinkService);
    expect(service).toBeTruthy();
  });
});
