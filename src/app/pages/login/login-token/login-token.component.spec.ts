import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTokenComponent } from './login-token.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
import { EffectsModule } from '@ngrx/effects';

describe('LoginTokenComponent', () => {
  let component: LoginTokenComponent;
  let fixture: ComponentFixture<LoginTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppLayoutModule,
        ErrorModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot()
      ],
      providers: [reducerProvider],
      declarations: [ LoginTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
