import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formMixin} from '../../../mixins/form.mixin';
import {BehaviorSubject, Observable} from 'rxjs';
import {PurchasesReportService} from '../services/purchases-report.service';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-purchases-report',
  templateUrl: './purchases-report.component.html',
  styleUrls: ['./purchases-report.component.less']
})
export class PurchasesReportComponent extends formMixin() {
  salesReportForm: FormGroup = this.fb.group({
    startDate: [(new Date()).toISOString().substring(0, 10), Validators.required],
    endDate: [(new Date()).toISOString().substring(0, 10), Validators.required],
  });

  dataRefreshSubject$ = new BehaviorSubject<{ startDate: string, endDate: string }>(this.salesReportForm.value);
  dataRefresh$ = this.dataRefreshSubject$.asObservable();

  purchases$: Observable<any[]> = this.dataRefresh$.pipe(
    mergeMap((data) => this.purchasesReportService.getReport(data))
  );
  total$ = this.purchases$.pipe(
    map(purchases => purchases.reduce((prev, {total}) => prev + total, 0))
  );

  constructor(private fb: FormBuilder, private purchasesReportService: PurchasesReportService) {
    super();
  }

  getSalesReport() {
    this.dataRefreshSubject$.next(this.salesReportForm.value);
  }
}
