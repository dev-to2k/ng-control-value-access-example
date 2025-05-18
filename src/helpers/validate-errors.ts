import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class ValidateErrors {
  static required(control: AbstractControl) {
    const value = control.value || '';
    return !value ? { required: true } : null;
  }

  static minLength(min: number) {
    return (control: AbstractControl) => {
      const value = control.value || '';
      return value.length < min
        ? { minlength: { requiredLength: min, actualLength: value.length } }
        : null;
    };
  }

  static maxLength(max: number) {
    return (control: AbstractControl) => {
      const value = control.value || '';
      return value.length > max
        ? { maxlength: { requiredLength: max, actualLength: value.length } }
        : null;
    };
  }

  static pattern(regex: RegExp) {
    return (control: AbstractControl) => {
      const value = control.value || '';
      return value.length > 0 && !regex.test(value) ? { pattern: true } : null;
    };
  }

  static matchFields(field1: string, field2: string): ValidatorFn {
    return (group: AbstractControl) => {
      if (!(group instanceof FormGroup)) return null;
      const value1 = group.get(field1)?.value;
      const value2 = group.get(field2)?.value;
      if (value1 !== value2) {
        return { fieldsMismatch: true };
      }
      return null;
    };
  }
}
