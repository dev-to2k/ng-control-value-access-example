import { Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login/login-form.component';
import { SignUpFormComponent } from './auth/sign-up/sign-up-form.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    data: { titleKey: 'login.title' },
  },
  {
    path: 'sign-up',
    component: SignUpFormComponent,
    data: { titleKey: 'signup.title' },
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
