import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {map, mergeMap, tap} from 'rxjs/operators';
import {ILinePlot} from '../line-plot/line-plot.component';

@Component({
  selector: 'app-daily-sale-line-plot',
  templateUrl: './daily-sale-line-plot.component.html',
  styleUrls: ['./daily-sale-line-plot.component.less']
})
export class DailySaleLinePlotComponent implements OnInit {
  @Input() from = '';
  @Input() to = '';
  dateRanges$ = new BehaviorSubject<{ startDate: string, endDate: string }>({startDate: '', endDate: ''});
  sales$: Observable<ILinePlot[]> = combineLatest([this.dateRanges$.asObservable()]).pipe(
    map(([dateRanges]) => dateRanges),
    mergeMap(({startDate, endDate}) => this.salesReportService.getReport({startDate, endDate})
    ),
    map((sales: any[]) => sales.reduce((prev, next) => {
        const daySale = (next.quantity * (next.sellingPrice)) + (prev[next.date] ? prev[next.date] : 0);
        return {...prev, [next.date]: daySale};
      }, {})
    ),
    map(dailySales =>
      ([{
        name: 'Daily Profits', series: Object.entries(dailySales)
          .map(([name, value]: [string, number]) => ({name, value}))
      }]))
  );

  constructor(private salesReportService: SalesReportService) {
  }

  ngOnInit() {
    this.dateRanges$.next({startDate: this.from, endDate: this.to});
  }

  axisFormat(val: any) {
    console.log(val);
    return val;
  }
}
