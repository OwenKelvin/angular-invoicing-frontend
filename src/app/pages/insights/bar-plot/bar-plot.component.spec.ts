import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { BarPlotComponent } from './bar-plot.component';
import {BarChartModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('HorizontalStackedBarPlotComponent', () => {
  let component: BarPlotComponent;
  let fixture: ComponentFixture<BarPlotComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BarChartModule],
      declarations: [ BarPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
