import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-total-profit-today',
  templateUrl: './total-profit-today.component.html',
  styleUrls: ['./total-profit-today.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalProfitTodayComponent implements OnChanges {
  @Input() date: Date = new Date();
  date$ = new BehaviorSubject(new Date().toISOString().substr(0, 10));
  salesToday$: Observable<number> = this.date$.pipe(
    mergeMap(date => this.salesReportService.getReport({startDate: date, endDate: date}).pipe(
      map((sales: any[]) => sales.reduce((prev, next) =>
        prev + next.quantity * (next.sellingPrice - next.fifoPrice), 0))
    ))
  );

  constructor(private salesReportService: SalesReportService) {
  }
  ngOnChanges(change: SimpleChanges) {
    if (change.date) {
      this.date$.next(change.date.currentValue.toISOString().substr(0, 10));
    }
  }

}
