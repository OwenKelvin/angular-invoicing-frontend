import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromSupportStaff from './support-staff.reducer';

import * as fromRoot from 'src/app/store/reducers';

export const usersFeatureKey = 'users';


export interface SupportStaffState {
  [fromSupportStaff.supportStaffFeatureKey]: fromSupportStaff.State;

}

export interface State extends fromRoot.AppState {
  [fromSupportStaff.supportStaffFeatureKey]: fromSupportStaff.State;

}

export const reducers: ActionReducerMap<SupportStaffState> = {
  [fromSupportStaff.supportStaffFeatureKey]: fromSupportStaff.reducer,

};
