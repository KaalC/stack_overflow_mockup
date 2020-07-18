import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyCount'
})
export class ModifyCountPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (  Math.round(value / 1000) > 0 ) {
      return Math.round( value / 1000 ) + 'k';
    }
    else
    {
      return value.toString();
    }
  }

}
