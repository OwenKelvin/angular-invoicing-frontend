import { Component, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductMaintenanceComponent } from '../product-maintenance/product-maintenance.component';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { DeleteProductConfirmationComponent } from '../delete-product-confirmation/delete-product-confirmation.component';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { PrintService } from 'src/app/shared/print/services/print.service';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';
import { modalMixin } from 'src/app/mixins/modal.mixin';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.less']
})
export class AllProductsComponent extends subscribedContainerMixin(
  modalMixin()
) implements OnDestroy {
  storeInjected = this.store;
  modalServiceInjected = this.modalService;
  constructor(
    private productsService: ProductsService,
    private modalService: BsModalService,
    private store: Store,
    private printService: PrintService
  ) { super(); }

  filterString = '';
  filterSubject$ = new BehaviorSubject(this.filterString);
  filterAction$: Observable<string> = this.filterSubject$.asObservable();
  products$ = combineLatest([
    this.productsService.loadProducts$,
    this.filterAction$
  ]).pipe(
    map(([products, filterString]) => {
      return products.filter(({ name }: { name: string; }) => name.toLowerCase().includes(filterString.toLowerCase()));
    })
  );

  maintainProduct(id: number) {
    this.openModal({ id, component: ProductMaintenanceComponent });
  }
  delete(id: number) {
    this.openModal({ id, component: DeleteProductConfirmationComponent });
  }
  onFilterChange() {
    this.filterSubject$.next(this.filterString);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.modalRef?.hide();
  }

  print(): void {
    this.printService.popupPrint('table');
  }
}
