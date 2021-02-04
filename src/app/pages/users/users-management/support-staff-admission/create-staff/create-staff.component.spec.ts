import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateStaffComponent } from './create-staff.component';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducer } from 'src/app/store/reducers/toast.reducer';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { AppTelInputModule } from 'src/app/shared/components/tel-input/tel-input.module';
import { AppValidateSubmitButtonModule } from 'src/app/shared/components/validate-submit-buttons/app-validate-submit-buttons.module';

describe('CreateStaffComponent', () => {
  let component: CreateStaffComponent;
  let fixture: ComponentFixture<CreateStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('admissions', reducer),
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppTelInputModule,
        AppValidateSubmitButtonModule
      ],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            pipe: () => of({}),
            dispatch: () => ({ })
          }
        }
      ],
      declarations: [CreateStaffComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
