import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {PurchasesReportService} from '../../reports/services/purchases-report.service';

@Component({
  selector: 'app-total-purchases-today',
  templateUrl: './total-purchases-today.component.html',
  styleUrls: ['./total-purchases-today.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalPurchasesTodayComponent implements OnChanges{
  @Input() date: Date = new Date();
  date$ = new BehaviorSubject(new Date().toISOString().substr(0, 10));
  constructor(private salesReportService: PurchasesReportService) {
  }

  salesToday$: Observable<number> = this.date$.pipe(
    mergeMap(date => this.salesReportService.getReport({startDate: date, endDate: date})),
    map((sales: any[]) => sales.reduce((prev, next) =>
      prev + next.quantity * (next.unitPrice), 0))
  );
  ngOnChanges(change: SimpleChanges) {
    if (change.date) {
      this.date$.next(change.date.currentValue.toISOString().substr(0, 10));
    }
  }
}
