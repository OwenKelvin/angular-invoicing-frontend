import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStackedBarPlotComponent } from './horizontal-stacked-bar-plot.component';

describe('HorizontalStackedBarPlotComponent', () => {
  let component: HorizontalStackedBarPlotComponent;
  let fixture: ComponentFixture<HorizontalStackedBarPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalStackedBarPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalStackedBarPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
