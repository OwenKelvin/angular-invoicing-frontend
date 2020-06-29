import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest } from 'rxjs';
import { LinkService } from 'src/app/shared/services/link.service';
import { ILink } from '../../interfaces/link.interface';
import { AppState } from 'src/app/store/reducers';
import { selectShowMenu } from 'src/app/store/selectors/menu-toggle.selector';
import { hideMenu, showMenu } from 'src/app/store/actions/menu-toggle.actions';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  appVersion = 'V 1.1.2'
  isMenuClosed$: Observable<boolean>;
  listItems$: Observable<ILink[]>;
  isMenuClosed: boolean;
  isClickedSubject$ = new Subject();
  isSmallDevice$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(state => state.matches)
    );

  constructor(
    private store: Store<AppState>,
    private linkService: LinkService,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.isMenuClosed = true;
    this.isMenuClosed$ = this.store.select(selectShowMenu);
    this.isMenuClosed$.subscribe(isMenuClosed => {
      this.isMenuClosed = isMenuClosed;
    });
    this.listItems$ = this.linkService.dashboardLinks$;

    combineLatest([
      this.isClickedSubject$,
      this.isSmallDevice$
    ]).pipe(
      filter(([clicked, isSmallDevice]) => clicked && isSmallDevice),
      tap(() => this.store.dispatch(showMenu())),
      tap(() => this.isClickedSubject$.next(false))
    ).subscribe()
  }
  toggleMenu(): void {
    if (this.isMenuClosed) {
      this.store.dispatch(hideMenu());
    } else {
      this.store.dispatch(showMenu());
    }
  }
  goto($event: MouseEvent, _b: any) {
    $event.stopPropagation(); // Only seems to
    $event.preventDefault(); // work with both
  }

  handleLinkClick() {
    this.isClickedSubject$.next(true)
  }

}
