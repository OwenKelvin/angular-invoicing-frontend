import {reducer, initialState} from './purchase.reducer';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppLoadingBubbleModule} from '../../../../shared/components/loading-bubble/app-loading-bubble';

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    imports: [AppLoadingBubbleModule]
  });
}));
describe('Purchase Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
