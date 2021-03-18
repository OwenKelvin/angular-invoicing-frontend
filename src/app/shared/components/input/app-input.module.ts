import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {InputComponent} from './input.component';
import {PasswordMeterModule} from 'src/app/pages/login/password-meter/password-meter.module';
import {ShowPasswordDirective} from './directives/show-password.directive';
import {ReactiveComponentModule} from '@ngrx/component';

@NgModule({
  declarations: [
    InputComponent,
    ShowPasswordDirective
  ],
  exports: [
    InputComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PasswordMeterModule,
    ReactiveComponentModule
  ]
})
export class AppInputModule {
}
