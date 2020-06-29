import { Action, createReducer, on } from '@ngrx/store';
import * as StaffTypsActions from '../actions/staff-type.actions';

export const staffTypeFeatureKey = 'staffTypes';

export interface State {
  [id: number]: {
    id?: number;
    name?: string;
  }
}

export const initialState: State = { };

const staffTypeReducer = createReducer(
  initialState,
  on(StaffTypsActions.loadStaffTypes, state => state),
  on(StaffTypsActions.loadStaffTypesSuccess, (state, action) =>
    ({ ...state, ...action.data.reduce((a, b) => ({...a, [b.id] : b }))})
  ),
  on(StaffTypsActions.loadStaffTypesFailure, (state, _action) => state),
);

export function reducer(state: State[] | undefined, action: Action) {
  return staffTypeReducer(state, action);
}
