import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import {
  SupportStaffAdmissionComponent
} from './support-staff-admission/support-staff-admission.component';

import { CreateStaffComponent } from './support-staff-admission/create-staff/create-staff.component';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { AppTelInputModule } from 'src/app/shared/components/tel-input/tel-input.module';
import { AppValidateSubmitButtonModule } from 'src/app/shared/components/validate-submit-buttons/app-validate-submit-buttons.module';
import { UsersManagementComponent } from './users-management.component';
import { AppLinksModule } from 'src/app/shared/components/links/links.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { AppPrintModule } from 'src/app/shared/print/print.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewUserInfoComponent } from './view-user/view-user-info/view-user-info.component';
import { AppUserProfileModule } from 'src/app/shared/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import { LoadUsersModule } from './load-users.module';

@NgModule({
  declarations: [
    SupportStaffAdmissionComponent,
    CreateStaffComponent,
    UsersManagementComponent,
    AllUsersComponent,
    ViewUserComponent,
    ViewUserInfoComponent
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppTelInputModule,
    AppValidateSubmitButtonModule,
    AppLinksModule,
    LoadUsersModule,
    AppPrintModule,
    AppUserProfileModule,
    AppLoadingBubbleModule

  ]
})
export class UsersManagementModule { }
