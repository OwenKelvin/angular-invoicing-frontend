import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProfitLinePlotComponent } from './daily-profit-line-plot.component';

describe('DailyProfitLinePlotComponent', () => {
  let component: DailyProfitLinePlotComponent;
  let fixture: ComponentFixture<DailyProfitLinePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyProfitLinePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProfitLinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
