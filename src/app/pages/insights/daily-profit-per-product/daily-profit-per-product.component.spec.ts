import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { DailyProfitPerProductComponent } from './daily-profit-per-product.component';
import {LoadProductsModule} from '../../products/load-products/load-products.module';
import {HorizontalStackedBarPlotModule} from '../horizontal-stacked-bar-plot/horizontal-stacked-bar-plot.module';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from '../../products/store/effects/products.effects';
import {CurrencyEffects} from '../../products/store/effects/currency.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DailyProfitPerProductComponent', () => {
  let component: DailyProfitPerProductComponent;
  let fixture: ComponentFixture<DailyProfitPerProductComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        EffectsModule.forRoot(),
        EffectsModule.forFeature([ProductsEffects, CurrencyEffects]),
        LoadProductsModule,
        HorizontalStackedBarPlotModule
      ],
      declarations: [ DailyProfitPerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProfitPerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
