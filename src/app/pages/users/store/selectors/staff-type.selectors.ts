import { createSelector } from '@ngrx/store';

import { selectAdmissionsState } from './admissions.selectors';
import { staffTypeFeatureKey } from '../reducers/staff-type.reducer';

export const selectStaffTypesState = createSelector(
  selectAdmissionsState,
  admissions =>  admissions ? admissions[staffTypeFeatureKey] : {}
);

export const selectStaffTypes = createSelector(
  selectStaffTypesState,
  admissions => Object.values(admissions).filter(a => a.id > 0)
);

export const selectStaffType = (id: number) => createSelector(
  selectStaffTypesState,
  (staffType: any) => staffType ? staffType[id] : null
);
