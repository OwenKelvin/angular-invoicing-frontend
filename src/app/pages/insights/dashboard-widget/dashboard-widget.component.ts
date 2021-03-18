import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.less']
})
export class DashboardWidgetComponent implements OnInit {

  @Input() value = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
