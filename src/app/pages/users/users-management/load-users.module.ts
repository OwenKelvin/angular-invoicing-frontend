import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { usersFeatureKey, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SupportStaffEffects } from './store/effects/support-staff.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(usersFeatureKey, reducers),
    EffectsModule.forFeature([SupportStaffEffects]),
  ]
})

export class LoadUsersModule { };