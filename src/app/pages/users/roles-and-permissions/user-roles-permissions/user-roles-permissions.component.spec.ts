import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolesPermissionsComponent } from './user-roles-permissions.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorModule } from 'src/app/shared/components/error/error.module';

describe('UserRolesPermissionsComponent', () => {
  let component: UserRolesPermissionsComponent;
  let fixture: ComponentFixture<UserRolesPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        RouterTestingModule
      ],
      declarations: [ UserRolesPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
