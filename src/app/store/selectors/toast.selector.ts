// import { createSelector } from '@ngrx/store';
import { AppState } from './../reducers';

export const selectToastState = (state: AppState) => state.toast;
