import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.less']
})
export class InsightsComponent implements OnInit {
  currentDate = new Date();
  // endDate = new Date().toISOString().substr(0, 10);
  // startDate = new Date(new Date().setMonth(new Date().getMonth() - 1))
  //   .toISOString().substr(0, 10);

  summaryDate = new Date();
  rangeStartDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
  rangeEndDate = new Date();
  get startDate() {
    return this.rangeStartDate.toISOString().substr(0, 10);
  }
  get endDate() {
    return this.rangeEndDate.toISOString().substr(0, 10);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
