import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCurrencyState } from 'src/app/pages/products/store/selectors/currency.selectors';
import { tap, catchError, map } from 'rxjs/operators';
import { loadCurrencys } from 'src/app/pages/products/store/actions/currency.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private store: Store,
    private http: HttpClient
  ) { }

  loadCurrencies$: Observable<any> = this.store.pipe(
    select(selectCurrencyState),
    tap(({ length }) => length < 1 ? this.store.dispatch(loadCurrencys()) : '')
  );

  currencies$: Observable<string[]> = this.http.get('api/currencies').pipe(
    map((res: any[]) => res.map(item => item.name )),
    catchError(() => of([
      'KES', 'GBP', 'EUR', 'USD', 'INR', 'ZAR', 'AUD'
    ]))
  );
}
