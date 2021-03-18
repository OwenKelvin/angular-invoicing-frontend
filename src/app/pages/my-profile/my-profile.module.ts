import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileInfoComponent } from './my-profile-info/my-profile-info.component';
import { LoadMyProfileModule } from './load-my-profile.module';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import { AppUserProfileModule } from 'src/app/shared/components/user-profile/user-profile.module';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [MyProfileComponent, MyProfileInfoComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    AppUserProfileModule,
    AppLoadingBubbleModule,
    AppLayoutModule,
    ReactiveComponentModule
  ]
})
export class MyProfileModule { }
