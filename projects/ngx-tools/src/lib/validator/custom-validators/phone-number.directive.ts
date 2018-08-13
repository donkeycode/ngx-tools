import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

@Directive({
  selector: '[ngt-phone][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: phoneValidatorDirective,
      multi: true
    }
  ]
})
export class phoneValidatorDirective implements Validator {
  @Input('ngt-phone') public countryCode: string = 'FR';
  validator: ValidatorFn;

  constructor() {
    this.validator = this.phoneValidator();
  }

  validate(c: FormControl) {
    console.log(this.validator(c));
    return this.validator(c);
  }

  phoneValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (!control.value) {
        return;
      }

      const returnError = { phoneNumber: true };
      const util = PhoneNumberUtil.getInstance();
      let phoneNumber;

      try {
        phoneNumber = util.parse(control.value, this.countryCode);
      } catch (e) {
        return returnError;
      }

      return !util.isValidNumber(phoneNumber)
      ? returnError
      : null;
    }
  }
}
