import { TestBed } from '@angular/core/testing';

import { MPesaReceiptsService } from './m-pesa-receipts.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MPesaReceiptsService', () => {
  let service: MPesaReceiptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MPesaReceiptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
