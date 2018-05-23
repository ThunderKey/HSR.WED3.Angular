import { Directive, Input, forwardRef } from '@angular/core';

import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[wedValidateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true,
  }],
})
export class EqualValidator implements Validator {
  @Input()
  wedValidateEqual: string;

  validate(control: AbstractControl): ValidationErrors {
    if (control.value !== this.wedValidateEqual) {
      return { hasError: true };
    }
    return null;
  }
}
