import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { InventoryMovementReportComponent } from './inventory-movement-report.component';

describe('InventoryMovementReportComponent', () => {
  let component: InventoryMovementReportComponent;
  let fixture: ComponentFixture<InventoryMovementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NgSelectModule
      ],
      declarations: [ InventoryMovementReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMovementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
