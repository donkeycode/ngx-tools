import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PIPES
import { ObjectKeysPipeModule } from './object-keys/object-keys.module';
import { ObjectValuesPipeModule } from './object-values/object-values.module';
import { SafePipeModule } from './safe/safe.module';

const imports = [
  ObjectKeysPipeModule,
  SafePipeModule,
  ObjectValuesPipeModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...imports,
  ],
  declarations: [],
  exports: [
    ...imports,
  ]
})
export class NgxToolsModule { }
