import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoldProductsComponent } from './edit-sold-products.component';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('EditSoldProductsComponent', () => {
  let component: EditSoldProductsComponent;
  let fixture: ComponentFixture<EditSoldProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
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
