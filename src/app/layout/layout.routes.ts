import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../login/login.component').then(C => C.LoginComponent)
  }
];
