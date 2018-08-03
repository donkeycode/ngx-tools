import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PIPES
import { ObjectKeysPipeModule } from './object-keys/object-keys.module';
import { ObjectValuesPipeModule } from './object-values/object-values.module';

import { SafePipeModule } from './safe/safe.module';

@NgModule({
  imports: [
    CommonModule,
    ObjectKeysPipeModule,
    SafePipeModule,
    ObjectValuesPipeModule,
  ],
  declarations: [],
  exports: [
    ObjectKeysPipeModule,
    SafePipeModule,
    ObjectValuesPipeModule,
  ]
})
export class NgxToolsModule { }
