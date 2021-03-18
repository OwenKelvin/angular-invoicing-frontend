import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { LinePlotComponent } from './line-plot.component';
import {LineChartModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LinePlotComponent', () => {
  let component: LinePlotComponent;
  let fixture: ComponentFixture<LinePlotComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        LineChartModule,
        BrowserAnimationsModule
      ],
      declarations: [ LinePlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
