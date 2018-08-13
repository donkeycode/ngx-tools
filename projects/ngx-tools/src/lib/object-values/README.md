## Example for ObjectValuesPipeModule

### Install
```
import { NgModule } from '@angular/core';
import { ObjectKeysPipeModule } from 'ngx-tools/object-values';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ObjectValuesPipeModule,
  ],
  exports: [
    ...
  ],
})
export class AppModule { }

```

### Use

`<ng-template ngFor let-day [ngForOf]="(days | ngtObjectValues)"></ng-template>`

