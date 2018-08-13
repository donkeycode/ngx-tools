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

  public errorOnControl(elem: any, name: string, control: AbstractControl, backendErrors: string[] = []) :void {
    const formElement = this.getFormElement(elem);
    const divError = this.createErrorFieldElement(name);
    this.addErrorMessages(control, divError, backendErrors);
    const input = formElement.querySelector('[name="' + name +'"]');
    this.renderer.insertBefore(this.renderer.parentNode(input), divError, input);
  }

  public clearErrorDiv(elm: any, controls: any): void {
    const formElement = this.getFormElement(elm);
    for (let controlName of Object.keys(controls)) {
      if (
        !controls[controlName].dirty
        && controls[controlName].valid
      ) {
        return;
      }
      const oldErrorDiv = formElement.querySelector('*[data-error-field="' + controlName +'"]');
      if (!oldErrorDiv) {
        continue;
      }
      oldErrorDiv.remove()
    }
  }

  private createErrorFieldElement(name: string): any {
    const elem = this.renderer.createElement('div');
    this.renderer.setAttribute(elem, 'class', 'error-field');
    this.renderer.setAttribute(elem, 'data-error-field', name);
    return elem;
  }

  private addErrorMessages(control: AbstractControl, element: any, backendErrors: string[]): void {
    if (backendErrors.length) {
      // Errors BACK
    for (let error of backendErrors) {
      element.textContent = element.textContent
        ? element.textContent + '' + error
        : error;
    }
      return;
    }
    // Errors FRONT
    for (let error of Object.keys(control.errors)) {
      element.textContent = element.textContent
        ? element.textContent + '' + this.errorsMapping[error]
        : this.errorsMapping[error];
    }
  }

  private getFormElement(element) {
    const parent = this.renderer.parentNode(element);
    if (parent.tagName === 'FORM') {
      console.log("FORM", parent);
      return parent;
    }
    return this.getFormElement(parent);
  }
}
