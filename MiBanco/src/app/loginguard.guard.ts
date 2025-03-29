import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Datosloguin } from "./pagina-ppal/datosloguin/datosloguin";
 
@Injectable({providedIn: 'root'})
export class rutaGuard implements CanActivate {
 
 
  constructor(private router: Router, private datosloguin: Datosloguin) { }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    let email = '';
    this.datosloguin.userEmail$.subscribe((value) => {
      email = value
    });
    if (email  == 'bjimenez_85@hotmail.com') {
      return true;
    } else {
     // this.router.navigate(['/login']);
      return true;

    }
  }
}