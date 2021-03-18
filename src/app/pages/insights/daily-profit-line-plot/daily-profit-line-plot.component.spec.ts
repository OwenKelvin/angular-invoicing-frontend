import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DailyProfitLinePlotComponent} from './daily-profit-line-plot.component';
import {LinePlotModule} from '../line-plot/line-plot.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {reducer} from '../../products/store/reducers/products.reducer';
import {TotalProfitTodayModule} from '../total-profit-today/total-profit-today.module';
import {TotalSalesTodayModule} from '../total-sales-today/total-sales-today.module';
import {TotalPurchasesTodayModule} from '../total-purchases-today/total-purchases-today.module';

describe('DailyProfitLinePlotComponent', () => {
  let component: DailyProfitLinePlotComponent;
  let fixture: ComponentFixture<DailyProfitLinePlotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('products', reducer),
        LinePlotModule,
        TotalProfitTodayModule,
        TotalSalesTodayModule,
        TotalPurchasesTodayModule,
        BrowserAnimationsModule
      ],
      declarations: [DailyProfitLinePlotComponent],
      providers: [
        reducerProvider
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProfitLinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
