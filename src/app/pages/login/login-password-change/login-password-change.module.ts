import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPasswordChangeRoutingModule } from './login-password-change-routing.module';
import { LoginPasswordChangeComponent } from './login-password-change.component';
import { PasswordChangeFormModule } from '../password-change-form/password-change-form.module';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [LoginPasswordChangeComponent],
  imports: [
    CommonModule,
    LoginPasswordChangeRoutingModule,
    ErrorModule,
    AppLayoutModule,
    PasswordChangeFormModule,
    ReactiveComponentModule
  ]
})
export class LoginPasswordChangeModule { }
