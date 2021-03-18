import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthCenteredContentComponent } from './full-width-centered-content.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    FullWidthCenteredContentComponent,
  ],
  exports: [
    FullWidthCenteredContentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppFullWidthCenteredContentModule { }




