import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.less']
})
export class AllUsersComponent {

  users$: Observable<any> = this.usersService.users$;
  constructor(private usersService: UsersService) { }

}
