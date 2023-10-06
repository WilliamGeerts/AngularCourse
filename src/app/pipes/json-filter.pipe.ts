import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFilter'
})
export class JsonFilterPipe implements PipeTransform {

  transform(value: object, typeFiltering: string): string[] {
    if(typeFiltering == "keys")
      return Object.keys(value)
    else if(typeFiltering == "values")
      return Object.values(value)
    else
      return []
  }

}
