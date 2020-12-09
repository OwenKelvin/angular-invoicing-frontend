import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../../../shared/services/products.service';
import {combineLatest, Observable} from 'rxjs';
import {IProduct} from '../../../shared/interfaces/products.interface';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchasesReportService {
  purchases$: (q: string) => Observable<any[]> = (q) =>
    this.http.get<any[]>(`api/reports/purchases/?${q}`)

  constructor(
    private http: HttpClient,
  ) {
  }

  transformPurchases = (allData: any[]) => allData.map(data => ({
    id: data.id,
    productId: data.product_id,
    productName: data.product_name,
    sellerId: data.seller_id,
    sellerName: data.seller_name,
    quantity: data.quantity,
    unitPrice: data.unit_price,
    purchaseDate: data.purchase_date,
    total: data.quantity * data.unit_price
  }))

  getReport({startDate, endDate}: { startDate: string, endDate: string }): Observable<any> {

    const queryStringParams = require('querystring').stringify({
      start_date: startDate,
      end_date: endDate
    });
    return this.purchases$(queryStringParams).pipe(map(this.transformPurchases));
  }
}
