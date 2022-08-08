  import { Injectable } from '@angular/core';
  import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
  import { Observable } from 'rxjs';
  import { HttpService } from './http.service';
  import { Router } from '@angular/router';


  @Injectable({
    providedIn: 'root'
  })
  export class LoginGuard implements CanActivate {
    constructor(public h: HttpService, public router: Router){

    }


    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.h.checkLogin() == false ) {
        this.router.navigate(['/']); 
        return false;

      }else return true;
    }
    
  }
