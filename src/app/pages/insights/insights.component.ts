import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.less']
})
export class InsightsComponent implements OnInit {
  private currentDate = new Date();
  endDate = this.currentDate.toISOString().substr(0, 10);
  startDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1))
    .toISOString().substr(0, 10);

  constructor() {
  }

  ngOnInit(): void {
  }

}
