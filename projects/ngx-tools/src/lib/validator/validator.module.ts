import { NgModule, ModuleWithProviders, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgtValidatorComponent } from './validator.component';
import { NgtFieldErrorManagerService } from './field-error-manager.service';
import { phoneValidatorDirective } from './custom-validators/phone-number.directive';

const customValidator = [
  phoneValidatorDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NgtValidatorComponent,
    ...customValidator,
  ],
  exports: [
    NgtValidatorComponent,
    ...customValidator,
  ],
  providers: [ NgtFieldErrorManagerService ]
})
export class NgtValidatorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgtValidatorModule,
      providers: [
        NgtFieldErrorManagerService
      ]
    };
  }
}
