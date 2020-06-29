import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoldProductComponent } from './edit-sold-product.component';

describe('EditSoldProductComponent', () => {
  let component: EditSoldProductComponent;
  let fixture: ComponentFixture<EditSoldProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
