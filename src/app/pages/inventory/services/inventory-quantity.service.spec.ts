import { TestBed } from '@angular/core/testing';

import { InventoryQuantityService } from './inventory-quantity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {AppPrintModule} from '../../../shared/print/print.module';

describe('InventoryQuantityService', () => {
  let service: InventoryQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppPrintModule
      ]
    });
    service = TestBed.inject(InventoryQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
