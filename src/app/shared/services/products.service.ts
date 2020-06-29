import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectAllProducts } from 'src/app/pages/products/store/selectors/products.selectors';
import { tap, map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { loadProducts } from 'src/app/pages/products/store/actions/products.actions';
import { IProduct } from '../interfaces/products.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private store: Store<AppState>, private http: HttpClient) { }

  products$: Observable<IProduct[]> = this.http.get('api/products').pipe(
    map((res: any[]) => (res.map(item => ({
      id: item.id,
      name: item.name,
      sellingPrice: item.selling_price,
      buyingPrice: item.buying_price,
      buyingPriceCurrency: item.buying_price_currency,
      sellingPriceCurrency: item.selling_price_currency,
      maxAmountCheck: item.min,
      minAmountCheck: item.max
    })))),
    shareReplay(1)
  )

  productsStockCount$: Observable<any[]> = this.http.get('api/products?stock_count=true').pipe(
    map((res: any[]) => (res.map(item => ({
      id: item.id,
      name: item.name,
      count: item.count,
      purchases: item.purchases,
      min: item.min,
      max: item.max
    }))))
  )


  loadProducts$: Observable<any> = this.store.pipe(
    select(selectAllProducts),
    tap(({ length }) => length < 1 ? this.store.dispatch(loadProducts()) : ''),
  );

  deleteProduct(id: number) {
    return this.http.delete(`api/products/${id}`);
  }

  saveProduct(value: IProduct): Observable<IProduct> {
    let url = `api/products/${value.id}`;
    if (value.id === 0) {
      url = 'api/products';
      return this.http.post(url, {
        name: value.name,
        buying_price: value.buyingPrice,
        selling_price: value.sellingPrice,
        selling_price_currency: value.sellingPriceCurrency,
        buying_price_currency: value.buyingPriceCurrency,
        max: value.maxAmountCheck,
        min: value.minAmountCheck
      }).pipe(
        map((res: any) => res.data),
        map((item: any) => ({
          id: item.id,
          name: item.name,
          sellingPrice: item.selling_price,
          buyingPrice: item.buying_price,
          buyingPriceCurrency: item.buying_price_currency,
          sellingPriceCurrency: item.selling_price_currency,
          max: value.maxAmountCheck,
          min: value.minAmountCheck
        }))
      )
    }
    return this.http.post(url, {
      _method: 'PATCH',
      name: value.name,
      buying_price: value.buyingPrice,
      selling_price: value.sellingPrice,
      selling_price_currency: value.sellingPriceCurrency,
      buying_price_currency: value.buyingPriceCurrency
    }).pipe(
      map((res: any) => res.data),
      map((item: any) => ({
        id: item.id,
        name: item.name,
        sellingPrice: item.selling_price,
        buyingPrice: item.buying_price,
        buyingPriceCurrency: item.buying_price_currency,
        sellingPriceCurrency: item.selling_price_currency,
      }))
    )
  }
}
