import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '../reducers';

import { editModeFeatureKey } from '../reducers/edit-mode.reducer';

export const selectAppState = createFeatureSelector<fromApp.AppState>(
  fromApp.appFeatureKey
);

export const selectEditModeOnState = createSelector(
  selectAppState,
  app => app ? app[editModeFeatureKey].on: false
);