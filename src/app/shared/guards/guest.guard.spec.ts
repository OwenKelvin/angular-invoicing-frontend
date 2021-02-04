import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { GuestGuard } from './guest.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from './../../store/reducers';
import { AuthenticationService } from '../services/authentication.service';

describe('GuestGuard', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }), ],
      providers: [GuestGuard, reducerProvider]
    });
    TestBed.compileComponents();
  }));

  it('should create auth guard', inject([GuestGuard, Store], (guard: GuestGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if no current user ',
    inject([Store, AuthenticationService], (store: Store<AppState>, authenticationServive: AuthenticationService) => {
    const next = jasmine.createSpyObj({ queryParams: '' });
    const state = jasmine.createSpyObj({ url: '' });
    const router = jasmine.createSpyObj({ navigate: () => { } });
    // const authenticationServive = jasmine.createSpyObj({
    //   currentUserValue: false
    // });
    spyOnProperty(authenticationServive, 'currentUserValue').and.returnValue(false);
    const guestGuard = new GuestGuard(store, router, authenticationServive);
    expect(guestGuard.canActivate(next, state)).toBeTruthy();
  }));
  it(
    'should return false if current user ',
    inject(
      [AuthenticationService, Store],
      (authenticationServive: AuthenticationService, store: Store<AppState>) => {
        const next = jasmine.createSpyObj({ queryParams: '' });
        const state = jasmine.createSpyObj({ url: '' });
        const router = jasmine.createSpyObj({ navigate: () => { } });
        const auth: AuthenticationService = Object.create(authenticationServive, {
          currentUserValue: { value: true }
        });
        const guestGuard = new GuestGuard(store, router, auth);
        expect(guestGuard.canActivate(next, state)).toBeFalsy();
      })
  );
});
