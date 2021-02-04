import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthCenteredContentComponent } from './full-width-centered-content.component';

@NgModule({
  declarations: [
    FullWidthCenteredContentComponent,
  ],
  exports: [
    FullWidthCenteredContentComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AppFullWidthCenteredContentModule { }




