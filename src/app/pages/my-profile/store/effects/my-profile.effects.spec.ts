import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { MyProfileEffects } from './my-profile.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('MyProfileEffects', () => {
  const actions$: Observable<any> = of({ });
  let effects: MyProfileEffects;

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
        HttpClientTestingModule, RouterTestingModule],
      providers: [
        reducerProvider,
        MyProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<MyProfileEffects>(MyProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
