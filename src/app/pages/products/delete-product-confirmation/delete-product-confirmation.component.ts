import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadModals, closeModals } from 'src/app/store/actions/modal.actions';
import { selectProductById } from '../store/selectors/products.selectors';
import { takeWhile } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { deleteProduct } from '../store/actions/products.actions';

@Component({
  selector: 'app-delete-product-confirmation',
  templateUrl: './delete-product-confirmation.component.html',
  styleUrls: ['./delete-product-confirmation.component.less']
})
export class DeleteProductConfirmationComponent implements OnInit, OnDestroy {

  @Input() id: number;
  product$: Observable<IProduct>;
  productForm: FormGroup = this.fb.group({
    id: ['']
  });
  componentIsActive = true;
  isSubmitting: boolean;
  constructor(
    private store: Store,
    private productService: ProductsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadModals());
    this.product$ = this.store.pipe(
      select(selectProductById({ id: this.id })),
      takeWhile(() => this.componentIsActive)
    );
    this.productForm.get('id')?.setValidators([Validators.required, this.validateId(this.id)]);
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
  productFormSubmit() {
    if (this.productForm.valid) {
      this.isSubmitting = true;
      this.productService.deleteProduct(this.id).pipe(
        takeWhile(() => this.componentIsActive)
      )
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.closeModal();
            this.store.dispatch(deleteProduct({ data: { id: this.id } }));
          },
          error: () => this.isSubmitting = false
        });
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
