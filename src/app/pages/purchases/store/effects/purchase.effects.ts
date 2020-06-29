import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PurchaseActions from '../actions/purchase.actions';
import { PurchaseService } from '../../shared/services/purchase.service';



@Injectable()
export class PurchaseEffects {

  loadPurchases$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PurchaseActions.loadPurchases),
      concatMap(() =>
        this.purchaseService.purchases$.pipe(
          map(data => PurchaseActions.loadPurchasesSuccess({ data })),
          catchError(error => of(PurchaseActions.loadPurchasesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private purchaseService: PurchaseService) {}

}
