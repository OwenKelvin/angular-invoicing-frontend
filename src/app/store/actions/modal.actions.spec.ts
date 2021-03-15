import * as fromModal from './modal.actions';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../reducers';
import {TestBed, waitForAsync} from '@angular/core/testing';

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
    ],
    providers: [reducerProvider]
  });
}));
describe('loadModals', () => {
  it('should return an action', () => {
    expect(fromModal.loadModals().type).toBe('[Modal] Load Modals');
  });
});
