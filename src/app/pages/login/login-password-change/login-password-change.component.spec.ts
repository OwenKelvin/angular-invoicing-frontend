import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginPasswordChangeComponent } from './login-password-change.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { PasswordChangeFormModule } from '../password-change-form/password-change-form.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { EffectsModule } from '@ngrx/effects';

describe('LoginPasswordChangeComponent', () => {
  let component: LoginPasswordChangeComponent;
  let fixture: ComponentFixture<LoginPasswordChangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
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
        AppLayoutModule,
        PasswordChangeFormModule,
        HttpClientTestingModule,
        RouterTestingModule,
        EffectsModule.forRoot()
      ],
      declarations: [LoginPasswordChangeComponent],
      providers: [
        reducerProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
