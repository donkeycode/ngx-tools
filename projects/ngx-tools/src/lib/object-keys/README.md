## Example for ObjectKeysPipeModule

### Install
```
import { NgModule } from '@angular/core';
import { ObjectKeysPipeModule } from 'ngx-tools/object-keys';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ObjectKeysPipeModule,
  ],
  exports: [
    ...
  ],
})
export class AppModule { }

```

### Use

`<ng-template ngFor let-day [ngForOf]="(days | ngtObjectKeys)"></ng-template>`

