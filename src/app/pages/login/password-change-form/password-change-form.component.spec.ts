import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeFormComponent } from './password-change-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';

describe('PasswordChangeFormComponent', () => {
  let component: PasswordChangeFormComponent;
  let fixture: ComponentFixture<PasswordChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AppInputModule,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      providers: [reducerProvider],
      declarations: [ PasswordChangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
