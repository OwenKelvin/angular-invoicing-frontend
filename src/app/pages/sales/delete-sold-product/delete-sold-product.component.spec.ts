import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSoldProductComponent } from './delete-sold-product.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('DeleteSoldProductComponent', () => {
  let component: DeleteSoldProductComponent;
  let fixture: ComponentFixture<DeleteSoldProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ DeleteSoldProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSoldProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
