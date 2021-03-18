import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { TotalSalesTodayComponent } from './total-sales-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';

describe('TotalProfitTodayComponent', () => {
  let component: TotalSalesTodayComponent;
  let fixture: ComponentFixture<TotalSalesTodayComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [DashboardWidgetModule],
      declarations: [ TotalSalesTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSalesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
