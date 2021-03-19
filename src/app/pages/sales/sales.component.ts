import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ILink} from 'src/app/shared/interfaces/link.interface';
import {LinkService} from 'src/app/shared/services/link.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.less']
})
export class SalesComponent {

  links$: Observable<ILink[]> = this.linkService.salesLinks$;

  constructor(private linkService: LinkService) {
  }

}
