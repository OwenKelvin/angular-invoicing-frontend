import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { TotalProfitTodayComponent } from './total-profit-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';

describe('TotalProfitTodayComponent', () => {
  let component: TotalProfitTodayComponent;
  let fixture: ComponentFixture<TotalProfitTodayComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [DashboardWidgetModule],
      declarations: [ TotalProfitTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProfitTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
