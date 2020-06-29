import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppFormService } from 'src/app/shared/services/AppForm.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.less']
})
export class PasswordResetComponent implements OnInit {

  passwordResetForm: FormGroup;
  errors: {
    email: string | null;
  };
  constructor(
    private fb: FormBuilder,
    private appFormService: AppFormService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.errors = {
      email: null
    };
    this.passwordResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get email() {
    return this.passwordResetForm.get('email') as FormControl;
  }
  validateEmail() {
    this.errors.email = this.appFormService.getErrorMessage(this.email, 'Email');
  }
  get emailFieldClass() {
    const formControlClass = 'form-control';
    if (this.errors.email) {
      return `${formControlClass} is-invalid`;
    }
    return formControlClass;
  }
  submitPasswordResetForm() {
    if (this.passwordResetForm.valid) {
      this.authService.resetPassword({ email: this.email.value }).subscribe();
    } else {
      this.email.markAsTouched();
      this.validateEmail();
    }
  }
  updateEmailFieldValidation() {
    if (this.errors.email) {
      this.validateEmail();
    }
  }
}
