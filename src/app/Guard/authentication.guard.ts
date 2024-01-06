import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const auth: AuthService = inject(AuthService);
  if (auth.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
