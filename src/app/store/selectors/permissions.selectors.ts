import { createSelector } from '@ngrx/store';
import { selectAppState } from './app.selectors';
import { permissionsFeatureKey } from '../reducers/permissions.reducer';

export const selectAppPermissionsState = createSelector(
  selectAppState,
  state => state?.[permissionsFeatureKey]
);

export const selectDashdoardLinks = createSelector(
  selectAppPermissionsState,
  state => state?.dashboard
);

export const selectReportsLinks = createSelector(
  selectAppPermissionsState,
  state => state?.reports
);

export const salesLinks = createSelector(
  selectAppPermissionsState,
  state => state?.sales
);

export const allLinks = createSelector(
  selectAppPermissionsState,
  state => state ? Object.values(state)?.reduce((a, b) => ([...a, ...b]), []) : null
);

