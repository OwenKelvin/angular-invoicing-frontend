import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateGuard } from './can-deactivate.guard';
import { of } from 'rxjs';

describe('CanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuard]
    });
  });

  it('should create', inject([CanDeactivateGuard], (guard: CanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should create', inject([CanDeactivateGuard], (guard: CanDeactivateGuard) => {
    const canComponentDeactivate = jasmine.createSpyObj({ canDeactivate: () => of(true) });
    expect(guard.canDeactivate(canComponentDeactivate)).toBeTruthy();
  }));
});
