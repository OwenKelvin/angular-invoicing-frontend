import {Component, OnDestroy} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Store} from '@ngrx/store';
import {map, debounceTime, mergeMap, tap, switchMap} from 'rxjs/operators';
import {PurchaseService} from '../shared/services/purchase.service';
import {PurchaseMaintenanceComponent} from '../purchase-maintenance/purchase-maintenance.component';
import {
  DeletePurchaseConfirmationComponent
} from '../delete-purchase-confirmation/delete-purchase-confirmation.component';
import {subscribedContainerMixin} from 'src/app/mixins/subscribed-container.mixin';
import {searchProductMixin} from 'src/app/mixins/search-product.mixin';
import {combineLatest, BehaviorSubject} from 'rxjs';
import {modalMixin} from 'src/app/mixins/modal.mixin';
import {loadPurchasesSuccess} from '../store/actions/purchase.actions';
import {selectAllPurchases} from '../store/selectors/purchase.selectors';

@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.less']
})
export class AllPurchasesComponent extends searchProductMixin(modalMixin(
  subscribedContainerMixin())
) implements OnDestroy {
  constructor(
    private purchaseService: PurchaseService,
    private modalService: BsModalService,
    private store: Store
  ) {
    super();
  }

  storeInjected = this.store;
  modalServiceInjected = this.modalService;

  purchaseDates$ = this.purchaseService.purchaseDates$;
  purchaseDateSubject$ = new BehaviorSubject<Date>(new Date());
  purchaseDateAction$ = this.purchaseDateSubject$.asObservable();
  purchases$ = this.purchaseDateAction$.pipe(
    mergeMap(date => this.purchaseService.getPurchasesForDate$(date)),
    tap((x) => this.store.dispatch(loadPurchasesSuccess({data: x}))),
    switchMap(() => this.store.select(selectAllPurchases))
  );

  // purchases$ = this.purchaseService.loadPurchases$;
  filteredPurchases$ = combineLatest([this.purchases$, this.filterStringAction$]).pipe(
    debounceTime(500),
    map(([purchases, filterString]) => purchases.filter(
      purchase => purchase?.productName?.toLowerCase().includes(filterString.toLowerCase()))),
  );

  maintainPurchase(id: number) {
    this.openModal({id, component: PurchaseMaintenanceComponent});
  }

  delete(id: number) {
    this.openModal({id, component: DeletePurchaseConfirmationComponent});
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.modalRef?.hide();
  }

}
