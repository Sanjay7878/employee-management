import { Routes } from '@angular/router';
import { layoutRoutes } from './layout/layout.routes';

export const routes: Routes = [
  {
    path: '', 
    loadComponent: () => import('./layout/layout.component').then(C => C.LayoutComponent),
    children: [...layoutRoutes]
  }
];
