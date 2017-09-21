import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import { Observable } from "rxjs/Rx";
import { DbService } from "../db.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ProfileGuard implements CanActivate {
  //allow :boolean = false;
  constructor(private db: DbService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(route);
    //console.log(state);

    console.log(route.params.id);

    if (!this.db.isIDAvailable(route.params.id)){
      this.router.navigate(['/error']);
      return false;
    }

    return true;

  }
}
