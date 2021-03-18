import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysProfitPerProductComponent } from './todays-profit-per-product.component';

describe('TodaysProfitPerProductComponent', () => {
  let component: TodaysProfitPerProductComponent;
  let fixture: ComponentFixture<TodaysProfitPerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysProfitPerProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysProfitPerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
