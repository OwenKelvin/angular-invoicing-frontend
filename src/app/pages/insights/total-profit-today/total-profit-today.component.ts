import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-total-profit-today',
  templateUrl: './total-profit-today.component.html',
  styleUrls: ['./total-profit-today.component.less']
})
export class TotalProfitTodayComponent implements OnInit {
  salesToday$: Observable<number> = of(1600);

  constructor() { }

  ngOnInit(): void {
  }

}
