import {Component} from '@angular/core';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {ProductsService} from '../../../shared/services/products.service';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IBarPlot} from '../horizontal-stacked-bar-plot/horizontal-stacked-bar-plot.component';

@Component({
  selector: 'app-todays-profit-per-product',
  templateUrl: './todays-profit-per-product.component.html',
  styleUrls: ['./todays-profit-per-product.component.less']
})
export class TodaysProfitPerProductComponent {

  constructor(private salesReportService: SalesReportService, private productService: ProductsService) {
  }

  todaysSale$: Observable<IBarPlot[]> = combineLatest([
    this.salesReportService.getReport({}),
    this.productService.loadProducts$
  ]).pipe(
    map(([sales, products]) => Object.entries(sales.reduce((prev: any, next: any) => {
        const currentProfit = prev[next.productId] ? prev[next.productId] : 0;
        return {...prev, [next.productId]: currentProfit + (next.quantity * (next.sellingPrice - next.fifoPrice))};
      }, {})).map(([productId, value]: [string, number]) => ({
        name: products.find(({id}) => Number(productId) === id)?.name as string,
        value
      })).sort(({value: a}, {value: b}) => a > b ? -1 : 1)
    )
  );

}
