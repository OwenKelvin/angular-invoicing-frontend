import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { Store, select } from '@ngrx/store';
import { closeModals, loadModals } from 'src/app/store/actions/modal.actions';
import { mergeMap, map, takeUntil } from 'rxjs/operators';
import { selectProductById } from '../../products/store/selectors/products.selectors';
import { loadCartsSuccess } from '../store/actions/cart.actions';
import { selectTotalCartPrice, selectTotalItemsInCart } from '../store/selectors/cart.selectors';
import { formMixin } from 'src/app/mixins/form.mixin';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-add-sale-item',
  templateUrl: './add-sale-item.component.html',
  styleUrls: ['./add-sale-item.component.less']
})
export class AddSaleItemComponent extends formMixin(subscribedContainerMixin()) implements OnInit, OnDestroy {
  newSaleItemForm: FormGroup = this.fb.group({
    productId: [null, [Validators.required]],
    saleQuantity: [1, [Validators.required]],
    salePrice: [null, [Validators.required]],
    unitPrice: [null],
    unitPriceCurrency: ['KES'],
    saleCurrency: ['KES', [Validators.required]],
    searchProduct: ['']
  });
  cartAdditionSubject$ = new BehaviorSubject<boolean>(false);
  cartAdditionAction$ = this.cartAdditionSubject$.asObservable();
  products$: Observable<IProduct[]> = this.productService.loadProducts$;
  currencies$: Observable<string[]> = this.currencyService.currencies$;

  cartItemsCount$ = this.store.pipe(select(selectTotalItemsInCart));
  cartItemsPrice$ = this.store.pipe(select(selectTotalCartPrice));
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private currencyService: CurrencyService,
    private store: Store
  ) { super(); }

  ngOnInit(): void {
    this.newSaleItemForm.valueChanges.subscribe({ 
      next: () => this.cartAdditionSubject$.next(false)
    })
    this.store.dispatch(loadModals());
    this.newSaleItemForm.get('productId')?.valueChanges
      .pipe(
        map((id: string) => Number(id)),
        mergeMap((id) => this.store.pipe(select(selectProductById({ id })))),
        takeUntil(this.destroyed$)
      )
      .subscribe({
        next: (product) => {
          this.newSaleItemForm.get('unitPrice')?.setValue(product.sellingPrice)
          this.newSaleItemForm.get('salePrice')?.setValue(product.sellingPrice)
          this.newSaleItemForm.get('saleCurrency')?.setValue(product.sellingPriceCurrency)
          this.newSaleItemForm.get('unitPriceCurrency')?.setValue(product.sellingPriceCurrency)
          this.newSaleItemForm.updateValueAndValidity();
        }
      });
  }

  resetForm() {
    this.newSaleItemForm.setValue({
      productId: null,
      saleQuantity: 1,
      salePrice: null,
      unitPrice: null,
      unitPriceCurrency: 'KES',
      saleCurrency: 'KES',
      searchProduct: ''
    });
    this.newSaleItemForm.markAsUntouched();
  }

  get saleCurrency(): FormControl {
    return this.newSaleItemForm.get('saleCurrency') as FormControl;
  }

  get unitPriceCurrency(): FormControl {
    return this.newSaleItemForm.get('unitPriceCurrency') as FormControl;
  }
  newSaleItemFormSubmit() {
    if (this.newSaleItemForm.valid) {
      this.store.dispatch(loadCartsSuccess({ data: this.newSaleItemForm.value }));
      this.resetForm();
      this.cartAdditionSubject$.next(true)
    }
  }

  closeModal() {
    this.itemForm = this.newSaleItemForm;
    if (this.closeFormDialog()) { this.store.dispatch(closeModals()); }
  }
}
