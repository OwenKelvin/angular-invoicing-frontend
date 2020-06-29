import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromModal from '../reducers/modal.reducer';

export const selectModalState = createFeatureSelector<fromModal.State>(
  fromModal.modalFeatureKey
);

export const selectModalOpenState = createSelector(
  selectModalState,
  modal => modal.open
);