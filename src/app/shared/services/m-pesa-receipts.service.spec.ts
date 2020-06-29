import { TestBed } from '@angular/core/testing';

import { MPesaReceiptsService } from './m-pesa-receipts.service';

describe('MPesaReceiptsService', () => {
  let service: MPesaReceiptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MPesaReceiptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
