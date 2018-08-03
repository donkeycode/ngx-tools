import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';
import { NgtFieldErrorManagerService } from './field-error-manager.service';
@Component({
  selector: 'ngt-validator',
  templateUrl: 'validator.component.html'
})

export class NgtValidatorComponent implements OnInit {
  @Input() frontend: NgForm;
  public errorMessages: string[] = [];

  private subscriptionValues;
  private subscriptionStatus;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private fieldErrorManager: NgtFieldErrorManagerService
  ) {}

  public ngOnInit() {
    this.frontend.form.valueChanges
      .subscribe(values => this.valuesChanged(values));
    //
    this.frontend.form.statusChanges
      .subscribe(status => this.statusChanged(status));
  }

  public ngOnDestroy() {
    this.subscriptionValues.unsubscribe();
    this.subscriptionStatus.unsubscribe();
  }

  private statusChanged(status: string) {
    if (status !== 'INVALID') {
      return;
    }

    for (let controlName of Object.keys(this.frontend.controls)) {
      if (!this.frontend.controls[controlName].dirty) {
        continue;
      }
      this.fieldErrorManager.errorOnControl(this.renderer2.parentNode(this.elementRef.nativeElement), controlName, this.frontend.controls[controlName]);
    }
  }

  private valuesChanged(values: any) {
    console.log('values', values);
    this.fieldErrorManager.clearErrorDiv(this.elementRef.nativeElement, this.frontend.controls);
  }






}
