import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBubbleComponent } from './loading-bubble.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    LoadingBubbleComponent
  ],
  exports: [
    LoadingBubbleComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppLoadingBubbleModule { }
