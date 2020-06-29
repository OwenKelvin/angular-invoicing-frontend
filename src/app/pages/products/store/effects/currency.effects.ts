import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CurrencyActions from '../actions/currency.actions';
import { CurrencyService } from 'src/app/shared/services/currency.service';



@Injectable()
export class CurrencyEffects {

  loadCurrencys$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CurrencyActions.loadCurrencys),
      concatMap(() =>
        this.currencyService.currencies$.pipe(
          map(data => CurrencyActions.loadCurrencysSuccess({ data })),
          catchError(error => of(CurrencyActions.loadCurrencysFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private currencyService: CurrencyService) {}

}
