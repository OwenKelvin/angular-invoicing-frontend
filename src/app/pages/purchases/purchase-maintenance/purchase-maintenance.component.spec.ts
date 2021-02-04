import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PurchaseMaintenanceComponent } from './purchase-maintenance.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import {AppInputModule} from '../../../shared/components/input/app-input.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { of } from 'rxjs';

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
        AppInputModule,
        NgSelectModule
      ],
      declarations: [PurchaseMaintenanceComponent],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            pipe: () => of([]),
            dispatch: () => { }
          }
        }
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
