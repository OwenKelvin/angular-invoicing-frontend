import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeller } from '../shared/interfaces/seller.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { SellerService } from '../shared/services/seller.service';
import { loadModals, closeModals } from 'src/app/store/actions/modal.actions';
import { selectsellerById } from '../store/selectors/seller.selectors';
import { tap, takeUntil } from 'rxjs/operators';
import { loadSellersSuccess } from '../store/actions/seller.actions';
import { formMixin } from 'src/app/mixins/form.mixin';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-seller-maintenance',
  templateUrl: './seller-maintenance.component.html',
  styleUrls: ['./seller-maintenance.component.less']
})
export class SellerMaintenanceComponent extends formMixin(subscribedContainerMixin()) implements OnInit {

  @Input() id: number;

  seller$: Observable<ISeller>;
  sellerForm: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    description: '',
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private sellerService: SellerService,
  ) { super(); }

  ngOnInit(): void {
    this.store.dispatch(loadModals());
    this.seller$ = this.store.pipe(
      select(selectsellerById({ id: this.id })),
      tap(seller => {
        this.sellerForm.setValue(seller);
        this.sellerForm.updateValueAndValidity();
      }),
      takeUntil(this.destroyed$)
    );
    this.seller$.subscribe();
  }
  closeModal() {
    this.itemForm = this.sellerForm;
    if (this.closeFormDialog()) { this.store.dispatch(closeModals()); }
  }
  sellerFormSubmit() {
    if (this.sellerForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.sellerService.saveSeller(this.sellerForm.value)
        .subscribe({
          next: (data) => {
            this.submitInProgressSubject$.next(false);
            this.store.dispatch(closeModals());
            this.store.dispatch(loadSellersSuccess({ data: [data] }));
          },
          error: () => this.submitInProgressSubject$.next(false)
        });
    }
  }
}
