import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PIPES
import { ObjectKeysPipeModule } from './object-keys/object-keys.module';

@NgModule({
  imports: [
    CommonModule,
    ObjectKeysPipeModule,
  ],
  declarations: [],
  exports: [
    ObjectKeysPipeModule,
  ]
})
export class NgxToolsModule { }
