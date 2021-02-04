import { Component, OnInit, Input } from '@angular/core';
import { formMixin } from 'src/app/mixins/form.mixin';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { modalMixin } from 'src/app/mixins/modal.mixin';
import { SaleService } from '../services/sale.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-delete-sold-product',
  templateUrl: './delete-sold-product.component.html',
  styleUrls: ['./delete-sold-product.component.less']
})
export class DeleteSoldProductComponent extends modalMixin(formMixin()) implements OnInit {

  storeInjected = this.store;
  modalServiceInjected = this.modalService;
  @Input() id: number;
  productSoldForm: FormGroup = this.fb.group({ id: [''] });
  soldProduct$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private saleService: SaleService,
    private modalService: BsModalService,
    private store: Store) { super(); }

  ngOnInit(): void {
    this.soldProduct$ = this.saleService.getProductSoldWithId(this.id).pipe(
      tap(soldProduct =>
        this.productSoldForm.get('id')?.setValidators(
          this.validateRef(`${soldProduct.productId}/${soldProduct.saleId}-${soldProduct.id}`)
        )
      )
    );
  }

  validateRef = (ref: string) => (control: FormControl): null | { refMismatch: string; } => {
    if (control.value === ('#' + ref)) {
      return null;
    }
    return { refMismatch: 'Id Mismatch' };
  }

  productSoldFormSubmit() {
    if (this.productSoldForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.saleService.deleteProductSoldWithId(this.id)
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
