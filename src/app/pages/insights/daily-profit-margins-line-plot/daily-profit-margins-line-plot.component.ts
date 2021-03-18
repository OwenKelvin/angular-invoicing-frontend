import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {map, mergeMap} from 'rxjs/operators';
import {ILinePlot} from '../line-plot/line-plot.component';

@Component({
  selector: 'app-daily-profit-margins-line-plot',
  templateUrl: './daily-profit-margins-line-plot.component.html',
  styleUrls: ['./daily-profit-margins-line-plot.component.less']
})
export class DailyProfitMarginsLinePlotComponent implements OnInit {
  @Input() from = '';
  @Input() to = '';
  dateRanges$ = new BehaviorSubject<{ startDate: string, endDate: string }>({startDate: '', endDate: ''});
  sales$: Observable<ILinePlot[]> = combineLatest([this.dateRanges$.asObservable()]).pipe(
    map(([dateRanges]) => dateRanges),
    mergeMap(({startDate, endDate}) => this.salesReportService.getReport({startDate, endDate})
    ),
    map((sales: any[]) => sales.reduce((prev, next) => {
        const currentSalePurchases = prev[next.date] ? prev[next.date] : {purchase: 0, sale: 0};
        const sale = (next.quantity * (next.sellingPrice)) + currentSalePurchases.sale;
        const purchase = (next.quantity * (next.fifoPrice)) + currentSalePurchases.purchase;
        return {...prev, [next.date]: {purchase, sale}};
      }, {})
    ),
    map(dailySales => ([{
      name: 'Daily Profits', series: Object.entries(dailySales)
        .map(([name, value]: [string, any]) => ({name, value: 100 * (value.sale - value.purchase) / value.purchase}))
    }]))
  );

  constructor(private salesReportService: SalesReportService) {
  }

  ngOnInit() {
    this.dateRanges$.next({startDate: this.from, endDate: this.to});
  }

  removeYear(val: string) {
    return val.substr(8, 2) + val.substr(4, 3);
  }
}
