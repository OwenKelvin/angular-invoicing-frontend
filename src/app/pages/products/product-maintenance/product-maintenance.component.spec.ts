import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductMaintenanceComponent } from './product-maintenance.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {AppInputModule} from '../../../shared/components/input/app-input.module';

describe('ProductMaintenanceComponent', () => {
  let component: ProductMaintenanceComponent;
  let fixture: ComponentFixture<ProductMaintenanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppLoadingBubbleModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppInputModule
      ],
      declarations: [ProductMaintenanceComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
