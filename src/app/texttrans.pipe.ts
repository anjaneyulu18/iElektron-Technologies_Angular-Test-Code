import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texttrans'
})
export class TexttransPipe implements PipeTransform {

  transform(value: any) {
    const values = value.split(' ');
    return values.map((s:any) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  }

}
