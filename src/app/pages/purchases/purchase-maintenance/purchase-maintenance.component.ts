import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {IPurchase} from '../shared/interfaces/purchase.interface';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {PurchaseService} from '../shared/services/purchase.service';
import {CurrencyService} from 'src/app/shared/services/currency.service';
import {loadModals, closeModals} from 'src/app/store/actions/modal.actions';
import {tap, takeUntil} from 'rxjs/operators';
import {updatePurchase} from '../store/actions/purchase.actions';
import {ProductsService} from 'src/app/shared/services/products.service';
import {SellerService} from '../../sellers/shared/services/seller.service';
import {ISeller} from '../../sellers/shared/interfaces/seller.interface';
import {subscribedContainerMixin} from 'src/app/mixins/subscribed-container.mixin';
import {formMixin} from 'src/app/mixins/form.mixin';

@Component({
  selector: 'app-purchase-maintenance',
  templateUrl: './purchase-maintenance.component.html',
  styleUrls: ['./purchase-maintenance.component.less']
})
export class PurchaseMaintenanceComponent extends formMixin(subscribedContainerMixin()) implements OnInit {

  @Input() id: number;

  purchase$: Observable<IPurchase>;
  currencies$: Observable<string[]> = this.currencyService.loadCurrencies$;
  sellers$: Observable<ISeller[]> = this.sellerService.loadSellers$;
  purchaseForm: FormGroup = this.fb.group({
    id: [0],
    productId: [null, [Validators.required]],
    quantityPurchased: [1, [Validators.required]],
    unitPrice: [null, [Validators.required]],
    sellerId: [0],
    purchaseCurrency: ['KES', [Validators.required]],
    purchaseDate: [null, [Validators.required]]

  });

  products$ = this.productsService.loadProducts$;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private purchaseService: PurchaseService,
    private productsService: ProductsService,
    private currencyService: CurrencyService,
    private sellerService: SellerService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.purchase$ = this.purchaseService.getPurchaseWithId(this.id).pipe(
        tap(val => this.purchaseForm.patchValue(val))
      );
      this.purchase$.subscribe();
    }
    this.store.dispatch(loadModals());
  }

  closeModal() {
    this.itemForm = this.purchaseForm;
    if (this.closeFormDialog()) {
      this.store.dispatch(closeModals());
    }
  }

  purchaseFormSubmit() {
    if (this.purchaseForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.purchaseService.savePurchase(this.purchaseForm.value).pipe(
        takeUntil(this.destroyed$)
      )
        .subscribe({
          next: (data) => {
            this.submitInProgressSubject$.next(false);
            this.store.dispatch(closeModals());
            this.store.dispatch(updatePurchase({data}));
          },
          error: () => this.submitInProgressSubject$.next(false)
        });
    }
  }

  get purchaseCurrency(): FormControl {
    return this.purchaseForm.get('purchaseCurrency') as FormControl;
  }

}
