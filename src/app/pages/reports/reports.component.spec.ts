import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportsComponent } from './reports.component';
import { StoreModule } from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers, reducers} from 'src/app/store/reducers';
import { AppLinksModule } from 'src/app/shared/components/links/links.module';
import { RouterTestingModule } from '@angular/router/testing';
import {reducer} from '../my-profile/store/reducers/my-profile.reducer';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('myProfile', reducer),
        StoreModule.forFeature('app', reducers)
      ],
      declarations: [ReportsComponent],
      providers: [reducerProvider],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
