import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AppLinksModule } from 'src/app/shared/components/links/links.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdmissionsEffects } from './store/effects/admissions.effects';
import * as fromAdmissions from './store/reducers/index';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { LoadUsersModule } from './users-management/load-users.module';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppLinksModule,
    StoreModule.forFeature(fromAdmissions.admissionsFeatureKey, fromAdmissions.reducers),
    EffectsModule.forFeature([AdmissionsEffects]),
    AppLayoutModule,
    LoadUsersModule,
    ModalModule.forRoot()
  ]
})
export class UsersModule { }
