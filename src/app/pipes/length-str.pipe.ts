import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthStr'
})
export class LengthStrPipe implements PipeTransform {

  transform(value: string): number {
    return value.length;
  }

}
