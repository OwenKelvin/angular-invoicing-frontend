import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMovementManagementComponent } from './inventory-movement-management.component';

describe('InventoryMovementManagementComponent', () => {
  let component: InventoryMovementManagementComponent;
  let fixture: ComponentFixture<InventoryMovementManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryMovementManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMovementManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
