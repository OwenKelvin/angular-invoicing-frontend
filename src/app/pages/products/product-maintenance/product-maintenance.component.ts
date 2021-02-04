import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectProductById } from '../store/selectors/products.selectors';
import { tap, takeUntil, mergeMap, filter } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/products.interface';
import { closeModals, loadModals } from 'src/app/store/actions/modal.actions';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { loadProductsSuccess } from '../store/actions/products.actions';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';
import { formMixin } from 'src/app/mixins/form.mixin';

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductMaintenanceComponent extends formMixin(subscribedContainerMixin()) implements OnInit {

  @Input() id: number;

  productIdSubject$ = new Subject<number>();
  product$: Observable<IProduct> = this.productIdSubject$.asObservable().pipe(
    filter(id => id > 0),
    mergeMap(id => this.store.pipe(
      select(selectProductById({ id })),
      tap(product => {
        this.productForm.patchValue(product);
        this.productForm.updateValueAndValidity();
      }),
      takeUntil(this.destroyed$)
    ))
  );

  currencies$: Observable<string[]> = this.currencyService.loadCurrencies$;
  productForm: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    buyingPrice: [0],
    buyingPriceCurrency: ['KES'],
    sellingPrice: [0],
    sellingPriceCurrency: ['KES'],
    minAmountCheck: [3, [Validators.required]],
    maxAmountCheck: [8, [Validators.required]],

  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private productService: ProductsService,
    private currencyService: CurrencyService
  ) { super(); }

  ngOnInit(): void {
    this.product$.subscribe();
    this.productIdSubject$.next(this.id);
    this.store.dispatch(loadModals());
  }
  closeModal() {
    this.itemForm = this.productForm;
    if (this.closeFormDialog()) { this.store.dispatch(closeModals()); }

  }
  productFormSubmit() {
    if (this.productForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.productService.saveProduct(this.productForm.value)
        .subscribe({
          next: (data) => {
            this.submitInProgressSubject$.next(false);
            this.store.dispatch(closeModals());
            this.store.dispatch(loadProductsSuccess({ data: [data] }));
          },
          error: () => this.submitInProgressSubject$.next(false)
        });
    }
  }
  get selectedBuyingPriceCurrency(): FormControl {
    return this.productForm.get('buyingPriceCurrency') as FormControl;
  }

  get selectedSellingPriceCurrency(): FormControl {
    return this.productForm.get('sellingPriceCurrency') as FormControl;
  }
}
