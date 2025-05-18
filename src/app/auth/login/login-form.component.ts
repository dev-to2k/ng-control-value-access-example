import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ValidateErrors } from '../../../helpers/validate-errors';
import { InputComponent } from '../../input/input.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, RouterLink, TranslateModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [
      ValidateErrors.required,
      ValidateErrors.minLength(3),
    ]),
    password: new FormControl('', [
      ValidateErrors.required,
      ValidateErrors.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
