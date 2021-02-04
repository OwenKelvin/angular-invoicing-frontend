import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { ILink } from '../interfaces/link.interface';
import { Store, select } from '@ngrx/store';
import { selectMyPermissions, selectMyRoles } from 'src/app/pages/my-profile/store/selectors/my-profile.selectors';
import { map } from 'rxjs/operators';
import * as fromLinks from '../../store/selectors/permissions.selectors';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private store: Store) { }
  myPermissions$ = this.store.pipe(select(selectMyPermissions));
  myRoles$ = this.store.pipe(select(selectMyRoles));
  dashboardLinks$: Observable<ILink[]> = this.filerAllowed(this.store.select(fromLinks.selectDashdoardLinks));
  salesLinks$: Observable<ILink[]> = this.filerAllowed(this.store.select(fromLinks.salesLinks));
  reportsLinks$: Observable<ILink[]> = this.filerAllowed(this.store.select(fromLinks.selectReportsLinks));
  allLinks$: Observable<ILink[]> = this.filerAllowed(this.store.select(fromLinks.allLinks));
  filerAllowed(links$: Observable<ILink[]>): Observable<ILink[]> {
    return combineLatest([this.myPermissions$, this.myRoles$, links$]).pipe(
      map(([myPermissions, myRoles, links]) =>
        links?.filter(link => myRoles?.includes('super admin') || myPermissions?.some(r => link.permissions?.includes(r)))
      )
    );
  }
}
