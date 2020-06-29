import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginContactAdminComponent } from './login-contact-admin/login-contact-admin.component';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { ErrorModule } from 'src/app/shared/components/error/error.module';



@NgModule({
  declarations: [
    LoginComponent,
    LoginContactAdminComponent,
    LoginResetComponent,
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    AppInputModule,
    AppLayoutModule,
    ErrorModule

  ],
  exports: []
})
export class LoginModule { }
