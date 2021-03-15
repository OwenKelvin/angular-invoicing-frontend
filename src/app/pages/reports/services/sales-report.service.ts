import {Injectable} from '@angular/core';
import {Observable, combineLatest} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ProductsService} from 'src/app/shared/services/products.service';
import {IProduct} from 'src/app/shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {

  products$: Observable<IProduct[]> = this.productService.loadProducts$;

  constructor(
    private http: HttpClient,
    private productService: ProductsService
  ) {
  }

  getReport(data: any): Observable<any> {

    const queryStringParams = require('querystring').stringify({
      start_date: data.startDate,
      end_date: data.endDate
    });

    const sales$: Observable<any[]> = this.http.get<any[]>(`api/reports/sales?${queryStringParams}`)
      .pipe(
        map(res => res.map(item => ({
          quantity: item.quantity,
          productId: item.product_id,
          sellingPrice: item.selling_price,
          fifoPrice: item.fifo_purchase_price,
          sellingPriceCurrency: item.selling_price_currency,
          date: (new Date(item.created_at)).toISOString().substr(0, 10),
          time: (new Date(item.created_at)).toISOString().substr(11, 8)
        })))
      );

    return combineLatest([this.products$, sales$]).pipe(
      map(([products, sales]) => sales.map(sale => ({
          ...sale,
          productName: products.find(({id}) => sale.productId === id)?.name,
          definedPurchasePrice: products.find(({id}) => sale.productId === id)?.buyingPrice
        }))
      )
    );
  }
}
