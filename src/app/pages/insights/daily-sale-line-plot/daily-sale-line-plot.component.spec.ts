import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySaleLinePlotComponent } from './daily-sale-line-plot.component';

describe('DailyProfitLinePlotComponent', () => {
  let component: DailySaleLinePlotComponent;
  let fixture: ComponentFixture<DailySaleLinePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySaleLinePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySaleLinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
