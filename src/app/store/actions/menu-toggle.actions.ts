import { createAction, props } from '@ngrx/store';

export const menuToggles = createAction(
  '[MenuToggle] toggle Menu'
);

export const showMenu = createAction(
  '[MenuToggle] show Menu'
);

export const hideMenu = createAction(
  '[MenuToggle] hide menu'
);
