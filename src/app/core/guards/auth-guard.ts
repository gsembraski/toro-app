
import { Router, type CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivateFn } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { LoginComponent } from "../../login/login.component";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export function AuthGuard(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): CanActivateFn {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(["/login"]);
  }
  return () => true
}