import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSupportStaff from '../reducers/support-staff.reducer';
import * as fromUsers from '../reducers';

export const selectUsersState = createFeatureSelector<fromUsers.State>(
  fromUsers.usersFeatureKey
);

export const selectSupportStaffState = createSelector(
  selectUsersState,
  (users) => users?.[fromSupportStaff.supportStaffFeatureKey]
);

export const selectSupportStaffWithId = (id: number) => createSelector(
  selectSupportStaffState,
  (supportStaffProfile) => {
    return (supportStaffProfile && supportStaffProfile.staffs) ? supportStaffProfile.staffs[id] : null;
  }
);
