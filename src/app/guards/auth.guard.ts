import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  return authService.isLoggedIn.pipe(
    map((x)=>{
      if(x){
        router.navigate(['/dashboard'])
        return true
      } else {
        router.navigate(['/'])
        return false
      }
    })
  )
};
