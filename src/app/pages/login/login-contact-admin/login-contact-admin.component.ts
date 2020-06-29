import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppFormService } from 'src/app/shared/services/AppForm.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login-contact-admin',
  templateUrl: './login-contact-admin.component.html',
  styleUrls: ['./login-contact-admin.component.css']
})
export class LoginContactAdminComponent implements OnInit {
  loginContactAdminForm: FormGroup;
  errors: {
    email: string | null;
  };
  constructor(
    private fb: FormBuilder,
    private appFormService: AppFormService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.errors = {
      email: null
    };
    this.loginContactAdminForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get email(): FormControl {
    return this.loginContactAdminForm.get('email') as FormControl;
  }

  submitLoginContactAdminForm() {
    if (this.loginContactAdminForm.valid) {
      this.authService.contactAdmin({email: this.email.value}).subscribe((success) => {
        alert(success.message);
      });
    } else {
      this.email.markAsTouched();
    }
  }
}
