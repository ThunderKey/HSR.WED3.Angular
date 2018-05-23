import { Injectable } from '@angular/core';
import { Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './';
import { NavigationService } from '../../core/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private autSvc: AuthService, private navigationSvc: NavigationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.autSvc.hasCredentials) {
      return true;
    }

    this.navigationSvc.goToLogin();
    return false;
  }
}
