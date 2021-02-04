import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent implements OnInit {
  @Input() enabledDates$: Observable<string[]>;
  @Input() label: string;
  disabledDates$: Observable<Date[]>;
  minDate: Date;
  maxDate: Date = new Date();
  date: Date = new Date();

  @Output() ngModelChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.disabledDates$ = this.enabledDates$.pipe(
      map(dateStrings => ([
        ...dateStrings.map(dateString => new Date(dateString)),
        new Date()
      ])),
      tap(dates => this.minDate = dates.reduce((a, b) => a < b ? a : b)),
      map(dates => {
        const millisecondPerDay: number = 24 * 60 * 60 * 1000;
        const duration = Math.ceil((this.maxDate.getTime() - this.minDate.getTime()) / millisecondPerDay);
        const datesBetween: string[] = [...Array(duration + 1).keys()].map(i =>
          new Date(this.minDate.valueOf() + i * millisecondPerDay).toISOString().slice(0, 10));
        const enabledDates = [...dates].map(date => date.toISOString().slice(0, 10));
        return datesBetween.filter(x => !enabledDates.includes(x)).map(x => new Date(x));
      })
    );
  }
}
