import { TestBed } from '@angular/core/testing';

import { PurchasesReportService } from './purchases-report.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PurchasesReportService', () => {
  let service: PurchasesReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PurchasesReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
