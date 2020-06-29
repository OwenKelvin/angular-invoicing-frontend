import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProductsActions from '../actions/products.actions';
import { ProductsService } from 'src/app/shared/services/products.service';



@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions, private productsService: ProductsService) { }

  loadProductss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductsActions.loadProducts),
      concatMap(() =>
        this.productsService.products$.pipe(
          map(data => ProductsActions.loadProductsSuccess({ data })),
          catchError(error => of(ProductsActions.loadProductsFailure({ error }))))
      )
    );
  });

}
