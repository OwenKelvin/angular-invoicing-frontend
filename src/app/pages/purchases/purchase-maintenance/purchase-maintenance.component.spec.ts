import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PurchaseMaintenanceComponent } from './purchase-maintenance.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import {AppInputModule} from '../../../shared/components/input/app-input.module';

describe('PurchaseMaintenanceComponent', () => {
  let component: PurchaseMaintenanceComponent;
  let fixture: ComponentFixture<PurchaseMaintenanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppInputModule
      ],
      declarations: [PurchaseMaintenanceComponent],
      providers: [
        reducerProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
