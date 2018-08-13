import { Component, Input, OnInit, ElementRef, Renderer2, OnDestroy, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgtFieldErrorManagerService } from './field-error-manager.service';
import { SymfonyError } from './symfony-errors';

@Component({
  selector: 'ngt-validator',
  templateUrl: 'validator.component.html'
})

export class NgtValidatorComponent implements OnInit, OnDestroy, OnChanges {
  @Input() frontend: NgForm;
  @Input() symfony: SymfonyError;
  public errorMessages: string[] = [];

  private subscriptionValues;
  private subscriptionStatus;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private fieldErrorManager: NgtFieldErrorManagerService
  ) {
    this.fieldErrorManager.renderer = this.renderer2;
  }

  public ngOnInit() {
    this.frontend.form.valueChanges
      .subscribe(values => this.valuesChanged());
    this.frontend.form.statusChanges
      .subscribe(status => this.statusChanged(status));
  }

  public ngOnChanges(changes) {
    if (changes.symfony && typeof this.symfony === 'object') {
      this.setSymfonyError(this.symfony);
    }
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
      this.fieldErrorManager.errorOnControl(
        this.elementRef.nativeElement,
        controlName,
        this.frontend.controls[controlName]
      );
    }
  }

  private valuesChanged() {
    this.fieldErrorManager.clearErrorDiv(
      this.elementRef.nativeElement,
      this.frontend.controls
    );
  }

  private setSymfonyError(error) {
    error = error.errors;
    this.setSymfonyErrorsField(error);
    this.setSymfonyErrorsForm(error);
  }

  private setSymfonyErrorsField(errors) {
    if (!errors || !errors.children) {
      return;
    }

    const fields = Object.keys(errors.children);

    for (const field of fields) {
      const errorField = errors.children[field].errors;
      if (!errorField) {
        continue;
      }
      this.fieldErrorManager.errorOnControl(
        this.elementRef.nativeElement,
        field,
        this.frontend.controls[field],
        errorField
      );
    }
  }

  private setSymfonyErrorsForm(error) {
    if (!error || !error.errors) {
      return;
    }
    this.errorMessages = error.errors;
  }
}
