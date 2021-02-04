import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesReportComponent } from './purchases-report.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('PurchasesReportComponent', () => {
  let component: PurchasesReportComponent;
  let fixture: ComponentFixture<PurchasesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
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
