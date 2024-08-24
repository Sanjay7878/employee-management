import { Routes } from '@angular/router';
import { noAuthGuard } from '../guards/no-auth.guard';
import { authGuard } from '../guards/auth.guard';

export const layoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../login/login.component').then(C => C.LoginComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../dashboard/dashboard.component').then(C => C.DashboardComponent),
    canActivate: [authGuard]
  }
];
