import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidateSubmitButtonsComponent } from './validate-submit-buttons.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    ValidateSubmitButtonsComponent
  ],
  exports: [
    ValidateSubmitButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppValidateSubmitButtonModule { }
