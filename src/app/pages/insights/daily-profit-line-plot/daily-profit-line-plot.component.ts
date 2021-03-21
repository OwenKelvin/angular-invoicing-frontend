import {Component, Input, OnChanges} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {map, mergeMap} from 'rxjs/operators';
import {ILinePlot} from '../line-plot/line-plot.component';

@Component({
  selector: 'app-daily-profit-line-plot',
  templateUrl: './daily-profit-line-plot.component.html',
  styleUrls: ['./daily-profit-line-plot.component.less']
})
export class DailyProfitLinePlotComponent implements OnChanges {
  @Input() from = '';
  @Input() to = '';
  dateRanges$ = new BehaviorSubject<{ startDate: string, endDate: string }>({startDate: '', endDate: ''});
  sales$: Observable<ILinePlot[]> = combineLatest([this.dateRanges$.asObservable()]).pipe(
    map(([dateRanges]) => dateRanges),
    mergeMap(({startDate, endDate}) => this.salesReportService.getReport({startDate, endDate})
    ),
    map((sales: any[]) => sales.reduce((prev, next) => {
        const daySale = (next.quantity * (next.sellingPrice - next.fifoPrice)) + (prev[next.date] ? prev[next.date] : 0);
        return {...prev, [next.date]: daySale};
      }, {})
    ),
    map(dailySales => ([{
      name: 'Daily Profits', series: Object.entries(dailySales)
        .map(([name, value]: [string, number]) => ({name, value}))
    }]))
  );

  constructor(private salesReportService: SalesReportService) {
  }

  ngOnChanges() {
    this.dateRanges$.next({startDate: this.from, endDate: this.to});
  }

  removeYear(val: string) {
    return val.substr(8, 2) + val.substr(4, 3);
  }
}
