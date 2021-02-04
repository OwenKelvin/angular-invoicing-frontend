import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MPesaReceiptReportComponent } from './m-pesa-receipt-report.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MPesaReceiptReportComponent', () => {
  let component: MPesaReceiptReportComponent;
  let fixture: ComponentFixture<MPesaReceiptReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
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
