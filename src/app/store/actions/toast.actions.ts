import { createAction, props } from '@ngrx/store';
import { IToastState } from 'src/app/shared/interfaces/toast-state.interface';

export const showToast = createAction(
  '[Toast] Show Toast Message',
  props<{ data: IToastState; }>()
);

export const hideToast = createAction(
  '[Toast] Hide Toast Message'
);
