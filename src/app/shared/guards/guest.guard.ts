import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {from, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {AuthenticationService} from '../services/authentication.service';
import {showToast} from 'src/app/store/actions/toast.actions';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(
    // tslint:disable-next-line:variable-name
    _next: ActivatedRouteSnapshot,
    // tslint:disable-next-line:variable-name
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser) {
      return true;
    }
    this.store.dispatch(showToast({
      data: {
        toastHeader: 'Logged in',
        toastBody: 'Successfully authenticated!'
      }
    }));
    this.router.navigate(['/dashboard']).then();
    return false;
  }
}
