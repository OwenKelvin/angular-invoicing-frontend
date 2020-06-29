import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelInputComponent } from './tel-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TelInputComponent
  ],
  exports: [
    TelInputComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppTelInputModule { }