import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minus2parenthesis'
})
export class Minus2parenthesisPipe implements PipeTransform {

  transform(value: number): any {
    return value.toString().charAt(0) === '-' ?
      '(' + value.toString().substring(1, value.toString(9).length) + ')' :
      value;
  }
}
