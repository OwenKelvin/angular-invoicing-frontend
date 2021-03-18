import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { DailySaleLinePlotComponent } from './daily-sale-line-plot.component';
import {LinePlotModule} from '../line-plot/line-plot.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {reducer} from '../../products/store/reducers/products.reducer';

describe('DailyProfitLinePlotComponent', () => {
  let component: DailySaleLinePlotComponent;
  let fixture: ComponentFixture<DailySaleLinePlotComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [LinePlotModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('products', reducer),
      ],
      declarations: [ DailySaleLinePlotComponent ],
      providers: [
        reducerProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySaleLinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
