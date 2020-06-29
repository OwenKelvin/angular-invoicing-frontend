import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { IToastState } from '../../interfaces/toast-state.interface';
import { selectToastState } from 'src/app/store/selectors/toast.selector';
import { takeWhile, tap } from 'rxjs/operators';
import { hideToast } from 'src/app/store/actions/toast.actions';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less']
})
export class ToastComponent implements OnDestroy{
  componentIsActive = true;
  toast$: Observable<IToastState> = this.store.pipe(
    select(selectToastState),
    takeWhile(() => this.componentIsActive),
    tap((toast) => {
      if (toast.showMessage) {
        setTimeout(() => {
          this.hideToast();
        }, 4000);
      }
    })
  )

  constructor(private store: Store<AppState>) { }


  hideToast() {
    this.store.dispatch(hideToast());
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
