import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeller } from '../shared/interfaces/seller.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { SellerService } from '../shared/services/seller.service';
import { loadModals, closeModals } from 'src/app/store/actions/modal.actions';
import { selectsellerById } from '../store/selectors/seller.selectors';
import { takeWhile } from 'rxjs/operators';
import { deleteSeller } from '../store/actions/seller.actions';

@Component({
  selector: 'app-delete-seller-confirmation',
  templateUrl: './delete-seller-confirmation.component.html',
  styleUrls: ['./delete-seller-confirmation.component.less']
})
export class DeleteSellerConfirmationComponent implements OnInit, OnDestroy {

  @Input() id: number;
  seller$: Observable<ISeller>;
  sellerForm: FormGroup = this.fb.group({
    id: ['']
  });
  componentIsActive = true;
  isSubmitting: boolean;
  constructor(
    private store: Store,
    private sellerService: SellerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadModals());
    this.seller$ = this.store.pipe(
      select(selectsellerById({ id: this.id })),
      takeWhile(() => this.componentIsActive)
    );
    this.sellerForm.get('id')?.setValidators([Validators.required, this.validateId(this.id)]);
  }

  validateId = (id: number) => (control: FormControl): null | { idMismatch: string; } => {
    if (control.value === ('#' + id)) {
      return null;
    }
    return { idMismatch: 'Id Mismatch' };
  };

  closeModal() {
    this.store.dispatch(closeModals());
  }
  sellerFormSubmit() {
    if (this.sellerForm.valid) {
      this.isSubmitting = true;
      this.sellerService.deleteSeller(this.id).pipe(
        takeWhile(() => this.componentIsActive)
      )
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.closeModal();
            this.store.dispatch(deleteSeller({ data: { id: this.id } }));
          },
          error: () => this.isSubmitting = false
        });
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
