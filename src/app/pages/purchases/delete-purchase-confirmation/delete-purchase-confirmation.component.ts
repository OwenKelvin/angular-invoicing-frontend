import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { IPurchase } from '../shared/interfaces/purchase.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PurchaseService } from '../shared/services/purchase.service';
import { loadModals, closeModals } from 'src/app/store/actions/modal.actions';
import { selectPurchaseById } from '../store/selectors/purchase.selectors';
import { takeWhile } from 'rxjs/operators';
import { deletePurchase } from '../store/actions/purchase.actions';

@Component({
  selector: 'app-delete-purchase-confirmation',
  templateUrl: './delete-purchase-confirmation.component.html',
  styleUrls: ['./delete-purchase-confirmation.component.less']
})
export class DeletePurchaseConfirmationComponent implements OnInit, OnDestroy {

  @Input() id: number;
  purchase$: Observable<IPurchase>;
  purchaseForm: FormGroup = this.fb.group({
    id: ['']
  });
  componentIsActive = true;
  isSubmitting: boolean;
  constructor(
    private store: Store,
    private purchaseService: PurchaseService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadModals());
    this.purchase$ = this.store.pipe(
      select(selectPurchaseById({ id: this.id })),
      takeWhile(() => this.componentIsActive)
    );
    this.purchaseForm.get('id')?.setValidators([Validators.required, this.validateId(this.id)]);
  }

  validateId = (id: number) => (control: FormControl): null | { idMismatch: string; } => {
    if (control.value === ('#' + id)) {
      return null;
    }
    return { idMismatch: 'Id Mismatch' };
  }

  closeModal() {
    this.store.dispatch(closeModals());
  }
  purchaseFormSubmit() {
    if (this.purchaseForm.valid) {
      this.isSubmitting = true;
      this.purchaseService.deletePurchase(this.id).pipe(
        takeWhile(() => this.componentIsActive)
      )
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.closeModal();
            this.store.dispatch(deletePurchase({ data: { id: this.id } }));
          },
          error: () => this.isSubmitting = false
        });
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
