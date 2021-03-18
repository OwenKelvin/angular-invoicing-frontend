import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodaysProfitPerProductComponent} from './todays-profit-per-product.component';
import {LoadProductsModule} from '../../products/load-products/load-products.module';
import {HorizontalStackedBarPlotModule} from '../horizontal-stacked-bar-plot/horizontal-stacked-bar-plot.module';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from '../../products/store/effects/products.effects';
import {CurrencyEffects} from '../../products/store/effects/currency.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TodaysProfitPerProductComponent', () => {
  let component: TodaysProfitPerProductComponent;
  let fixture: ComponentFixture<TodaysProfitPerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoadProductsModule,
        EffectsModule.forRoot(),
        EffectsModule.forFeature([ProductsEffects, CurrencyEffects]),
        HorizontalStackedBarPlotModule,
        BrowserAnimationsModule
      ],
      declarations: [TodaysProfitPerProductComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysProfitPerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
