import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { SaleEffects } from './sale.effects';

describe('SaleEffects', () => {
  const actions$: Observable<any> = of({ });
  let effects: SaleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SaleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<SaleEffects>(SaleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
