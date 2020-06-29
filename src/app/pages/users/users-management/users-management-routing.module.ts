import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersManagementComponent } from './users-management.component';
import { SupportStaffAdmissionComponent } from './support-staff-admission/support-staff-admission.component';
import { CreateStaffComponent } from './support-staff-admission/create-staff/create-staff.component';
import { AllUsersComponent } from './all-users/all-users.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: UsersManagementComponent
  },
  {
    path: 'support-staff',
    children: [
      {
        path: '',
        pathMatch: 'full',
        data: {
          breadcrumb: null
        },
        component: SupportStaffAdmissionComponent
      },
      {
        path: ':id',
        data: {
          breadcrumb: null
        },
        children: [
          {
            path: 'create',
            component: CreateStaffComponent,
            data: {
              breadcrumb: 'New Staff'
            },
          }
        ]
      },
    ]
  },
  {
    path: 'users',
    data: {
      breadcrumb: 'All Users'
    },
    component: AllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
