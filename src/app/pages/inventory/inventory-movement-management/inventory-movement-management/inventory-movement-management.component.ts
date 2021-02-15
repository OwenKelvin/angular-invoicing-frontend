import {Component, OnInit} from '@angular/core';
import {InventoryQuantityService} from '../../services/inventory-quantity.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {PurchaseMaintenanceComponent} from '../../../purchases/purchase-maintenance/purchase-maintenance.component';
import {modalMixin} from '../../../../mixins/modal.mixin';
import {DeletePurchaseConfirmationComponent} from '../../../purchases/delete-purchase-confirmation/delete-purchase-confirmation.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Store} from '@ngrx/store';
import {DeleteSoldProductComponent} from '../../../sales/delete-sold-product/delete-sold-product.component';
import {EditSoldProductComponent} from '../../../sales/edit-sold-product/edit-sold-product.component';
import {BehaviorSubject, combineLatest} from 'rxjs';

@Component({
  selector: 'app-inventory-movement-management',
  templateUrl: './inventory-movement-management.component.html',
  styleUrls: ['./inventory-movement-management.component.less']
})
export class InventoryMovementManagementComponent extends modalMixin() implements OnInit {
  inventoryId$ = this.activatedRoute.paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  refresh$ = new BehaviorSubject(true);

  inventoryStatement$ = combineLatest([
    this.inventoryId$,
    this.refresh$
  ]).pipe(
    switchMap(([productId]) => this.inventoryService.changesStatement(productId))
  );

  constructor(
    private inventoryService: InventoryQuantityService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private store: Store
  ) {
    super();
  }

  storeInjected = this.store;
  modalServiceInjected = this.modalService;

  maintainPurchase(id: number) {
    this.openModal({id, component: PurchaseMaintenanceComponent});
  }

  deletePurchase(id: number) {
    this.openModal({id, component: DeletePurchaseConfirmationComponent});
  }

  deleteSoldItem(id: number) {
    this.openModal({id, component: DeleteSoldProductComponent});
  }

  editSoldItem(id: number) {
    this.openModal({id, component: EditSoldProductComponent});
  }

  editAdjustment(id: number) {
    console.log('Editing' + id);
    alert('Sorry Feature not Implemented Yet');
  }

  deleteAdjustment(id: number) {
    console.log('deleting' + id);
    alert('Sorry Feature not Implemented Yet');
  }

  ngOnInit(): void {
  }

}
