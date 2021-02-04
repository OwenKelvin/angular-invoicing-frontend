import { Component } from '@angular/core';
import { formMixin } from 'src/app/mixins/form.mixin';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../users/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-password-reset',
  templateUrl: './user-password-reset.component.html',
  styleUrls: ['./user-password-reset.component.css']
})
export class UserPasswordResetComponent extends formMixin() {

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UsersService) { super(); }

  routeId$ = this.route.parent?.parent?.parent?.paramMap.pipe(map(params => Number(params.get('id'))));

  passwordResetForm = this.fb.group({
    resetPassword: ['Manager1', Validators.required]
  });
  submitPasswordReset = () => {
    this.submitInProgressSubject$.next(true);
    this.routeId$?.pipe(
      mergeMap(id =>
        this.userService.resetPasswordForUserWithId({
          id, resetPassword: this.passwordResetForm.get('resetPassword')?.value
        })),
      tap(() => this.submitInProgressSubject$.next(false))
    ).subscribe({ error: () => this.submitInProgressSubject$.next(false) });
  }
}
