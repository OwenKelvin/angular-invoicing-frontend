import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/interfaces/products.interface';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InventoryQuantityService } from '../services/inventory-quantity.service';
import { Store } from '@ngrx/store';
import { closeModals } from 'src/app/store/actions/modal.actions';
import { formMixin } from 'src/app/mixins/form.mixin';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-edit-inventory-quantity',
  templateUrl: './edit-inventory-quantity.component.html',
  styleUrls: ['./edit-inventory-quantity.component.less']
})
export class EditInventoryQuantityComponent extends formMixin(
  subscribedContainerMixin()) implements OnInit {
  @Input() id: number;
  inventoryAdjustementForm: FormGroup = this.fb.group({
    adjustment: [0, [Validators.required]],
    finalStockCount: [0, [Validators.required]],
    reasonForAdjustment: ['', [Validators.required]],
  });

  product$: Observable<IProduct | undefined>;
  inventoryQuantity$: Observable<any>;
  vm$: Observable<any>;
  adjustmentChange$: any;
  adjustmentValueChanges$: Observable<any>;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private inventoryQuantityService: InventoryQuantityService,
    private store: Store
  ) { super(); }

  get adjustment(): FormControl {
    return this.inventoryAdjustementForm.get('adjustment') as FormControl;
  }
  get finalStockCount(): FormControl {
    return this.inventoryAdjustementForm.get('finalStockCount') as FormControl;
  }

  quantityChangeSubject$ = new BehaviorSubject(0);
  quantityChangeAction$ = this.quantityChangeSubject$.asObservable();


  ngOnInit(): void {

    this.product$ = this.productsService.loadProducts$.pipe(
      map(item => item.find(({ id }: any) => id === this.id))
    );

    this.inventoryQuantity$ = this.inventoryQuantityService.quantityForProductWithId(this.id);
    this.adjustmentChange$ = combineLatest([this.quantityChangeAction$, this.inventoryQuantity$])
      .pipe(
        tap(([quantity, initial]) => this.finalStockCount.setValue(initial + quantity))
      );

    this.vm$ = combineLatest([
      this.product$,
      this.inventoryQuantity$,
      this.adjustmentChange$,
    ]).pipe(
      map(([product, inventoryQuantity]) => ({ product, inventoryQuantity }))
    );
  }
  onAdjustmentChange(val: string) {
    this.quantityChangeSubject$.next(+val);
  }
  closeModal() {
    this.store.dispatch(closeModals());
  }
  submitInventoryAdjustement() {
    this.submitInProgressSubject$.next(true);
    this.inventoryQuantityService.adjustQuantity({
      id: this.id,
      adjustment: +this.adjustment.value,
      reason: this.inventoryAdjustementForm.get('reasonForAdjustment')?.value
    }).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => {
        this.submitInProgressSubject$.next(false);
        this.store.dispatch(closeModals());
      },
      error: () => this.submitInProgressSubject$.next(false)
    });

  }


}
