import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPasswordResetComponent } from './user-password-reset.component';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    UserPasswordResetComponent
  ],
  imports: [
    CommonModule,
    ErrorModule,
    ReactiveFormsModule,
    AppInputModule,
    ReactiveComponentModule
  ]
})
export class UserPasswordResetModule { }
