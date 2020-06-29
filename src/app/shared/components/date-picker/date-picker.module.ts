import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  exports: [DatePickerComponent]
})
export class AppDatePickerModule { }
