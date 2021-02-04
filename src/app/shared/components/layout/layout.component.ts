import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routerTransition } from './route.animation';
import { RouterOutlet } from '@angular/router';
import { AppState } from 'src/app/store/reducers';
import { selectShowMenu } from 'src/app/store/selectors/menu-toggle.selector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  animations: [routerTransition],
})
export class LayoutComponent implements OnInit {
  isMenuOpen$: Observable<boolean>;

  routerActivated = false;
  closeFullScreenMode = (): void => {
    document.exitFullscreen();
  }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isMenuOpen$ = this.store.select(selectShowMenu);
  }

  getState(outlet: RouterOutlet) {
    if (outlet?.isActivated) {
      return outlet.component;
    }
    return null;
  }

}
