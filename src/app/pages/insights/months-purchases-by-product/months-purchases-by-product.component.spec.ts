import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsPurchasesByProductComponent } from './months-purchases-by-product.component';

describe('MonthsPurchasesByProductComponent', () => {
  let component: MonthsPurchasesByProductComponent;
  let fixture: ComponentFixture<MonthsPurchasesByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthsPurchasesByProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsPurchasesByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
