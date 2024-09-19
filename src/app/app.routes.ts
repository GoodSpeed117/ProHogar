import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
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
    path: 'reset-password',
    loadComponent: () => import('./Pages/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./Pages/tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./Pages/home/home.page').then( m => m.HomePage),
      },
      {
        path: 'search',
        loadComponent: () => import('./Pages/search/search.page').then( m => m.SearchPage),
      },
      {
        path: 'reservations',
        loadComponent: () => import('./Pages/reservations/reservations.page').then( m => m.ReservationsPage),
      },
      {
        path: 'offers',
        loadComponent: () => import('./Pages/offers/offers.page').then( m => m.OffersPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];
