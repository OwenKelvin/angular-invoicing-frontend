import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {SalesReportService} from '../../reports/services/sales-report.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-total-profit-today',
  templateUrl: './total-profit-today.component.html',
  styleUrls: ['./total-profit-today.component.less']
})
export class TotalProfitTodayComponent {
  salesToday$: Observable<number> = this.salesReportService.getReport({}).pipe(
    map((sales: any[]) => sales.reduce((prev, next) =>
      prev + next.quantity * (next.sellingPrice - next.fifoPrice), 0))
  );

  constructor(private salesReportService: SalesReportService) {
  }

}
