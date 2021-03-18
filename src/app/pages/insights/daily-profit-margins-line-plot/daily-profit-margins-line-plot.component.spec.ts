import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProfitMarginsLinePlotComponent } from './daily-profit-margins-line-plot.component';

describe('DailyProfitLinePlotComponent', () => {
  let component: DailyProfitMarginsLinePlotComponent;
  let fixture: ComponentFixture<DailyProfitMarginsLinePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyProfitMarginsLinePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProfitMarginsLinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
