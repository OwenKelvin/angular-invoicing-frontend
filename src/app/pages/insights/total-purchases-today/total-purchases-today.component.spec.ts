import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { TotalPurchasesTodayComponent } from './total-purchases-today.component';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';

describe('TotalProfitTodayComponent', () => {
  let component: TotalPurchasesTodayComponent;
  let fixture: ComponentFixture<TotalPurchasesTodayComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        DashboardWidgetModule
      ],
      declarations: [ TotalPurchasesTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPurchasesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
