import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SaleService } from '../services/sale.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { formMixin } from 'src/app/mixins/form.mixin';
import { modalMixin } from 'src/app/mixins/modal.mixin';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-sold-product',
  templateUrl: './edit-sold-product.component.html',
  styleUrls: ['./edit-sold-product.component.less']
})
export class EditSoldProductComponent extends formMixin(modalMixin()) implements OnInit {
  storeInjected = this.store;
  modalServiceInjected = this.modalService;
  @Input() id: number;
  productSoldForm: FormGroup = this.fb.group({
    price: ['', [Validators.required]],
    sellingPrice: ['', [Validators.required]],
    quantity: ['', [Validators.required]]
  });
  soldProduct$: Observable<any>;
  constructor(private fb: FormBuilder,
    private saleService: SaleService,
    private modalService: BsModalService,
    private store: Store) { super(); }

  ngOnInit(): void {
    this.soldProduct$ = this.saleService.getProductSoldWithId(this.id).pipe(
      tap(res => this.productSoldForm.patchValue({ ...res }))
    );
  
  }

  productSoldFormSubmit() {
    if (this.productSoldForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.saleService.updateProductSold({id: this.id, data: this.productSoldForm.value })
        .subscribe({
          next: () => {
            this.submitInProgressSubject$.next(false);
            this.closeModal();
          },
          error: () => this.submitInProgressSubject$.next(false)
        });
    }
  }
}
