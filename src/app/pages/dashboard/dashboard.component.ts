import { Component } from '@angular/core';
import { LinkService } from 'src/app/shared/services/link.service';
import { Observable } from 'rxjs';
import { ILink } from 'src/app/shared/interfaces/link.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  links$: Observable<ILink[]> = this.linkService.dashboardLinks$;
  constructor(private linkService: LinkService) { }
}
