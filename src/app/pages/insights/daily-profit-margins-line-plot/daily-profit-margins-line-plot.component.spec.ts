import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProfitMarginsLinePlotComponent } from './daily-profit-margins-line-plot.component';
import {LinePlotModule} from '../line-plot/line-plot.module';

describe('DailyProfitLinePlotComponent', () => {
  let component: DailyProfitMarginsLinePlotComponent;
  let fixture: ComponentFixture<DailyProfitMarginsLinePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinePlotModule],
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
