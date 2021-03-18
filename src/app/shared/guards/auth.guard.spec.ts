import {TestBed, inject, waitForAsync} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

describe('AuthGuard', () => {
  let router: Router;
  let authGuard: AuthGuard;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthGuard]
    });
    router = TestBed.inject(Router);
    authGuard = TestBed.inject(AuthGuard);
  }));

  it('should create auth guard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if current user ', () => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    spyOn(router, 'navigate').and.callThrough();
    spyOn(authGuard as any, 'authenticationService').and.returnValue({
      currentUserValue: true
    });
    // const authenticationService = jasmine.createSpyObj({
    //   currentUserValue: true
    // });
    // const authGuard = new AuthGuard(router, authenticationService);
    expect(authGuard.canActivate(next, state)).toBeTruthy();
  });
  it('should navigate if no current user ', inject([AuthenticationService], () => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    const routerSpy = spyOn(router, 'navigate').and.callThrough();
    spyOn(authGuard as any, 'authenticationService').and.returnValue({
      currentUserValue: false
    });
    // const auth: AuthenticationService = Object.create(authenticationServive, {
    //   currentUserValue: {value: false}
    // });
    // const authGuard = new AuthGuard(router, auth);
    authGuard.canActivate(next, state);
    expect(authGuard.canActivate(next, state)).toBeFalsy();
    expect(routerSpy).toHaveBeenCalled();
    // expect(router.navigate).toHaveBeenCalled();
  }));
});
