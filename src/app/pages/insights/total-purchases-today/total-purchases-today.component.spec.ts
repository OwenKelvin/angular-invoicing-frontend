import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPurchasesTodayComponent } from './total-purchases-today.component';

describe('TotalProfitTodayComponent', () => {
  let component: TotalPurchasesTodayComponent;
  let fixture: ComponentFixture<TotalPurchasesTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPurchasesTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPurchasesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
