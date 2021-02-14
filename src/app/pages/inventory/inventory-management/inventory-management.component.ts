import {Component, OnDestroy} from '@angular/core';
import {Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {IProduct} from 'src/app/shared/interfaces/products.interface';
import {ProductsService} from 'src/app/shared/services/products.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Store} from '@ngrx/store';
import {tap, debounceTime, map} from 'rxjs/operators';
import {EditInventoryQuantityComponent} from '../edit-inventory-quantity/edit-inventory-quantity.component';
import {subscribedContainerMixin} from 'src/app/mixins/subscribed-container.mixin';
import {searchProductMixin} from 'src/app/mixins/search-product.mixin';
import {colorMixin} from 'src/app/mixins/color-mixin';
import {loadingMixin} from 'src/app/mixins/loading.mixin';
import {modalMixin} from 'src/app/mixins/modal.mixin';
import {InventoryQuantityService} from '../services/inventory-quantity.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.less']
})
export class InventoryManagementComponent extends modalMixin(
  loadingMixin(
    colorMixin(
      searchProductMixin(
        subscribedContainerMixin()
      )
    )
  )
) implements OnDestroy {
  storeInjected = this.store;
  modalServiceInjected = this.modalService;

  constructor(
    private productService: ProductsService,
    private modalService: BsModalService,
    private store: Store,
    private inventoryQuantityService: InventoryQuantityService
  ) {
    super();
  }

  sortByQuantityLowSubject$ = new BehaviorSubject<boolean>(false);
  sortByQuantityLowAction$ = this.sortByQuantityLowSubject$.asObservable();
  products$: Observable<IProduct[]> = this.productService.productsStockCount$;
  adjustmentsAction$ = this.inventoryQuantityService.adjustmentsAction$;

  filteredProducts$ = combineLatest([this.products$, this.filterStringAction$, this.adjustmentsAction$]).pipe(
    tap(() => this.loadingSubject$.next(true)),
    debounceTime(500),
    map(([products, filterString, adjustment]) => products.filter(
      product => product.name.toLowerCase().includes(filterString.toLowerCase()))
      .map(product => ({...product, count: Number(product?.count) + Number(adjustment?.[product.id] || 0)}))
    ),
    map(products => products.map(product => ({
      ...product,
      lowIndex: this.getProductLowPercentage(product),
      color: this.getProductColor(product),
    }))),
    tap(() => this.loadingSubject$.next(false))
  );

  sortedProducts$ = combineLatest([
    this.sortByQuantityLowAction$,
    this.filteredProducts$
  ]).pipe(
    map(([isSortByChecked, products]) => {
      if (isSortByChecked) {
        return products.sort((prev, next) => prev.lowIndex > next.lowIndex ? 1 : prev.lowIndex < next.lowIndex ? -1 : 0);
      } else {
        return products.sort((prev, next) => prev.id > next.id ? 1 : prev.id < next.id ? -1 : 0);
      }
    })
  );

  openModal({id}: { id: number; }) {
    super.openModal({id, component: EditInventoryQuantityComponent});
  }

  getProductLowPercentage(product: IProduct) {
    const {count, min} = product as { count: number, min: number; };
    return Math.min((count / min));
  }

  getProductLowIndex(product: IProduct) {
    const {count, min, max} = product as { count: number, min: number, max: number; };
    return 1 - Math.min(1, Math.max(0, ((count - min) / (max - min))));
  }

  getProductColor(product: IProduct) {
    return this.getColorString(this.getProductLowIndex(product) * 100);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.modalRef?.hide();
  }

}


