import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorDirective } from 'src/app/shared/validators/email.validator';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { subscribedContainerMixin } from 'src/app/mixins/subscribed-container.mixin';
import { formMixin } from 'src/app/mixins/form.mixin';

@Component({
  selector: 'app-login-reset',
  templateUrl: './login-reset.component.html',
  styleUrls: ['./login-reset.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginResetComponent extends formMixin(subscribedContainerMixin()) {
  passwordResetForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, new EmailValidatorDirective()]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { super(); }

  submitPasswordResetForm() {

    this.submitInProgressSubject$.next(true)
    if (this.passwordResetForm.valid) {
      this.authService.resetPassword(this.passwordResetForm.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe({
          next: () => {
            this.router.navigate(['/login', 'token'], {queryParamsHandling: 'preserve'})
            this.submitInProgressSubject$.next(false)
          },
          error: () => this.submitInProgressSubject$.next(false)
        });
    } else {
      this.passwordResetForm.get('email')?.markAsTouched();
    }
  }
}
