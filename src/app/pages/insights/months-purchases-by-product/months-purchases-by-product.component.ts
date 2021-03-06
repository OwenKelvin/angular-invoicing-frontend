import {Component, Input, OnInit} from '@angular/core';
import {PurchasesReportService} from '../../reports/services/purchases-report.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {IBarPlot} from '../bar-plot/bar-plot.component';

@Component({
  selector: 'app-months-purchases-by-product',
  templateUrl: './months-purchases-by-product.component.html',
  styleUrls: ['./months-purchases-by-product.component.less']
})
export class MonthsPurchasesByProductComponent implements OnInit {
  @Input() from = '';
  @Input() to = '';
  dateRanges$ = new BehaviorSubject<{ startDate: string, endDate: string }>({startDate: '', endDate: ''});
  purchases$: Observable<IBarPlot[]> = combineLatest([this.dateRanges$.asObservable()]).pipe(
    map(([dateRanges]) => dateRanges),
    mergeMap(({startDate, endDate}) => this.purchasesReportService.getReport({startDate, endDate})
    ),
    map((sales: any[]) => Object.values(sales.reduce(
      (prev, next) => {
        const currentPurchase = prev[next.productId] ? prev[next.productId] : { name: next.productName, value: 0};
        return {...prev, [next.productId]: { ...currentPurchase, value: next.total + currentPurchase.value}};
      }, {}
    )))
  );

  constructor(private purchasesReportService: PurchasesReportService) {
  }

  ngOnInit(): void {
    this.dateRanges$.next({startDate: this.from, endDate: this.to});
  }

}
