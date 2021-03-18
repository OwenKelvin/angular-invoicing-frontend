import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Minus2parenthesisPipe } from './minus2parenthesis.pipe';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [Minus2parenthesisPipe],
  exports: [
    Minus2parenthesisPipe
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class Minus2parenthesisModule { }
