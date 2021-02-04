import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordManagementComponent } from './password-management.component';
import { UserPasswordChangeModule } from '../user-password-change/user-password-change.module';
import { UserPasswordResetModule } from '../user-password-reset/user-password-reset.module';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadMyProfileModule } from '../../my-profile/load-my-profile.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppLoadingBubbleModule } from 'src/app/shared/components/loading-bubble/app-loading-bubble';

describe('PasswordManagementComponent', () => {
  let component: PasswordManagementComponent;
  let fixture: ComponentFixture<PasswordManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        UserPasswordChangeModule,
        UserPasswordResetModule,
        HttpClientTestingModule,
        LoadMyProfileModule,
        AppLoadingBubbleModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
      ],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {},
            parent: {
              snapshot: {},
              parent: { paramMap: of({ get: () => 1 }) }
            }
          }
        }
      ],
      declarations: [PasswordManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
