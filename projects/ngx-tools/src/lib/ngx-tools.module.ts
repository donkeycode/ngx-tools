import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PIPES
import { ObjectKeysPipeModule } from './object-keys/object-keys.module';
import { ObjectValuesPipeModule } from './object-values/object-values.module';
import { SafePipeModule } from './safe/safe.module';
import { NgtValidatorModule } from './validator/validator.module';

const imports = [
  ObjectKeysPipeModule,
  SafePipeModule,
  ObjectValuesPipeModule,
];

@NgModule({
  imports: [
    CommonModule,
    NgtValidatorModule.forRoot(),
    ...imports,
  ],
  declarations: [],
  exports: [
    NgtValidatorModule,
    ...imports,
  ]
})
export class NgxToolsModule {}
