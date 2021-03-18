import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginTokenRoutingModule } from './login-token-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginTokenComponent } from './login-token.component';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [LoginTokenComponent],
  imports: [
    CommonModule,
    LoginTokenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppLayoutModule,
    ErrorModule,
    ReactiveComponentModule

  ]
})
export class LoginTokenModule { }
