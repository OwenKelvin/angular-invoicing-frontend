import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProfitPerProductComponent } from './daily-profit-per-product.component';

describe('DailyProfitPerProductComponent', () => {
  let component: DailyProfitPerProductComponent;
  let fixture: ComponentFixture<DailyProfitPerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyProfitPerProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProfitPerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
