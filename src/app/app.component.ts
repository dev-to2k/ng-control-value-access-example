import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { InputComponent } from './input/input.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

function requiredAndMinLength(min: number): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value || '';
    const errors: any = {};
    if (!value) {
      errors['required'] = true;
      errors['minlength'] = { requiredLength: min, actualLength: 0 };
    } else if (value.length < min) {
      errors['minlength'] = { requiredLength: min, actualLength: value.length };
    }
    return Object.keys(errors).length ? errors : null;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    ErrorMessageComponent,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [requiredAndMinLength(6)]),
    password: new FormControl('', [requiredAndMinLength(6)]),
  });

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('vi');
  }

  get usernameErrors() {
    const control = this.loginForm.controls['username'];
    if (!control || !control.errors || !(control.dirty || control.touched))
      return [];
    const errors: string[] = [];
    if (control.errors['required'])
      errors.push(this.translate.instant('username.required'));
    if (control.errors['minlength'])
      errors.push(this.translate.instant('username.minlength'));
    return errors;
  }

  get passwordErrors() {
    const control = this.loginForm.controls['password'];
    if (!control || !control.errors || !(control.dirty || control.touched))
      return [];
    const errors: string[] = [];
    if (control.errors['required'])
      errors.push(this.translate.instant('password.required'));
    if (control.errors['minlength'])
      errors.push(this.translate.instant('password.minlength'));
    return errors;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
