import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private dataService:DataService,private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    /**
     * if user authenticated
     *  if user is authorized
     *    return true or return false;
     */
    console.log("Auth Guard in Action");
    if (!this.dataService.isAuthticated){
      alert("You are not Authorized to see this page, Please login first!!!")
      console.log("Auth Guard in Action - Rejected");
      this.route.navigate(['login']);
    }

    console.log("Auth Guard in Action - Accepted");
    return this.dataService.isAuthticated;

  }
}
