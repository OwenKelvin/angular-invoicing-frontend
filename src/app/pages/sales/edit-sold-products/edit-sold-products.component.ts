import { Component, OnDestroy, OnInit } from '@angular/core';
import { SaleService } from '../services/sale.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { mergeMap, tap, takeUntil, map } from 'rxjs/operators';
import { modalMixin } from 'src/app/mixins/modal.mixin';
import { DeleteSoldProductComponent } from '../delete-sold-product/delete-sold-product.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { EditSoldProductComponent } from '../edit-sold-product/edit-sold-product.component';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-edit-sold-products',
  templateUrl: './edit-sold-products.component.html',
  styleUrls: ['./edit-sold-products.component.less']
})
export class EditSoldProductsComponent
  extends modalMixin(subscribedContainerMixin()) implements OnInit, OnDestroy {

  deletedIds: number[] = [];
  updatedItems: { [id: number]: any; } = {};
  deletedIdSubject$ = new BehaviorSubject<any[]>([]);
  updateSubject$ = new BehaviorSubject<{ [id: number]: any; }>({});
  updateAction$ = this.salesService.updateSoldProductAction$.pipe(
    tap(item => this.updatedItems = { ...this.updatedItems, [item.id]: item }),
    map(() => this.updatedItems),
    tap(ids => this.updateSubject$.next(ids)),
    takeUntil(this.destroyed$)
  );
  deletedIdAction$ = this.salesService.deleteSoldProductAction$.pipe(
    tap(id => this.deletedIds = [...new Set([...this.deletedIds, id])]),
    map(() => this.deletedIds),
    tap(ids => this.deletedIdSubject$.next(ids)),
    takeUntil(this.destroyed$)
  );
  storeInjected = this.store;
  modalServiceInjected = this.modalService;
  saleDates$ = this.salesService.saleDates$;
  saleDateSubject$ = new BehaviorSubject<Date>(new Date());
  saleDateAction$ = this.saleDateSubject$.asObservable();

  sales$ = this.saleDateAction$.pipe(
    mergeMap(date => this.salesService.getSoldProductsForDate$(date))
  );

  salesFiltered$ = combineLatest([
    this.deletedIdSubject$.asObservable(),
    this.updateSubject$.asObservable(),
    this.sales$]).pipe(
      map(([deletedIds, updatedItems, sales]) => {

        const filtered = {
          ...sales.reduce((a, b) => ({
            ...a, [b.id]: { ...b, ...updatedItems?.[b.id] }
          }), {})
        };
        return Object.values(filtered).filter((sale: any) => !deletedIds.includes(sale.id));
      })
    );
  constructor(
    private modalService: BsModalService,
    private store: Store,
    private salesService: SaleService) { super(); }

  ngOnInit() {
    this.deletedIdAction$.subscribe();
    this.updateAction$.subscribe();
  }
  deleteSoldItem(id: number) {
    this.openModal({ id, component: DeleteSoldProductComponent });
  }
  editSoldItem(id: number) {
    this.openModal({ id, component: EditSoldProductComponent });
  }

  ngOnDestroy() {
    this.modalRef?.hide();
  }
}
