import { Directive, Input, forwardRef } from '@angular/core';

import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[validateCurrency][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CurrencyValidator),
    multi: true,
  }],
  host: { '[attr.validateCurrency]': 'validateCurrency ? validateCurrency : null' }
})

export class CurrencyValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    const amount : number = parseFloat(control.value);
    if(amount < 0.05 || Math.round(amount*20)/20 !== amount) {
      return { hasError: true };
    }
    return null;
  }
}
