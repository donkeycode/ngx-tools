import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngtObjectValues', pure: false })
export class ObjectValuesPipe implements PipeTransform {
  transform(value: any): any[] {
    if (!value) {
      return [];
    }
    return (Object as any).values(value);
  }
}
