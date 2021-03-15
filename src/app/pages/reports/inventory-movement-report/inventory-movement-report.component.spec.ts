import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { InventoryMovementReportComponent } from './inventory-movement-report.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppPrintModule} from '../../../shared/print/print.module';
import {AppInputModule} from '../../../shared/components/input/app-input.module';

describe('InventoryMovementReportComponent', () => {
  let component: InventoryMovementReportComponent;
  let fixture: ComponentFixture<InventoryMovementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppPrintModule,
        AppInputModule,
        ReactiveFormsModule,
        NgSelectModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule
      ],
      declarations: [ InventoryMovementReportComponent ],
      providers: [
        reducerProvider
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMovementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
