import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import * as MyProfileActions from '../actions/my-profile.actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { initialState } from '../reducers/my-profile.reducer';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';



@Injectable()
export class MyProfileEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  loadMyProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyProfileActions.loadMyProfiles),
      concatMap(() =>
        this.authService.currentUserProfile$.pipe(
          map(data => MyProfileActions.loadMyProfilesSuccess({ data })),
          catchError(error => {
            this.authService.logout();
            return throwError(error);
          }),
          catchError(error => of(MyProfileActions.loadMyProfilesFailure({ error }))))
      )
    )
  );

  myProfileLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyProfileActions.myProfileLogout),
      exhaustMap(() => this.authService.logout()),
      map(() => MyProfileActions.loadMyProfilesSuccess({ data: initialState })),
      tap(() => this.router.navigate(['/']))
    )
  );

}
