import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SalesReportService } from '../services/sales-report.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.less']
})
export class SalesReportComponent implements OnInit {

  salesReportForm: FormGroup = this.fb.group({
    startDate: [(new Date()).toISOString().substr(0, 10), [Validators.required]],
    endDate: [(new Date()).toISOString().substr(0, 10), [Validators.required]],
    cumulateByProduct: [true],
    cumulateByDate: [true],
  });

  isSubmittingSubject$ = new BehaviorSubject<boolean>(false);
  isSubmittingAction$ = this.isSubmittingSubject$.asObservable();

  cumulateByProductSubject$ = new BehaviorSubject<boolean>(this.salesReportForm.get('cumulateByProduct')?.value);
  cumulateByDateSubject$ = new BehaviorSubject<boolean>(this.salesReportForm.get('cumulateByDate')?.value);

  dataChangedSubject$ = new BehaviorSubject<any[]>([]);

  filteredData$ = combineLatest([
    this.cumulateByProductSubject$.asObservable(),
    this.cumulateByDateSubject$.asObservable(),
    this.dataChangedSubject$.asObservable(),
  ]).pipe(
    map(
      ([cumulateByProductChecked, cumulateByDateChecked, data]) => {
        if (cumulateByProductChecked && !cumulateByDateChecked) {
          return data.reduce((prev: any, next: any) => {
            const prevQuantity = prev[next.productId]?.quantity ? prev[next.productId]?.quantity : 0;
            const prevPrice = prev[next.productId]?.fifoPrice ? prev[next.productId]?.fifoPrice : 0;
            const prevSellingPrice = prev[next.productId]?.sellingPrice ? prev[next.productId]?.sellingPrice : 0;
            const quantity = (Number(prevQuantity ? prevQuantity : 0) + Number(next.quantity));
            const fifoPrice = ((prevQuantity * prevPrice) + (next.quantity * next.fifoPrice)) / quantity;
            const sellingPricePrice = ((prevQuantity * prevSellingPrice) + (next.quantity * next.sellingPrice)) / quantity;
            return {
              ...prev,
              [next.productId]: {
                ...next,
                quantity,
                fifoPrice,
                sellingPricePrice,
                date: '##/##/####'
              }
            };
          }, {});
        }

        if (!cumulateByProductChecked && cumulateByDateChecked) {
          return data.reduce((prev: any, next: any) => {
            const prevQuantity = prev[next.date]?.quantity ? prev[next.date]?.quantity : 0;
            const prevPrice = prev[next.date]?.fifoPrice ? prev[next.date]?.fifoPrice : 0;
            const prevSellingPrice = prev[next.date]?.sellingPrice ? prev[next.date]?.sellingPrice : 0;
            const quantity = (Number(prevQuantity ? prevQuantity : 0) + Number(next.quantity));
            const fifoPrice = ((prevQuantity * prevPrice) + (next.quantity * next.fifoPrice)) / quantity;
            const sellingPricePrice = ((prevQuantity * prevSellingPrice) + (next.quantity * next.sellingPrice)) / quantity;

            return {
              ...prev,
              [next.date]: {
                ...next,
                quantity,
                fifoPrice,
                sellingPricePrice,
                productName: 'Daily Sale',
                productId: '#####'
              }
            };
          }, {});
        }

        if (cumulateByProductChecked && cumulateByDateChecked) {
          return data.reduce((prev: any, next: any) => {
            const prevQuantity = prev[String(next.date)
              + String(next.productId)]?.quantity ? prev[String(next.date)
                + String(next.productId)]?.quantity : 0;
            const prevPrice = prev[String(next.date)
              + String(next.productId)]?.fifoPrice ? prev[String(next.date)
                + String(next.productId)]?.fifoPrice : 0;
            const prevSellingPrice = prev[String(next.date)
              + String(next.productId)]?.sellingPrice ? prev[String(next.date)
                + String(next.productId)]?.sellingPrice : 0;
            const quantity = (Number(prevQuantity ? prevQuantity : 0) + Number(next.quantity));
            const fifoPrice = ((prevQuantity * prevPrice) + (next.quantity * next.fifoPrice)) / quantity;
            const sellingPricePrice = ((prevQuantity * prevSellingPrice) + (next.quantity * next.sellingPrice)) / quantity;
            return {
              ...prev,
              [String(next.date) + String(next.productId)]: {
                ...next,
                quantity,
                fifoPrice,
                sellingPricePrice
              }
            };
          }, {});
        }

        return data;
      }
    ),
    map(res => Object.values(res)),

  )

  reportData: any[];
  dataRetrieved = false;
  constructor(
    private fb: FormBuilder,
    private salesReportService: SalesReportService
  ) { }


  ngOnInit() {
    this.getSalesReport();
    this.salesReportForm.get('cumulateByProduct')?.valueChanges.subscribe({
      next: (val) => this.cumulateByProductSubject$.next(val)
    });
    this.salesReportForm.get('cumulateByDate')?.valueChanges.subscribe({
      next: (val) => this.cumulateByDateSubject$.next(val)
    });
  }

  getSalesReport() {

    this.isSubmittingSubject$.next(true);
    this.salesReportService.getReport(this.salesReportForm.value)
      .pipe(
        tap(res => this.dataChangedSubject$.next(res)),
      )
      .subscribe({
        next: (res) => {
          this.dataRetrieved = true;
          this.reportData = res;
          this.isSubmittingSubject$.next(false);
        },
        error: () => this.isSubmittingSubject$.next(false)
      });
  }

  get totalSales() {
    return this.reportData?.reduce((a, b) => {
      return a + b.sellingPrice * b.quantity;
    }, 0);
  }

  get totalCogs() {
    return this.reportData?.reduce((a, b) => {
      return a + b.fifoPrice * b.quantity;
    }, 0);
  }


}
