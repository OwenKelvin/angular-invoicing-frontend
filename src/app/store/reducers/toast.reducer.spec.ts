import {reducer, initialState} from './toast.reducer';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppDatePickerModule} from '../../shared/components/date-picker/date-picker.module';


beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    imports: [
      AppDatePickerModule
    ]
  });
}));
describe('Toast Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
