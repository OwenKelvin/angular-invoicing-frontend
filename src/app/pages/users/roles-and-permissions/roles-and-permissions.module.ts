import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesAndPermissionsRoutingModule } from './roles-and-permissions-routing.module';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';
import { AppLinksModule } from 'src/app/shared/components/links/links.module';



@NgModule({
  declarations: [RolesAndPermissionsComponent],
  imports: [
    CommonModule,
    RolesAndPermissionsRoutingModule,
    AppLinksModule
  ]
})
export class RolesAndPermissionsModule { }
