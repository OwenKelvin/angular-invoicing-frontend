import { Action, createReducer, on } from '@ngrx/store';
import { hideMenu, showMenu } from './../actions/menu-toggle.actions';
import { IMenuState } from 'src/app/shared/interfaces/menu-state.interface';

export const menuToggleFeatureKey = 'menuToggle';


export const initialState: IMenuState = {
  showMenu: true
};

const menuToggleReducer = createReducer(
  initialState,
  on(showMenu, state => {
    return {
      ...state, showMenu : true
    };

  }),
  on(hideMenu, state => {
    return {
      ...state, showMenu : false
    };
  })
);

export function reducer(state: IMenuState | undefined, action: Action) {
  return menuToggleReducer(state, action);
}
