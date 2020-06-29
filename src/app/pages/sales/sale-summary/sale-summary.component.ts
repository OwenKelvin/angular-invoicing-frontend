import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddSaleItemComponent } from '../add-sale-item/add-sale-item.component';
import { Store, select } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectCartState, selectTotalCartPrice } from '../store/selectors/cart.selectors';
import { selectProductById } from '../../products/store/selectors/products.selectors';
import { changeCartQuantity, deleteCartItem } from '../store/actions/cart.actions';
import { SaleService } from '../services/sale.service';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';
import { modalMixin } from 'src/app/mixins/modal.mixin';
import { formMixin } from 'src/app/mixins/form.mixin';
import { MPesaService } from '../services/m-pesa.service';

@Component({
  selector: 'app-sale-summary',
  templateUrl: './sale-summary.component.html',
  styleUrls: ['./sale-summary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleSummaryComponent extends modalMixin(subscribedContainerMixin(formMixin())) implements OnInit {
  mPesaToken$: Observable<any>;

  constructor(
    private store: Store,
    private modalService: BsModalService,
    private saleService: SaleService,
    private mPesaService: MPesaService
  ) {
    super();
    this.storeInjected = this.store;
    this.modalServiceInjected = this.modalService;
  }

  ngOnInit() {
    this.mPesaService.getAccountBalance().subscribe(res => console.log({res}));
    //this.mPesaService.lipaNaMPesa({ mobileNumber: '254712692310'}).subscribe(res => console.log({res}))
    // this.mPesaService.simulateResult().subscribe(res => console.log({res}))

  }

  get discountNetAmount(): number {
    if (this.isDiscounted && this.discountType === 'absolute') {
      return Number(this.discountAmount);
    } else if (this.isDiscounted && this.discountType === 'percentage') {
      return Number(this.cartItemsTotal) * Number(this.discountAmount) / 100;
    }

    return 0;
  }

  cartItems$: Observable<any> = this.store.pipe(
    select(selectCartState),
    tap((res) => this.cartItems = res)
  );
  cartItemsTotal$: Observable<number> = this.store.pipe(
    select(selectTotalCartPrice),
    tap((res) => this.cartItemsTotal = res)
  );
  cashReceived = 0;
  cartItemsTotal: number;

  isDiscounted = false;
  discountAmount = 0;
  discountType: 'absolute' | 'percentage' = 'percentage';
  creditorPhoneNumber: '';
  mPesaPhoneNumber: '';
  sendMpesaPaymentRequest() {
    this.mPesaService.lipaNaMPesa({
      mobileNumber: this.mPesaPhoneNumber
    }).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
  
  checkPaymentReceipt() {
    alert(this.mPesaPhoneNumber)
    this.mPesaService.checkPaymentReceipt({
      amount: this.amountDue,
      mobileNumber: this.mPesaPhoneNumber
    }).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
  get amountDue() {
    return this.cartItemsTotal - this.discountNetAmount
  }

  cartItems: any;

  paymentMethod = 'cash';

  productName = (id: number) => this.store.pipe(
    select(selectProductById({ id })),
    map(product => product.name)
  );

  changeQuantity(productId: number, changeBy: number) {
    this.store.dispatch(changeCartQuantity({ data: { productId, changeBy } }));
  }
  removeItem(productId: number) {
    this.store.dispatch(deleteCartItem({ data: { productId } }));
  }
  addItems() { this.openModal({ id: 0, component: AddSaleItemComponent }); }

  submitCart() {
    this.submitInProgressSubject$.next(true);
    this.saleService.saveSale({
      discount: { type: this.discountType, amount: this.discountAmount },
      products: this.cartItems,
      payment: {
        method: this.paymentMethod,
        amountReceived: this.cashReceived
      }
    })
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.isDiscounted = false;
          this.discountType = 'percentage';
          this.discountAmount = 0;
          this.paymentMethod = 'cash';
          this.cashReceived = 0;
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }
  canDeactivate() {
    return confirm('You are exiting the sales page, continue?');
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.modalRef?.hide();
  }
}
