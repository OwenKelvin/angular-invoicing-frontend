import { Component, OnInit } from '@angular/core';
import { formMixin } from 'src/app/mixins/form.mixin';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MPesaReceiptsService } from 'src/app/shared/services/m-pesa-receipts.service';

@Component({
  selector: 'app-m-pesa-receipt-report',
  templateUrl: './m-pesa-receipt-report.component.html',
  styleUrls: ['./m-pesa-receipt-report.component.less']
})
export class MPesaReceiptReportComponent extends formMixin() implements OnInit {
  itemForm = this.fb.group({
    startDate: [(new Date()).toISOString().substr(0, 10), [Validators.required]],
    endDate: [(new Date()).toISOString().substr(0, 10), [Validators.required]],
  });

  receipts$: Observable<any[]> = this.mPesaService.getReceipts(this.itemForm.value);


  constructor(private fb: FormBuilder, private mPesaService: MPesaReceiptsService) { super(); }

  ngOnInit() {

  }

  getReport() {

  }

}
