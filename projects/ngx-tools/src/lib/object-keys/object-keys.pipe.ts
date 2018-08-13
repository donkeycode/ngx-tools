import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngtObjectKeys', pure: false })
export class ObjectKeysPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string[] {
    if (!value) {
      return [];
    }
    return Object.keys(value);
  }
}
