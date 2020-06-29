import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBubbleComponent } from './loading-bubble.component';


@NgModule({
  declarations: [
    LoadingBubbleComponent
  ],
  exports: [
    LoadingBubbleComponent
  ],

  imports: [
    CommonModule,
  ]
})
export class AppLoadingBubbleModule { }
