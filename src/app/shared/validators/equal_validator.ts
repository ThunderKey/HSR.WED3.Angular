import { Directive, Input, forwardRef } from '@angular/core';

import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true,
  }],
  host: { '[attr.validateEqual]': 'validateEqual ? validateEqual : null' }
})
export class EqualValidator implements Validator {
  @Input()
  public validateEqual: string;

  validate(control: AbstractControl): ValidationErrors {
    if(control.value !== this.validateEqual) {
      return { hasError: true };
    }
    return null;
  }
}
