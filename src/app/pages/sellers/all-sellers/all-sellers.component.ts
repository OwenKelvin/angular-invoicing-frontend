import { Component, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SellerService } from '../shared/services/seller.service';
import { Store } from '@ngrx/store';
import { SellerMaintenanceComponent } from '../seller-maintenance/seller-maintenance.component';
import {
  DeleteSellerConfirmationComponent
} from '../delete-seller-confirmation/delete-seller-confirmation.component';
import { modalMixin } from 'src/app/mixins/modal.mixin';

@Component({
  selector: 'app-all-sellers',
  templateUrl: './all-sellers.component.html',
  styleUrls: ['./all-sellers.component.less']
})
export class AllSellersComponent extends modalMixin() implements OnDestroy {
  storeInjected = this.store;
  modalServiceInjected = this.modalService;
  constructor(
    private sellerService: SellerService,
    private modalService: BsModalService,
    private store: Store
  ) { super(); }

  sellers$ = this.sellerService.loadSellers$;

  maintainSeller(id: number) {
    this.openModal({ id, component: SellerMaintenanceComponent });
  }
  

  delete(id: number) {
    this.openModal({ id, component: DeleteSellerConfirmationComponent });
  }
  ngOnDestroy() {
    this.modalRef?.hide();
  }
}
