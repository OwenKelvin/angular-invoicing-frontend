import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

   links$ = of([
     { name: 'Admissions', icon: 'icon-user-circle-o', link: 'users/users-management' },
     { name: 'Roles & Permissions', icon: 'icon-sliders', link: 'users/roles-and-permissions' },
   ]);

  constructor() { }

  ngOnInit(): void {
  }

}
