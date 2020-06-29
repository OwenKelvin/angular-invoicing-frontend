import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPesaReceiptReportComponent } from './m-pesa-receipt-report.component';

describe('MPesaReceiptReportComponent', () => {
  let component: MPesaReceiptReportComponent;
  let fixture: ComponentFixture<MPesaReceiptReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPesaReceiptReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPesaReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
