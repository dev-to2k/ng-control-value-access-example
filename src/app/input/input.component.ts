import { CommonModule, NgClass } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, NgClass, ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  id = input<string>('');
  formControl = input<FormControl>(undefined as any);
  field = input<string>('');

  value = signal('');

  onChange = (value: any) => {};
  onTouched = () => {};

  constructor(private translate: TranslateService) {}

  writeValue(value: any): void {
    this.value.set(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }

  getErrorMessages() {
    const control = this.formControl();
    if (!control || !control.errors || !(control.dirty || control.touched))
      return [];
    const errors: string[] = [];
    if (control.errors['required'])
      errors.push(this.translate.instant(`${this.field()}.required`));
    if (control.errors['minlength'])
      errors.push(this.translate.instant(`${this.field()}.minlength`));
    if (control.errors['maxlength'])
      errors.push(this.translate.instant(`${this.field()}.maxlength`));
    if (control.errors['pattern'])
      errors.push(this.translate.instant(`${this.field()}.pattern`));
    return errors;
  }
}
