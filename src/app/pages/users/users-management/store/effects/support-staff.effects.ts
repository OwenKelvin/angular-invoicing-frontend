import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as SupportStaffActions from '../actions/support-staff.actions';
import { SupportStaffService } from '../../../services/support-staff.service';

@Injectable()
export class SupportStaffEffects {
  constructor(
    private actions$: Actions,
    private staffService: SupportStaffService
  ) { }
  loadSupportStaffType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SupportStaffActions.loadSupportStaffs),
      concatMap(() =>
        this.staffService.staffTypes().pipe(
          map(data => SupportStaffActions.loadSupportStaffsSuccess({ data })),
          catchError(error => of(SupportStaffActions.loadSupportStaffsFailure({ error }))))
      )
    );
  });

  loadSupportStaffWithIdUpdate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SupportStaffActions.loadSupportStaffsUpdate),
      concatMap((action) =>
        this.staffService.update({ id: action.id, data: action.data }).pipe(
          map(data => SupportStaffActions.loadSupportStaffsUpdateSuccess({ data })),
          catchError(error => of(SupportStaffActions.loadSupportStaffsFailure({ error }))))
      )
    );
  });

  loadStaffById$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SupportStaffActions.loadSupportStaffById),
      concatMap((action) =>
        this.staffService.getSupportStaffById(action.data.id).pipe(
          map(data => SupportStaffActions.loadSupportStaffByIdSuccess({ data })),
          catchError(error => of(SupportStaffActions.loadSupportStaffByIdFailure({ error }))))
      )
    );
  });
}
