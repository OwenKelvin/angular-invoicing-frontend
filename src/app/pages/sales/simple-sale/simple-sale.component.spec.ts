import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSaleComponent } from './simple-sale.component';

describe('SimpleSaleComponent', () => {
  let component: SimpleSaleComponent;
  let fixture: ComponentFixture<SimpleSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
