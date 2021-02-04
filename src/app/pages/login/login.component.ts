import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/reducers';
import { takeWhile, tap, map } from 'rxjs/operators';
import { loadErrorMessagesFailure, loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';
import { Subject, combineLatest, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { showToast } from 'src/app/store/actions/toast.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  triggerValidation: boolean;
  isSubmitting: boolean;
  componentIsActive = true;

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false]
  });

  inputSubmittedSubject$ = new Subject();
  inputSubmittedAction$ = this.inputSubmittedSubject$.asObservable();
  inputValid$ = this.loginForm.valueChanges.pipe(
    map(() => this.loginForm.valid),
    tap(() => this.inputSubmittedSubject$.next(false))
  );
  submitButtonActive$: Observable<any> = combineLatest([
    this.inputSubmittedAction$,
    this.inputValid$
  ]).pipe(
    map(([submitted, inputChange]) => {
      return !submitted && inputChange;
    }),
  );
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  submitLoginForm() {
    this.inputSubmittedSubject$.next(true);
    this.isSubmitting = true;
    if (this.loginForm.valid) {
      combineLatest([
        this.route.queryParams.pipe(map(params => params.returnUrl)),
        this.authService.login(this.loginForm.value)
      ]).pipe(
        takeWhile(() => this.componentIsActive),
      ).subscribe({
        next: this.loginSuccessful,
        error: error => {
          this.store.dispatch(loadErrorMessagesSuccess(error));
          this.isSubmitting = false;
        }
      });
    } else {
      this.loginForm.get('password')?.markAsTouched();
      this.loginForm.get('username')?.markAsTouched();
      this.triggerValidation = !this.triggerValidation;
    }
  }
  loginSuccessful = ([returnUrl ]: any []) => {
    returnUrl = returnUrl || '/dashboard';
    this.isSubmitting = false;
    this.store.dispatch(loadErrorMessagesFailure());
    this.store.dispatch(showToast({
      data: {
        toastHeader: 'Login Successful!',
        toastBody: 'Successfully authenticated',
        showMessage: true,
        toastTime: 'Just Now'
      }
    }));
    this.router.navigate([returnUrl]);
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
