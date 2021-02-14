import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Minus2parenthesisPipe } from './minus2parenthesis.pipe';



@NgModule({
  declarations: [Minus2parenthesisPipe],
  exports: [
    Minus2parenthesisPipe
  ],
  imports: [
    CommonModule
  ]
})
export class Minus2parenthesisModule { }
