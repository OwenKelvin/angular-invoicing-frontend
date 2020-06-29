import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidateSubmitButtonsComponent } from './validate-submit-buttons.component';

@NgModule({
  declarations: [
    ValidateSubmitButtonsComponent
  ],
  exports: [
    ValidateSubmitButtonsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AppValidateSubmitButtonModule { }
