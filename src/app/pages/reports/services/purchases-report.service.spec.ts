import { TestBed } from '@angular/core/testing';

import { PurchasesReportService } from './purchases-report.service';

describe('PurchasesReportService', () => {
  let service: PurchasesReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasesReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
