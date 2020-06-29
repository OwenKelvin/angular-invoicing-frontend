import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SupportStaffService } from '../../services/support-staff.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.less']
})
export class ViewUserComponent {

  supportStaffProfile$: Observable<any> = this.route.paramMap
    .pipe(
      map(params => Number(params.get('id'))),
      mergeMap(id => this.supportStaffService.loadStaffWithId$(id)),
    );

  constructor(
    private route: ActivatedRoute,
    private supportStaffService: SupportStaffService
  ) { }

  changeProfile($event: any) {
    console.log($event);
  }
}
