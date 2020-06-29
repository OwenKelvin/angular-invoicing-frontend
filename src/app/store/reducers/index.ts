import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { InjectionToken } from '@angular/core';

import * as fromToast from './toast.reducer';
import * as fromMenuToggle from './menu-toggle.reducer';
import * as fromModals from './modal.reducer';
import * as fromErrors from './error-message.reducer';
import * as fromEditMode from './edit-mode.reducer';
import * as fromPermissions from './permissions.reducer';
import { IToastState } from 'src/app/shared/interfaces/toast-state.interface';
import { IMenuState } from 'src/app/shared/interfaces/menu-state.interface';

export const appFeatureKey = 'app';

export interface AppState {
  [fromToast.toastFeatureKey]: IToastState;
  [fromMenuToggle.menuToggleFeatureKey]: IMenuState;
  [fromModals.modalFeatureKey]: fromModals.State;
  [fromErrors.errorMessageFeatureKey]: fromErrors.ErrorMessageStateInterface;
  [fromEditMode.editModeFeatureKey]: fromEditMode.State;
  [fromPermissions.permissionsFeatureKey]: fromPermissions.State

}

export const reducers: ActionReducerMap<AppState> = {
  [fromToast.toastFeatureKey]: fromToast.reducer,
  [fromMenuToggle.menuToggleFeatureKey]: fromMenuToggle.reducer,
  [fromModals.modalFeatureKey]: fromModals.reducer,
  [fromErrors.errorMessageFeatureKey]: fromErrors.reducer,
  [fromEditMode.editModeFeatureKey]: fromEditMode.reducer,
  [fromPermissions.permissionsFeatureKey]: fromPermissions.reducer
};


export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
export const reducerProvider = { provide: REDUCER_TOKEN, useValue: reducers };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
