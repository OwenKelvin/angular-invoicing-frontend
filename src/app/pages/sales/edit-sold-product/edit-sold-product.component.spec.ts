import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSoldProductComponent } from './edit-sold-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EditSoldProductComponent', () => {
  let component: EditSoldProductComponent;
  let fixture: ComponentFixture<EditSoldProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ EditSoldProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoldProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
