import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'contratar-servicios',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./Pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./Pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'landing',
    loadComponent: () => import('./Pages/landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./Pages/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'ofrecer-servicios',
    loadComponent: () => import('./Pages/ofrecer-servicios/ofrecer-servicios.page').then( m => m.OfrecerServiciosPage)
  },
  {
    path: 'contratar-servicios',
    loadComponent: () => import('./Pages/contratar-servicios/contratar-servicios.page').then( m => m.ContratarServiciosPage)
  },
];
