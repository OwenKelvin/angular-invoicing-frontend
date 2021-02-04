import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.less']
})
export class UsersManagementComponent implements OnInit {

  links$ = of([
    {
      name: 'All Support Staff',
      icon: 'icon-user-circle-o',
      link: 'users/users-management/users'
    },
    {
      name: 'New Staff',
      icon: 'icon-user-circle-o',
      link: 'users/users-management/support-staff'
    },

  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
