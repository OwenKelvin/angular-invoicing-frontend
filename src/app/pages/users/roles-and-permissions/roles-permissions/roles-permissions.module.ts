import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { RolesPermissionsComponent } from './roles-permissions.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RolesPermissionEditComponent } from './roles-permission-edit/roles-permission-edit.component';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import { AppCheckboxModule } from 'src/app/shared/components/checkbox/checkbox.module';
import { AppValidateSubmitButtonModule } from 'src/app/shared/components/validate-submit-buttons/app-validate-submit-buttons.module';


@NgModule({
  declarations: [
    RolesPermissionsComponent,
    RolesPermissionEditComponent],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    RouterModule,
    AppCheckboxModule,
    AppInputModule,
    AppValidateSubmitButtonModule
  ]
})
export class RolesPermissionsModule { }
