import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {SalesReportService} from '../../reports/services/sales-report.service';

@Component({
  selector: 'app-total-sales-today',
  templateUrl: './total-sales-today.component.html',
  styleUrls: ['./total-sales-today.component.less']
})
export class TotalSalesTodayComponent implements OnChanges {
  @Input() date: Date = new Date();
  date$ = new BehaviorSubject(new Date().toISOString().substr(0, 10));

  salesToday$: Observable<number> = this.date$.pipe(
    mergeMap(date => this.salesReportService.getReport({startDate: date, endDate: date})),
    map((sales: any[]) => sales.reduce((prev, next) =>
      prev + next.quantity * next.sellingPrice, 0))
  );

  constructor(private salesReportService: SalesReportService) {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.date) {
      this.date$.next(change.date.currentValue.toISOString().substr(0, 10));
    }
  }

}
