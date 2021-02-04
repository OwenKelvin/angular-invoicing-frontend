import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPurchase } from '../shared/interfaces/purchase.interface';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PurchaseService } from '../shared/services/purchase.service';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { loadModals, closeModals } from 'src/app/store/actions/modal.actions';
import { selectPurchaseById } from '../store/selectors/purchase.selectors';
import { tap, takeUntil } from 'rxjs/operators';
import { loadPurchasesSuccess } from '../store/actions/purchase.actions';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SellerService } from '../../sellers/shared/services/seller.service';
import { ISeller } from '../../sellers/shared/interfaces/seller.interface';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';
import { formMixin } from 'src/app/mixins/form.mixin';

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
  ) { super(); }

  ngOnInit(): void {
    this.store.dispatch(loadModals());
    this.purchase$ = this.store.pipe(
      select(selectPurchaseById({ id: this.id })),
      tap(purchase => {
        const formData: IPurchase = {
          id: purchase.id,
          productId: purchase.productId,
          quantityPurchased: purchase.quantityPurchased,
          unitPrice: purchase.unitPrice,
          sellerId: purchase.sellerId,
          purchaseCurrency: purchase.purchaseCurrency,
          purchaseDate: purchase.purchaseDate
        };
        this.purchaseForm.setValue(formData);
        this.purchaseForm.updateValueAndValidity();
      }),
      takeUntil(this.destroyed$)
    );
    this.purchase$.subscribe();
  }
  closeModal() {
    this.itemForm = this.purchaseForm;
    if (this.closeFormDialog()) { this.store.dispatch(closeModals()); }
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
            this.store.dispatch(loadPurchasesSuccess({ data: [data] }));
          },
          error: () => this.submitInProgressSubject$.next(false)
        });
    }
  }

  get purchaseCurrency(): FormControl {
    return this.purchaseForm.get('purchaseCurrency') as FormControl;
  }

}
