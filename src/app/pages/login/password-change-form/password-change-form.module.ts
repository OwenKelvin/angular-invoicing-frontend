import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordChangeFormComponent } from './password-change-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    PasswordChangeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    RouterModule,
    ReactiveComponentModule,
  ],
  exports: [PasswordChangeFormComponent]
})
export class PasswordChangeFormModule { }
