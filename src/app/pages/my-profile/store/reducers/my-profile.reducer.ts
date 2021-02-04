import { Action, createReducer, on } from '@ngrx/store';
import * as MyProfileActions from '../actions/my-profile.actions';
import { IUserProfile as State, IUserProfile } from 'src/app/shared/interfaces/user-profile.interface';


export const myProfileFeatureKey = 'myProfile';


//  export interface State {
//   }

export const initialState: IUserProfile = {
  id: 0,
  lastName: '',
  firstName: '',
  middleName: '',
  otherNames: '',
  phone: '',
  email: '',
  dateOfBirth: '',
  permissions: [],
  roles: []
};

const myProfileReducer = createReducer(
  initialState,

  on(MyProfileActions.loadMyProfiles, state => state),
  on(MyProfileActions.loadMyProfilesSuccess, (state, action) => {
    return {...state, ...action.data};
  }),
  on(MyProfileActions.loadMyProfilesFailure, (state) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return myProfileReducer(state, action);
}
