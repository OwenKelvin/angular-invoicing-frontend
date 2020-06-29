import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { deleteAllCartItems } from '../store/actions/cart.actions';
import { getDateMixin } from 'src/app/mixins/get-date.mixin';

interface ISaleSave {
  products: any[];
  discount: { type: 'percentage' | 'absolute', amount: number; };
  payment: {
    method: string;
    amountReceived?: number,
    phoneNumber?: number;
  };
}
@Injectable({
  providedIn: 'root'
})
export class SaleService extends getDateMixin() {
  
  updateProductSold: (arg: { id: number; data: any; }) => Observable<any> = ({id, data}) =>
    this.http.post<any>(`${this.url}/${id}`, { ...data, _method: 'PATCH' }).pipe(
      map(({ data: res }) => res),
      tap((res) => this.updateSoldProductSubject$.next(res)),
      map(this.mappedSoldProduct),
    );
  deleteSoldProductSubject$ = new Subject<number>();
  deleteSoldProductAction$ = this.deleteSoldProductSubject$.asObservable();
  updateSoldProductSubject$ = new Subject<any>();
  updateSoldProductAction$ = this.updateSoldProductSubject$.asObservable();

  getProductSoldWithId: (id: number) => Observable<any> = id =>
    this.http.get<any>(`${this.url}/${id}`).pipe(
      map(this.mappedSoldProduct)
    );
  url = 'api/sales';
  deleteProductSoldWithId = (id: number) => this.http.delete(`${this.url}/${id}`).pipe(
    tap(() => this.deleteSoldProductSubject$.next(id))
  );
  getSoldProductsForDate$: (date: Date) => Observable<any[]> = (date: Date) =>
    this.http.get<string[]>(`${this.url}/?sale_date=${this.getDate(date)}`).pipe(
      map(this.mappedSoldProducts)
    );
  mappedSoldProduct: (item: any) => any = item => ({
    ...item,
    saleId: item.sale_id,
    productId: item.product_id,
    productName: item.product_name,
    sellingPrice: item.selling_price,
    price: item.fifo_purchase_price,
    sellingPriceCurrency: item.selling_price_currency,
    time: (item.created_at as string).substr(11, 8)
  });
  mappedSoldProducts: (res: any[]) => any[] = (res: any[]) => res.map(this.mappedSoldProduct);

  saleDates$: Observable<string[]> = this.http.get<string[]>(`${this.url}/?sale_dates=${true}`);
  saveSale({ discount, products, payment }: ISaleSave): Observable<any> {
    const submitData = {
      discount: {
        discount_type: discount.type,
        discount_amount: discount.amount
      },
      products: products.map(item => {
        return {
          product_id: item.productId,
          selling_price_currency: item.saleCurrency,
          selling_price: item.salePrice,
          quantity: item.saleQuantity,
        };
      }),
      payment: {
        ...payment,
        phone: payment.phoneNumber,
        amount: payment.amountReceived
      }
    };
    return this.http.post(this.url, submitData).pipe(
      tap(() => this.store.dispatch(deleteAllCartItems()))
    );
  }

  constructor(private http: HttpClient, private store: Store) { super(); }
}
