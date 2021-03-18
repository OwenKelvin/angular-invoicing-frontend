import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SalesReportService} from '../../reports/services/sales-report.service';

@Component({
  selector: 'app-total-sales-today',
  templateUrl: './total-sales-today.component.html',
  styleUrls: ['./total-sales-today.component.less']
})
export class TotalSalesTodayComponent {
  salesToday$: Observable<number> = this.salesReportService.getReport({}).pipe(
    map((sales: any[]) => sales.reduce((prev, next) =>
      prev + next.quantity * (next.sellingPrice - next.fifoPrice), 0))
  );

  constructor(private salesReportService: SalesReportService) {
  }

}
