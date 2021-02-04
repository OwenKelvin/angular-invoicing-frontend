import { createSelector } from '@ngrx/store';
import { errorMessageFeatureKey } from '../reducers/error-message.reducer';
import { selectAppState } from './app.selectors';

export const selectErrorState = createSelector(
  selectAppState,
  app => app?.[errorMessageFeatureKey]
);
