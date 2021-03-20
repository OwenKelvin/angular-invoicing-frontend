import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {ProductsService} from '../../../shared/services/products.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {IBarPlot} from '../horizontal-stacked-bar-plot/horizontal-stacked-bar-plot.component';

@Component({
  selector: 'app-todays-profit-per-product',
  templateUrl: './todays-profit-per-product.component.html',
  styleUrls: ['./todays-profit-per-product.component.less']
})
export class TodaysProfitPerProductComponent implements OnChanges {
  @Input() date: Date = new Date();
  date$ = new BehaviorSubject(new Date().toISOString().substr(0, 10));

  constructor(private salesReportService: SalesReportService, private productService: ProductsService) {
  }

  todaysSale$: Observable<IBarPlot[]> = this.date$.pipe(
    mergeMap(date => combineLatest([
      this.salesReportService.getReport({startDate: date, endDate: date}),
      this.productService.loadProducts$
    ])),
    map(([sales, products]) => Object.entries(sales.reduce((prev: any, next: any) => {
        const currentProfit = prev[next.productId] ? prev[next.productId] : 0;
        return {...prev, [next.productId]: currentProfit + (next.quantity * (next.sellingPrice - next.fifoPrice))};
      }, {})).map(([productId, value]: [string, number]) => ({
        name: products.find(({id}) => Number(productId) === id)?.name as string,
        value
      })).sort(({value: a}, {value: b}) => a > b ? -1 : 1)
    )
  );
  //
  // todaysSale$: Observable<IBarPlot[]> = combineLatest([
  //   this.salesReportService.getReport({}),
  //   this.productService.loadProducts$
  // ]).pipe(
  //   map(([sales, products]) => Object.entries(sales.reduce((prev: any, next: any) => {
  //       const currentProfit = prev[next.productId] ? prev[next.productId] : 0;
  //       return {...prev, [next.productId]: currentProfit + (next.quantity * (next.sellingPrice - next.fifoPrice))};
  //     }, {})).map(([productId, value]: [string, number]) => ({
  //       name: products.find(({id}) => Number(productId) === id)?.name as string,
  //       value
  //     })).sort(({value: a}, {value: b}) => a > b ? -1 : 1)
  //   )
  // );

  ngOnChanges(change: SimpleChanges) {
    if (change.date) {
      this.date$.next(change.date.currentValue.toISOString().substr(0, 10));
    }
  }

}
