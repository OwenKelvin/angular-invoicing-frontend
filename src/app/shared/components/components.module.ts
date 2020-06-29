import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ToastComponent } from './toast/toast.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from './input/app-input.module';
import { AppFullWidthCenteredContentModule } from './full-width-centered-content/app-full-width-centered-content.module';


@NgModule({
  declarations: [
    PasswordResetComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppFullWidthCenteredContentModule
  ],
  exports: [
    PasswordResetComponent,
    ToastComponent
  ]
})
export class ComponentsModule { }
