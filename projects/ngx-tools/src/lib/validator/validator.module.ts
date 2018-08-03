import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgtValidatorComponent } from './validator.component';
import { NgtFieldErrorManagerService } from './field-error-manager.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NgtValidatorComponent,
  ],
  exports: [
    NgtValidatorComponent,
  ],
  providers: [
    NgtFieldErrorManagerService,
  ]
})
export class NgtValidatorModule { }