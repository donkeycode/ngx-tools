import { Injectable, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class NgtFieldErrorManagerService {
  errorsMapping = {
    required: 'Field is required'
  };

  constructor(
    private renderer2: Renderer2
  ) {}

  public errorOnControl(formElement: any, name: string, control: AbstractControl) :void {
    const divError = this.createErrorFieldElement(name);
    this.addErrorMessages(control, divError);
    const input = formElement.querySelector('[name="' + name +'"]');
    this.renderer2.insertBefore(formElement, divError, input);
  }

  public clearErrorDiv(element: any, controls: any): void {
    for (let controlName of Object.keys(controls)) {
      if (
        !controls[controlName].dirty
        && controls[controlName].valid
      ) {
        return;
      }
      const oldErrorDiv = this.renderer2.parentNode(element)
        .querySelector('*[data-error-field="' + controlName +'"]');
      if (!oldErrorDiv) {
        continue;
      }
      this.renderer2.removeChild(this.renderer2.parentNode(element), oldErrorDiv);
    }
  }

  private createErrorFieldElement(name: string): any {
    const elem = this.renderer2.createElement('div');
    this.renderer2.setAttribute(elem, 'class', 'error-field');
    this.renderer2.setAttribute(elem, 'data-error-field', name);
    return elem;
  }

  private addErrorMessages(control: AbstractControl, element: any): void {
    for (let error of Object.keys(control.errors)) {
      element.textContent = this.errorsMapping[error];
    }
  }
}
