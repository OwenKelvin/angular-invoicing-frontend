import { TestBed } from '@angular/core/testing';

import { MPesaService } from './m-pesa.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MPesaService', () => {
  let service: MPesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(MPesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
