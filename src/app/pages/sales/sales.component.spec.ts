import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesComponent } from './sales.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider, reducers} from '../../store/reducers';
import {reducer} from '../my-profile/store/reducers/my-profile.reducer';
import {AppLinksModule} from '../../shared/components/links/links.module';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('app', reducers),
        StoreModule.forFeature('myProfile', reducer),
        AppLinksModule
      ],
      declarations: [ SalesComponent ],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
