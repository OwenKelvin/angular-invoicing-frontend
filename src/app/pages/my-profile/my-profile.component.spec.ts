import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyProfileComponent } from './my-profile.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { AppUserProfileModule } from 'src/app/shared/components/user-profile/user-profile.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {reducer} from './store/reducers/my-profile.reducer';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppUserProfileModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        BsDatepickerModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('myProfile', reducer)
      ],
      declarations: [MyProfileComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
