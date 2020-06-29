import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './users-management/view-user/view-user.component';
import { ViewUserInfoComponent } from './users-management/view-user/view-user-info/view-user-info.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: UsersComponent
  },
  {
    path: 'users-management',
    loadChildren: () => import('./users-management/users-management.module')
      .then(m => m.UsersManagementModule),
    data: {
      breadcrumb: 'Users Management'
    },
  },
  {
    path: 'roles-and-permissions',
    loadChildren: () => import('./roles-and-permissions/roles-and-permissions.module')
      .then(m => m.RolesAndPermissionsModule),
    data: {
      breadcrumb: 'Users Management'
    },
  },
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    component: ViewUserComponent,
    children: [
      {
        path: 'info',
        component: ViewUserInfoComponent
      },
      {
        path: 'password-management',
        loadChildren: () => import('./../login/password-management/password-management.module')
          .then(m => m.PasswordManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
