import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveComponentModule
  ],
  exports: [DatePickerComponent]
})
export class AppDatePickerModule { }
