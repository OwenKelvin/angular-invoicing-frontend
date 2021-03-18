import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { HorizontalStackedBarPlotComponent } from './horizontal-stacked-bar-plot.component';
import {BarChartModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('HorizontalStackedBarPlotComponent', () => {
  let component: HorizontalStackedBarPlotComponent;
  let fixture: ComponentFixture<HorizontalStackedBarPlotComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BarChartModule],
      declarations: [ HorizontalStackedBarPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalStackedBarPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
