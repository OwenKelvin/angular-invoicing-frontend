import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserPasswordResetComponent } from './user-password-reset.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';

describe('UserPasswordResetComponent', () => {
  let component: UserPasswordResetComponent;
  let fixture: ComponentFixture<UserPasswordResetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppInputModule
      ],
      declarations: [ UserPasswordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
