import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {map, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-daily-profit-line-plot',
  templateUrl: './daily-profit-line-plot.component.html',
  styleUrls: ['./daily-profit-line-plot.component.less']
})
export class DailyProfitLinePlotComponent implements OnInit {
  @Input() from = '';
  @Input() to = '';
  dateRanges$ = new BehaviorSubject<{ startDate: string, endDate: string }>({startDate: '', endDate: ''});
  sales$ = combineLatest([this.dateRanges$.asObservable()]).pipe(
    map(([dateRanges]) => dateRanges),
    mergeMap(({startDate, endDate}) => this.salesReportService.getReport({startDate, endDate})
    ),
    map((sales: any[]) => sales.reduce((prev, next) => {
        const daySale = (next.quantity * (next.sellingPrice - next.fifoPrice)) + (prev[next.date] ? prev[next.date] : 0);
        return {...prev, [next.date]: daySale};
      }, {})
    ),
    map(dailySales => ([{name: 'Daily Profits', series: Object.entries(dailySales).map(([name, value]) => ({name, value}))}]))
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
