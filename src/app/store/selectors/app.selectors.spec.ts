import * as fromApp from '../reducers';
import { selectAppState } from './app.selectors';

import { editModeFeatureKey } from '../reducers/edit-mode.reducer';

describe('App Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAppState({
      [fromApp.appFeatureKey]: {
        [editModeFeatureKey]: { on: false }
      }
    });
    expect(result as any).toEqual({
      [editModeFeatureKey]: {on: false}
    });
  });
});
