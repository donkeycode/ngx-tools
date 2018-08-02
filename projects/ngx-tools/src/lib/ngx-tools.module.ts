import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PIPES
import { ObjectKeysPipeModule } from './object-keys/object-keys.module';
import { SafePipeModule } from './safe/safe.module';

@NgModule({
  imports: [
    CommonModule,
    ObjectKeysPipeModule,
    SafePipeModule,
  ],
  declarations: [],
  exports: [
    ObjectKeysPipeModule,
    SafePipeModule,
  ]
})
export class NgxToolsModule { }
