import * as fromSupportStaff from '../reducers/support-staff.reducer';
import {selectSupportStaffState} from './support-staff.selectors';

describe('SupportStaff Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSupportStaffState({
      users : {[fromSupportStaff.supportStaffFeatureKey]: fromSupportStaff.initialState}
    });

    expect(result).toEqual(fromSupportStaff.initialState);
  });
});
