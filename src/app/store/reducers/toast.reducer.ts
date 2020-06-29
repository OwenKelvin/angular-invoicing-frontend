import { Action, createReducer, on } from '@ngrx/store';
import { showToast, hideToast } from '../actions/toast.actions';
import { IToastState } from 'src/app/shared/interfaces/toast-state.interface';

export const toastFeatureKey = 'toast';


export const initialState: IToastState = {
  showMessage: false,
  toastHeader: '',
  toastBody: '',
  toastTime: ''
};

const toastReducer = createReducer(
  initialState,
  on(showToast, (state, payload) => ({ ...state, ...payload.data })),
  on(hideToast, state => ({ ...state, ...initialState })),
);

export function reducer(state: IToastState | undefined, action: Action) {
  return toastReducer(state, action);
}
