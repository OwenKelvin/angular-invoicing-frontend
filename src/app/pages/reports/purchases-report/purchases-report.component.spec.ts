import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PurchasesReportComponent } from './purchases-report.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PurchasesReportComponent', () => {
  let component: PurchasesReportComponent;
  let fixture: ComponentFixture<PurchasesReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ PurchasesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
