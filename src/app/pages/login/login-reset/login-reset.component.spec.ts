import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginResetComponent } from './login-reset.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
import { FullWithCenterComponent } from 'src/app/shared/components/full-with-center/full-with-center.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';

describe('LoginResetComponent', () => {
  let component: LoginResetComponent;
  let fixture: ComponentFixture<LoginResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ErrorModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [LoginResetComponent, FullWithCenterComponent, InputComponent],
      providers: [
        reducerProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as function submitPasswordResetForm', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    fixture.detectChanges();
    component.submitPasswordResetForm();
    expect(component).toBeTruthy();
    (component.passwordResetForm.get('email') as FormControl).setValue('admin@admin.com');
    fixture.detectChanges();
    component.submitPasswordResetForm();
  });
});
