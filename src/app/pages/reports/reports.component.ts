import { Component } from '@angular/core';
import { LinkService } from 'src/app/shared/services/link.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less']
})
export class ReportsComponent {

  constructor( private linkService: LinkService) { }

  links$ = this.linkService.reportsLinks$;

}
