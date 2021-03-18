import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { InsightsComponent } from './insights.component';
import {DailyProfitPerProductModule} from './daily-profit-per-product/daily-profit-per-product.module';
import {DailySaleLinePlotModule} from './daily-sale-line-plot/daily-sale-line-plot.module';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from '../products/store/effects/products.effects';
import {CurrencyEffects} from '../products/store/effects/currency.effects';
import {DailyProfitLinePlotModule} from './daily-profit-line-plot/daily-profit-line-plot.module';
import {TodaysProfitPerProductModule} from './todays-profit-per-product/todays-profit-per-product.module';
import {DailyProfitMarginsLinePlotModule} from './daily-profit-margins-line-plot/daily-profit-margins-line-plot.module';
import {TotalProfitTodayModule} from './total-profit-today/total-profit-today.module';
import {TotalSalesTodayModule} from './total-sales-today/total-sales-today.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TotalPurchasesTodayModule} from './total-purchases-today/total-purchases-today.module';

describe('InsightsComponent', () => {
  let component: InsightsComponent;
  let fixture: ComponentFixture<InsightsComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        DailyProfitLinePlotModule,
        DailyProfitPerProductModule,
        DailySaleLinePlotModule,
        TodaysProfitPerProductModule,
        DailyProfitMarginsLinePlotModule,
        TotalProfitTodayModule,
        TotalSalesTodayModule,
        TotalProfitTodayModule,
        TotalPurchasesTodayModule,
        EffectsModule.forRoot(),
        EffectsModule.forFeature([ProductsEffects, CurrencyEffects]),
        BrowserAnimationsModule
      ],
      declarations: [ InsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
