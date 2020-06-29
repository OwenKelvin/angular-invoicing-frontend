import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SaleActions from '../actions/sale.actions';



@Injectable()
export class SaleEffects {

  loadSales$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SaleActions.loadSales),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SaleActions.loadSalesSuccess({ data })),
          catchError(error => of(SaleActions.loadSalesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
