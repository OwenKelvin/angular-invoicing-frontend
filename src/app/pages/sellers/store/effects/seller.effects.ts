import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SellerActions from '../actions/seller.actions';
import { SellerService } from '../../shared/services/seller.service';



@Injectable()
export class SellerEffects {

  loadSellers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SellerActions.loadSellers),
      concatMap(() =>

        this.sellerService.sellers$.pipe(
          map(data => SellerActions.loadSellersSuccess({ data })),
          catchError(error => of(SellerActions.loadSellersFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private sellerService: SellerService) {}

}
