import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoldProductsComponent } from './edit-sold-products.component';

describe('EditSoldProductsComponent', () => {
  let component: EditSoldProductsComponent;
  let fixture: ComponentFixture<EditSoldProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSoldProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoldProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
