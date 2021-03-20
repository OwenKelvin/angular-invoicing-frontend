import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.less']
})
export class InsightsComponent implements OnInit {
  currentDate = new Date();
  endDate = new Date().toISOString().substr(0, 10);
  startDate = new Date(new Date().setMonth(new Date().getMonth() - 1))
    .toISOString().substr(0, 10);

  summaryDate = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
