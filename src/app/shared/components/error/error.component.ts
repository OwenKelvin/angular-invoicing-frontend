import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store/reducers';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { Observable } from 'rxjs';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorBody$: Observable<any>;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.errorBody$ = this.store.select(selectErrorState);
  }

  closeMessage() {
    this.store.dispatch(loadErrorMessagesFailure());
  }

}
