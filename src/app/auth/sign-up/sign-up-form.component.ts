import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ValidateErrors } from '../../../helpers/validate-errors';
import { InputComponent } from '../../input/input.component';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, TranslateModule, RouterLink],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
  signUpForm = new FormGroup(
    {
      username: new FormControl('', [
        ValidateErrors.required,
        ValidateErrors.minLength(3),
      ]),
      password: new FormControl('', [
        ValidateErrors.required,
        ValidateErrors.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        ValidateErrors.required,
        ValidateErrors.minLength(6),
      ]),
    },
    ValidateErrors.matchFields('password', 'confirmPassword')
  );

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}
