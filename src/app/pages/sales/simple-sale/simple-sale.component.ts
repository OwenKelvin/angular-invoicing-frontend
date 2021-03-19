import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../shared/services/products.service';
import {formMixin} from '../../../mixins/form.mixin';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {IProduct} from '../../../shared/interfaces/products.interface';
import {tap} from 'rxjs/operators';
import {SaleService} from '../services/sale.service';

@Component({
  selector: 'app-simple-sale',
  templateUrl: './simple-sale.component.html',
  styleUrls: ['./simple-sale.component.less']
})
export class SimpleSaleComponent extends formMixin() {
  products$ = this.productService.loadProducts$.pipe(
    tap(products => this.products = products)
  );
  products: IProduct[] = [];
  itemForm = this.fb.group({
    cartItems: this.fb.array([this.generateCartItem()])
  });

  generateCartItem() {
    return this.fb.group({
      productId: [null, [Validators.required]],
      saleCurrency: ['KES'],
      saleQuantity: [null, [Validators.required]],
      salePrice: [null, [Validators.required]],
    });
  }

  get cartItems() {
    return this.itemForm.get('cartItems') as FormArray;
  }

  setPrice(index: number) {
    const currentQuantity = (this.cartItems.controls[index].get('saleQuantity') as FormControl).value;
    if (currentQuantity < 1) {
      (this.cartItems.controls[index].get('saleQuantity') as FormControl).setValue(1);
    }
    const productId = (this.cartItems.controls[index].get('productId') as FormControl).value;
    const sellingPrice = this.products.find(({id}) => id === productId)?.sellingPrice;
    (this.cartItems.controls[index].get('salePrice') as FormControl).setValue(sellingPrice);
  }

  constructor(private saleService: SaleService, private productService: ProductsService, private fb: FormBuilder) {
    super();
  }

  addItem() {
    this.cartItems.push(this.generateCartItem());
  }

  submitCart() {
    console.log({simple: this.cartItems.value});
    this.submitInProgressSubject$.next(true);
    this.saleService.saveSale({
      discount: {type: 'absolute', amount: 0},
      products: this.cartItems.value,
      payment: {
        method: 'cash',
        amountReceived: 1000
      }
    })
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          // this.isDiscounted = false;
          // this.discountType = 'percentage';
          // this.discountAmount = 0;
          // this.paymentMethod = 'cash';
          // this.cashReceived = 0;
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

  canDeactivate() {
    return confirm('You are exiting the sales page, continue?');
  }


}
