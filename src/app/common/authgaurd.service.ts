import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthgaurdService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (sessionStorage.getItem('AuthCode')) {
      return true;
    } else {
      console.log('Opps Cant find a Auth token');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
