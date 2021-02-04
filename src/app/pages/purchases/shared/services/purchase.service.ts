import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPurchase } from '../interfaces/purchase.interface';
import { loadPurchases } from '../../store/actions/purchase.actions';
import { tap, map } from 'rxjs/operators';
import { selectAllPurchases } from '../../store/selectors/purchase.selectors';
import { getDateMixin } from 'src/app/mixins/get-date.mixin';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends getDateMixin() {
  constructor(private store: Store, private http: HttpClient) { super(); }

  url = 'api/purchases';
  purchaseDates$: Observable<string[]> = this.http.get<string[]>(`${this.url}/?purchase_dates=${true}`);
  purchasesLoaded = false;

  purchases$: Observable<IPurchase[]> = this.http.get(this.url).pipe(
    map((res: any[]) => (res.map(item => ({
      id: item.id,
      productId: item.product_id,
      productName: item.product_name,
      quantityPurchased: item.quantity,
      sellerId: item.seller_id,
      sellerName: item.seller_name,
      unitPrice: item.unit_price,
      purchaseCurrency: item.currency,
      purchaseDate: item.purchase_date,
    })))),
    tap(() => this.purchasesLoaded = true)
  );

  loadPurchases$: Observable<any[]> = this.store.pipe(
    select(selectAllPurchases),
    tap(({ length }) => (length < 1 && !this.purchasesLoaded) ? this.store.dispatch(loadPurchases()) : ''),
  );
  getPurchasesForDate$: (date: Date) => Observable<IPurchase[]> = (date: Date) =>
    this.http.get<string[]>(`${this.url}/?purchase_date=${this.getDate(date)}`).pipe(
      map(this.mappedPurchases))


  mappedPurchases: (res: any[]) => IPurchase[] = (res: any[]) => res.map(item => ({
    id: item.id,
    productId: item.product_id,
    productName: item.product_name,
    quantityPurchased: item.quantity,
    sellerId: item.seller_id,
    sellerName: item.seller_name,
    unitPrice: item.unit_price,
    purchaseCurrency: item.currency,
    purchaseDate: item.purchase_date,
  }))

  deletePurchase(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  savePurchase(value: IPurchase): Observable<IPurchase> {

    let url = `${this.url}/${value.id}`;
    if (value.id === 0) {
      url = 'api/purchases';
      return this.http.post(url, {
        product_id: value.productId,
        quantity: value.quantityPurchased,
        seller_id: value.sellerId,
        unit_price: value.unitPrice,
        currency: value.purchaseCurrency,
        purchase_date: value.purchaseDate,
      }).pipe(
        map((res: any) => res.data),
        map((item: any) => ({
          id: item.id,
          productId: item.product_id,
          productName: item.product_name,
          quantityPurchased: item.quantity,
          sellerId: item.seller_id,
          sellerName: item.seller_name,
          unitPrice: item.unit_price,
          purchaseCurrency: item.currency,
          purchaseDate: item.purchase_date,
        }))
      );
    }
    return this.http.post(url, {
      _method: 'PATCH',
      product_id: value.productId,
      quantity: value.quantityPurchased,
      seller_id: value.sellerId,
      unit_price: value.unitPrice,
      currency: value.purchaseCurrency,
      purchase_date: value.purchaseDate,
    }).pipe(
      map((res: any) => res.data),
      map((item: any) => ({
        id: item.id,
        productId: item.product_id,
        productName: item.product_name,
        quantityPurchased: item.quantity,
        sellerId: item.seller_id,
        sellerName: item.seller_name,
        unitPrice: item.unit_price,
        purchaseCurrency: item.currency,
        purchaseDate: item.purchase_date,
      }))
    );
  }
}
