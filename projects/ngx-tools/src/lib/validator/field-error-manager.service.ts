import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class NgtFieldErrorManagerService {
  public renderer: Renderer2;

  errorsMapping = {
    required: 'Field is required'
  };

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public errorOnControl(formElement: any, name: string, control: AbstractControl) :void {
    const divError = this.createErrorFieldElement(name);
    this.addErrorMessages(control, divError);
    const input = formElement.querySelector('[name="' + name +'"]');
    this.renderer.insertBefore(formElement, divError, input);
  }

  public clearErrorDiv(element: any, controls: any): void {
    for (let controlName of Object.keys(controls)) {
      if (
        !controls[controlName].dirty
        && controls[controlName].valid
      ) {
        return;
      }
      const oldErrorDiv = this.renderer.parentNode(element)
        .querySelector('*[data-error-field="' + controlName +'"]');
      if (!oldErrorDiv) {
        continue;
      }
      this.renderer.removeChild(this.renderer.parentNode(element), oldErrorDiv);
    }
  }

  private createErrorFieldElement(name: string): any {
    const elem = this.renderer.createElement('div');
    this.renderer.setAttribute(elem, 'class', 'error-field');
    this.renderer.setAttribute(elem, 'data-error-field', name);
    return elem;
  }

  private addErrorMessages(control: AbstractControl, element: any): void {
    for (let error of Object.keys(control.errors)) {
      element.textContent = this.errorsMapping[error];
    }
  }
}
