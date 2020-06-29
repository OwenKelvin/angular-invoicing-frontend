import { Component, OnInit, Input, forwardRef, SimpleChanges, SimpleChange, OnChanges, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  constructor() { }
  @Input() label: string;
  @Input() readonly: boolean;
  @Output() ngModelChange = new EventEmitter();
  inputValue: any;
  onTouched: any;
  onChanges: (val: any) => void = (val) => {
    this.ngModelChange.emit(val);
  };

  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }
  registerOnChange(fn: any): void {

    this.onChanges = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  propagateValue(event: boolean) {
    this.onChanges(event);
  }
}
