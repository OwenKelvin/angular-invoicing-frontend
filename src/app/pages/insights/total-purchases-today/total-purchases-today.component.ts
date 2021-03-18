import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {PurchasesReportService} from '../../reports/services/purchases-report.service';

@Component({
  selector: 'app-total-purchases-today',
  templateUrl: './total-purchases-today.component.html',
  styleUrls: ['./total-purchases-today.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalPurchasesTodayComponent {
  constructor(private salesReportService: PurchasesReportService) {
  }
  salesToday$: Observable<number> = this.salesReportService.getReport({
    startDate: new Date().toISOString().substring(0, 10),
    endDate: new Date().toISOString().substring(0, 10),
  }).pipe(
    map((sales: any[]) => sales.reduce((prev, next) =>
      prev + next.quantity * (next.unitPrice), 0))
  );

}
