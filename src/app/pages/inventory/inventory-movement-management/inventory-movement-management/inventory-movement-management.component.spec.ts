import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {InventoryMovementManagementComponent} from './inventory-movement-management.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('InventoryMovementManagementComponent', () => {
  let component: InventoryMovementManagementComponent;
  let fixture: ComponentFixture<InventoryMovementManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ModalModule.forRoot()
      ],
      declarations: [InventoryMovementManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMovementManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
