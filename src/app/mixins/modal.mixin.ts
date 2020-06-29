

import { Constructor } from './constructor.mixin';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Store, select } from '@ngrx/store';
import { closeModals, loadModals } from 'src/app/store/actions/modal.actions';
import { filter, tap, takeWhile } from 'rxjs/operators';
import { selectModalOpenState } from 'src/app/store/selectors/modal.selectors';

export const modalMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass {
    componentIsActive = true;
    config: ModalOptions = {
      initialState: { id: 0 },
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
    };
    modalRef: BsModalRef;
    modalServiceInjected: BsModalService;
    storeInjected: Store<any>
    modalIsOpen: boolean;
    constructor(...args: any[]) {
      super(...args);
      this.modalServiceInjected = args[0]
      this.storeInjected = args[1]
    }

    openModal({ id, component }: { id: number; component: any; }) {
      this.storeInjected.dispatch(loadModals());
      this.config.initialState = { id };
      this.modalRef = this.modalServiceInjected.show(component, this.config);
      this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
      this.storeInjected.pipe(
        select(selectModalOpenState),
        tap((open) => this.modalIsOpen = open),
        filter(open => !open),
        tap(() => this.modalRef.hide()),
        takeWhile(() => this.componentIsActive)
      ).subscribe();
    }

    closeModal() {
      this.storeInjected.dispatch(closeModals());
    }
    
    canDeactivate(): boolean {
      if (this.modalIsOpen) {
        return confirm('Do you wish to exit Form?');
      }
      return true;
    }
  };