import {Component, Input, OnInit} from '@angular/core';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {ProductsService} from '../../../shared/services/products.service';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {IBarPlot} from '../horizontal-stacked-bar-plot/horizontal-stacked-bar-plot.component';

@Component({
  selector: 'app-daily-profit-per-product',
  templateUrl: './daily-profit-per-product.component.html',
  styleUrls: ['./daily-profit-per-product.component.less']
})
export class DailyProfitPerProductComponent implements OnInit{
  @Input() from = '';
  @Input() to = '';
  dateSubject$ = new BehaviorSubject({startDate: '', endDate: ''});
  constructor(private salesReportService: SalesReportService, private productService: ProductsService) {
  }

  monthsSale$: Observable<IBarPlot[]> = combineLatest([
    // this.salesReportService.getReport({}),
    this.dateSubject$.pipe(
      switchMap(range => this.salesReportService.getReport(range) )
    ),
    this.productService.loadProducts$
  ]).pipe(
    map(([sales, products]) => Object.entries(sales.reduce((prev: any, next: any) => {
        const currentProfit = prev[next.productId] ? prev[next.productId] : 0;
        return {...prev, [next.productId]: currentProfit + (next.quantity * (next.sellingPrice - next.fifoPrice))};
      }, {})).map(([productId, value]: [string, number]) => ({
        name: products.find(({id}) => Number(productId) === id)?.name as string,
        value
      })).sort(({value: a}, {value: b}) => a > b ? -1 : 1)
      .slice(0, 15)
    ),
    tap(console.log)
  );
  ngOnInit() {
    this.dateSubject$.next({ startDate: this.from, endDate: this.to });
  }
}
